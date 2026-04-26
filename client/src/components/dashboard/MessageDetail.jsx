import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import {
  LuArrowLeft,
  LuTrash2,
  LuBell,
  LuStar,
  LuReply,
  LuUser,
  LuBriefcase,
  LuFileText,
  LuPaperclip,
  LuChevronLeft,
  LuMail,
  LuCalendar,
  LuMessageSquare,
  LuMonitor,
  LuPenTool,
} from 'react-icons/lu';
import '../../assets/styles/dashboard-styles/MessageDetail.css';

const STATUS_OPTIONS = ['new', 'priority', 'in progress', 'done', 'ignored'];

/**
 * MessageDetail — full-screen detail view rendered inside the content frame.
 *
 * Props:
 *   message         – normalised message object (from Messages' useMemo)
 *   onBack          – fn()         go back to the list
 *   onDelete        – fn(row)      delete this message
 *   onUpdateStatus  – fn(id, status)
 */
const MessageDetail = ({ message, onBack, onDelete, onUpdateStatus }) => {
  if (!message) return null;
  console.log(message);
  /* ── Helpers ── */
  const formatFull = (ts) => {
    if (!ts) return '';
    const date = new Date(ts);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / 86400000);
    const timeStr = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const dateStr = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    const ago =
      diffDays === 0
        ? 'Today'
        : diffDays === 1
          ? '1 day ago'
          : `${diffDays} days ago`;
    return `${dateStr}, ${timeStr} (${ago})`;
  };

  const getInitials = (name = '') =>
    name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || '?';

  const handleStatusChange = (e) => {
    onUpdateStatus(message._id, e.target.value);
  };

  const handleDelete = () => {
    onDelete(message);
    onBack();
  };

  const subject =
    message.type === 'direct'
      ? message.raw.message?.split(' ').slice(0, 7).join(' ') || 'No Subject'
      : message.raw.client_info?.prj_title ||
        message.raw.prj_type ||
        'Project Query';

  /* ─────────────────────────────────────────────── */
  return (
    <Box className="msgd-container">
      {/* ── Topbar ── */}
      <Box component="header" className="msgd-topbar">
        {/* Breadcrumb: MESSAGES / DETAILS */}
        <Box className="msgd-breadcrumb-nav">
          <button className="msgd-breadcrumb-link" onClick={onBack}>
            Messages
          </button>
          <span className="msgd-breadcrumb-sep">/</span>
          <span className="msgd-breadcrumb-current">Details</span>
        </Box>

        {/* Right: bell + avatar */}
        <Box className="msgd-topbar-actions">
          <IconButton
            className="msgd-topbar-icon-btn"
            title="Notifications"
            size="small"
          >
            <LuBell size={18} />
          </IconButton>
          <Box className="msgd-topbar-avatar">HU</Box>
        </Box>
      </Box>

      {/* ── Body ── */}
      <Box component="main" className="msgd-body">
        {/* Action bar: back + delete */}
        <Box className="msgd-action-bar">
          <IconButton
            className="msgd-back-btn"
            size="small"
            title="Back to messages"
            onClick={onBack}
          >
            <LuArrowLeft size={15} />
          </IconButton>
          <IconButton
            className="msgd-delete-btn"
            size="small"
            title="Delete message"
            onClick={handleDelete}
          >
            <LuTrash2 size={15} />
          </IconButton>
        </Box>

        {/* Subject + type badge */}
        <Box className="msgd-subject-row">
          <Typography className="msgd-subject">{subject}</Typography>
          <span className={`msgd-type-badge ${message.type}`}>
            {message.type === 'direct' ? 'Contact' : 'Project'}
          </span>
        </Box>

        {/* Sender meta row */}
        <Box className="msgd-sender-row">
          <Box className="msgd-sender-left">
            <Box className="msgd-avatar">{getInitials(message.senderName)}</Box>
            <Box>
              <Typography className="msgd-sender-name">
                {message.senderName}
              </Typography>
              <Typography className="msgd-sender-email">
                {message.senderEmail}
              </Typography>
            </Box>
          </Box>

          <Box className="msgd-sender-right">
            <Typography className="msgd-timestamp">
              {formatFull(message.ts)}
            </Typography>
            <IconButton
              className="msgd-action-icon-btn"
              size="small"
              title="Star"
            >
              <LuStar size={15} />
            </IconButton>
            <IconButton
              className="msgd-action-icon-btn"
              size="small"
              title="Reply"
            >
              <LuReply size={15} />
            </IconButton>
            <IconButton
              className="msgd-action-icon-btn"
              size="small"
              title="More"
            >
              <LuMonitor size={15} />
            </IconButton>
          </Box>
        </Box>

        <hr className="msgd-divider" />

        {/* ── Direct Contact body ── */}
        {message.type === 'direct' && (
          <>
            <Typography className="msgd-message-text">
              {message.raw.message}
            </Typography>
            <Box className="msgd-section-label">
              <LuCalendar size={13} />
              <span>Received</span>
            </Box>
            <Typography className="msgd-field-value" sx={{ mb: '20px' }}>
              {formatFull(message.ts)}
            </Typography>
          </>
        )}

        {/* ── Project Query body ── */}
        {message.type === 'project' && (
          <>
            {/* Description (shown first like an email body) */}
            <Box className="msgd-section-label">
              <LuPenTool size={13} />
              <span>Project Description</span>
            </Box>
            <Typography className="msgd-message-text">
              {message.raw.client_info?.prj_description ||
                'No description provided.'}
            </Typography>

            {/* Project Discussion Details card */}
            <Box className="msgd-section-label">
              <LuBriefcase size={13} />
              <span>Project Details</span>
            </Box>
            <Box className="msgd-details-card">
              <Box className="msgd-details-grid">
                <Box className="msgd-field">
                  <span className="msgd-field-label">Project Type</span>
                  <Typography className="msgd-field-value accent">
                    {message.raw.prj_type ||
                      message.raw.client_info?.prj_title ||
                      '—'}
                  </Typography>
                </Box>
                <Box className="msgd-field">
                  <span className="msgd-field-label">Budget Range</span>
                  <Typography className="msgd-field-value">
                    {message.raw.budget || '—'}
                  </Typography>
                </Box>
                <Box className="msgd-field">
                  <span className="msgd-field-label">Service Type</span>
                  <Typography className="msgd-field-value">
                    {message.raw.prj_category || '—'}
                  </Typography>
                </Box>
                <Box className="msgd-field">
                  <span className="msgd-field-label">Timeline</span>
                  <Typography className="msgd-field-value">
                    {message.raw.timeline || '—'}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Client info */}
            <Box className="msgd-section-label msgd-section-gap">
              <LuUser size={13} />
              <span>Client Information</span>
            </Box>
            <Box className="msgd-details-card">
              <Box className="msgd-details-grid">
                <Box className="msgd-field">
                  <span className="msgd-field-label">Full Name</span>
                  <Typography className="msgd-field-value">
                    {message.raw.client_info?.fullname || '—'}
                  </Typography>
                </Box>
                <Box className="msgd-field">
                  <span className="msgd-field-label">Email</span>
                  <Typography className="msgd-field-value">
                    {message.raw.client_info?.email || '—'}
                  </Typography>
                </Box>
                <Box className="msgd-field">
                  <span className="msgd-field-label">Submitted</span>
                  <Typography className="msgd-field-value">
                    {formatFull(message.ts)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Attachments */}
            {message.raw.attachments?.length > 0 && (
              <>
                <Box className="msgd-section-label msgd-section-gap">
                  <LuPaperclip size={13} />
                  <span>Attachments</span>
                </Box>
                <Box className="msgd-attachments-list">
                  {message.raw.attachments.map((f, i) => (
                    <a
                      key={i}
                      href={f.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="msgd-attachment-item"
                    >
                      <Box className="msgd-attachment-icon">
                        <LuFileText size={16} />
                      </Box>
                      <Box>
                        <Typography className="msgd-attachment-name">
                          {f.file_name}
                        </Typography>
                        {f.file_size && (
                          <Typography className="msgd-attachment-size">
                            {f.file_size}
                          </Typography>
                        )}
                      </Box>
                    </a>
                  ))}
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MessageDetail;
