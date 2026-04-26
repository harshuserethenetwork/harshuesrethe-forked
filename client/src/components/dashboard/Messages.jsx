import React, { useState, useMemo } from 'react';
import { Box, IconButton, Typography, Tabs, Tab, Button } from '@mui/material';
import {
  LuMail,
  LuTrash2,
  LuUser,
  LuMessageSquare,
  LuRefreshCw,
  LuChevronLeft,
  LuChevronRight,
  LuBell,
} from 'react-icons/lu';
import MessageDetail from './MessageDetail.jsx';
import '../../assets/styles/dashboard-styles/Messages.css';
import { usePaginatedQuery } from 'convex/react';

const PAGE_SIZE = 10;
const STATUS_OPTIONS = ['new', 'priority', 'in progress', 'done', 'ignored'];

/**
 * Messages — inbox list view.
 * When a row is clicked, the entire view swaps to <MessageDetail />.
 *
 * Props:
 *   directContacts  – array from getCasualContact
 *   projectQueries  – array from getSmartContact
 *   onDeleteDirect  – fn(id)
 *   onDeleteProject – fn(id)
 *   onUpdateStatus  – fn(id, newStatus)
 */
const Messages = ({
  directContacts = [],
  directContactsStatus,
  loadMoreDirectContacts,
  projectQueriesData = [],
  smartContactsStatus,
  loadMoreSmartContacts,
  onDeleteDirect,
  onDeleteProject,
  onUpdateStatus,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [selected, setSelected] = useState(null); // null = list view; row = detail view
  const [pages, setPages] = useState({ all: 1, normal: 1, project: 1 });

  const projectQueries = Array.isArray(projectQueriesData)
    ? projectQueriesData
    : projectQueriesData?.page || [];

  /* ── Normalise both lists into one shape ── */
  const normalised = useMemo(() => {
    const direct = directContacts.map((c) => ({
      _id: c._id,
      type: 'direct',
      senderName: c.fullname,
      senderEmail: c.email,
      subject: c.message?.split(' ').slice(0, 5).join(' ') || 'No subject',
      snippet: c.message || '',
      ts: c._creationTime,
      raw: c,
    }));

    const project = projectQueries.map((q) => ({
      _id: q._id,
      type: 'project',
      senderName: q.client_info?.fullname || '—',
      senderEmail: q.client_info?.email || '',
      subject: q.prj_type || q.client_info?.prj_title || 'Project Query',
      snippet: q.client_info?.prj_description || '',
      ts: q._creationTime,
      status: q.status,
      raw: q,
    }));

    return {
      direct,
      project,
      all: [...direct, ...project].sort((a, b) => b.ts - a.ts), // need validation
    };
  }, [directContacts, projectQueries]);

  /* ── Rows for current tab ── */
  const tabRows = useMemo(
    () => ({
      all: normalised.all,
      normal: [...normalised.direct].sort((a, b) => b.ts - a.ts),
      project: [...normalised.project].sort((a, b) => b.ts - a.ts),
    }),
    [normalised]
  );

  const currentRows = tabRows[activeTab] || [];
  const currentPage = pages[activeTab];
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const pageRows = currentRows.slice(startIdx, startIdx + PAGE_SIZE);
  const startNum = pageRows.length === 0 ? 0 : startIdx + 1;
  const endNum = startIdx + pageRows.length;

  const canLoadMoreServer = (tab) => {
    if (tab === 'project') return smartContactsStatus === 'CanLoadMore';
    if (tab === 'normal') return directContactsStatus === 'CanLoadMore';
    if (tab === 'all')
      return (
        smartContactsStatus === 'CanLoadMore' ||
        directContactsStatus === 'CanLoadMore'
      );
    return false;
  };

  const hasMoreLocal = currentRows.length > currentPage * PAGE_SIZE;
  const canGoNext = hasMoreLocal || canLoadMoreServer(activeTab);

  const setPage = (tab, p) => setPages((prev) => ({ ...prev, [tab]: p }));

  const handleNextPage = () => {
    const nextItemsNeeded = (currentPage + 1) * PAGE_SIZE;
    if (currentRows.length < nextItemsNeeded && canLoadMoreServer(activeTab)) {
      if (
        (activeTab === 'project' || activeTab === 'all') &&
        smartContactsStatus === 'CanLoadMore'
      )
        loadMoreSmartContacts(PAGE_SIZE);
      if (
        (activeTab === 'normal' || activeTab === 'all') &&
        directContactsStatus === 'CanLoadMore'
      )
        loadMoreDirectContacts(PAGE_SIZE);
    }
    setPage(activeTab, currentPage + 1);
  };

  /* ── Helpers ── */
  const formatTime = (ts) => {
    if (!ts) return '';
    const date = new Date(ts);
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (date.toDateString() === now.toDateString())
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const slugStatus = (s = '') => s.toLowerCase().replace(/\s+/g, '-');

  /* ── Delete (from list toolbar) ── */
  const handleDeleteRow = (row) => {
    if (row.type === 'direct') onDeleteDirect(row._id);
    else onDeleteProject(row._id);
  };

  /* ── Status change ── */
  const handleStatusChange = (id, newStatus) => {
    onUpdateStatus(id, newStatus);
  };

  /* ── Detail view callbacks ── */
  const handleOpenDetail = (row) => {
    setSelected(row);
    console.log(row);
  };
  const handleCloseDetail = () => setSelected(null);
  const handleDetailDelete = (row) => {
    handleDeleteRow(row);
    setSelected(null);
  };
  const handleDetailStatusChange = (id, newStatus) => {
    handleStatusChange(id, newStatus);
    // Keep selected in sync so the detail view reflects the update immediately
    setSelected((prev) =>
      prev && prev._id === id
        ? {
            ...prev,
            status: newStatus,
            raw: { ...prev.raw, status: newStatus },
          }
        : prev
    );
  };

  const tabs = [
    { id: 'all', label: 'All Messages', icon: null },
    { id: 'normal', label: 'Normal', icon: <LuUser size={13} /> },
    {
      id: 'project',
      label: 'Project Discussion',
      icon: <LuMessageSquare size={13} />,
    },
  ];

  /* ── If a message is selected, render the detail view instead ── */
  if (selected) {
    return (
      <MessageDetail
        message={selected}
        onBack={handleCloseDetail}
        onDelete={handleDetailDelete}
        onUpdateStatus={handleDetailStatusChange}
      />
    );
  }

  /* ─────────────────────────────────────────────── */
  return (
    <Box className="messages-container">
      {/* ── Topbar ── */}
      <Box component="header" className="msg-topbar">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <IconButton
            className="msg-topbar-icon-btn"
            title="Notifications"
            size="small"
          >
            <LuBell size={18} />
          </IconButton>
          <Box className="msg-topbar-avatar">HU</Box>
        </Box>
      </Box>

      {/* ── Page Body ── */}
      <Box component="main" className="msg-body">
        <Typography className="msg-breadcrumb">INBOX</Typography>
        <Typography component="h1" className="msg-page-title">
          Messages
        </Typography>

        <Box className="msg-panel">
          {/* ── Toolbar ── */}
          <Box className="msg-toolbar">
            <Box className="msg-toolbar-left">
              <IconButton className="msg-tool-btn" title="Refresh" size="small">
                <LuRefreshCw size={15} />
              </IconButton>
            </Box>

            <Box className="msg-pagination">
              <Typography className="msg-pagination-info">
                {startNum === 0 && endNum === 0 ? '0' : `${startNum}–${endNum}`}
              </Typography>
              <IconButton
                className="msg-pagination-btn"
                size="small"
                disabled={currentPage <= 1}
                onClick={() => setPage(activeTab, currentPage - 1)}
              >
                <LuChevronLeft size={13} />
              </IconButton>
              <IconButton
                className="msg-pagination-btn"
                size="small"
                disabled={!canGoNext}
                onClick={handleNextPage}
              >
                <LuChevronRight size={13} />
              </IconButton>
            </Box>
          </Box>

          {/* ── Tabs ── */}
          <Tabs
            value={activeTab}
            onChange={(_, newVal) => setActiveTab(newVal)}
            className="msg-tabs-root"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                value={tab.id}
                className="msg-tab-item"
                label={
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    {tab.icon && tab.icon}
                    {tab.label}
                  </Box>
                }
              />
            ))}
          </Tabs>

          {/* ── Message List ── */}
          {pageRows.length === 0 ? (
            <Box className="msg-empty">
              <Box className="msg-empty-icon">
                <LuMail size={22} />
              </Box>
              <Typography className="msg-empty-title">
                No messages yet
              </Typography>
              <Typography className="msg-empty-text">
                Messages will appear here once received
              </Typography>
            </Box>
          ) : (
            <ul className="msg-list">
              {pageRows.map((row, idx) => {
                const isUnread = idx === 0 && currentPage === 1;
                const slug = slugStatus(row.status);
                return (
                  <li
                    key={row._id}
                    className={['msg-row', isUnread ? 'unread' : '']
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => handleOpenDetail(row)}
                  >
                    {/* Type dot */}
                    <span
                      className={`msg-type-dot ${row.type}`}
                      title={row.type === 'direct' ? 'Normal' : 'Project'}
                    />

                    <span className="msg-sender">{row.senderName}</span>

                    <span className="msg-preview">
                      <span className="msg-subject">{row.subject}</span>
                      <span className="msg-sep">–</span>
                      <span className="msg-snippet">{row.snippet}</span>
                    </span>

                    {/* Project: inline status dropdown */}
                    {row.type === 'project' && (
                      <span
                        className="msg-inline-status"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <select
                          className={`msg-inline-select ${slug}`}
                          value={row.raw.status || 'new'}
                          onChange={(e) =>
                            handleStatusChange(row._id, e.target.value)
                          }
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s.charAt(0).toUpperCase() + s.slice(1)}
                            </option>
                          ))}
                        </select>
                        <LuChevronLeft
                          size={10}
                          className="msg-inline-chevron"
                        />
                      </span>
                    )}

                    <span className="msg-time">{formatTime(row.ts)}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* {pageRows.length > 0 && (
            <Typography className="msg-end-marker">End of Recent Activity</Typography>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
