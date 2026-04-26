import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/dashboard/Sidebar.jsx';
import Messages from '../components/dashboard/Messages.jsx';
import '../assets/styles/dashboard-styles/Dashboard.css';
import { useQuery, usePaginatedQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api.js';

const Dashboard = () => {
  const {
    results: directContactsData,
    status: directContactsStatus,
    loadMore: loadMoreDirectContacts,
  } = usePaginatedQuery(
    api.apis.get.getCasualContact.get,
    {},
    { initialNumItems: 10 }
  );
  const {
    results: smartContactsData,
    status: smartContactsStatus,
    loadMore: loadMoreSmartContacts,
  } = usePaginatedQuery(
    api.apis.get.getSmartContact.get,
    {},
    { initialNumItems: 10 }
  );

  const markAsRead = useMutation(api.apis.post.readMessage.markAsRead);

  const [activeTab, setActiveTab] = useState('messages');
  const [directContacts, setDirectContacts] = useState([]);
  const [projectQueries, setProjectQueries] = useState([]);

  useEffect(() => {
    if (directContactsData) setDirectContacts(directContactsData);
  }, [directContactsData]);

  useEffect(() => {
    if (smartContactsData) setProjectQueries(smartContactsData);
  }, [smartContactsData]);

  const handleDeleteDirect = (id) =>
    setDirectContacts((prev) => prev.filter((c) => c._id !== id));
  const handleDeleteProject = (id) =>
    setProjectQueries((prev) => prev.filter((q) => q._id !== id));
  const handleUpdateStatus = (id, newStatus) =>
    setProjectQueries((prev) =>
      prev.map((q) => (q._id === id ? { ...q, status: newStatus } : q))
    );

  return (
    <Box className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Box className="dashboard-content">
        {activeTab === 'messages' && (
          <Messages
            directContacts={directContacts}
            directContactsStatus={directContactsStatus}
            loadMoreDirectContacts={loadMoreDirectContacts}
            projectQueriesData={projectQueries}
            smartContactsStatus={smartContactsStatus}
            loadMoreSmartContacts={loadMoreSmartContacts}
            onDeleteDirect={handleDeleteDirect}
            onDeleteProject={handleDeleteProject}
            onUpdateStatus={handleUpdateStatus}
            markAsRead={markAsRead}
          />
        )}

        {activeTab !== 'messages' && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minHeight: '70vh',
              gap: '8px',
            }}
          >
            <Typography sx={{ fontSize: 32, lineHeight: 1 }}>🚧</Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font)',
              }}
            >
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font)',
              }}
            >
              This section is coming soon.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
