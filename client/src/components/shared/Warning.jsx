import { Alert, Typography } from '@mui/material';
import React from 'react';

const Warning = ({ message }) => {
  return (
    <>
      <Alert
        sx={{ maxWidth: '700px', marginBottom: '40px' }}
        severity={message.type}
      >
        {(() => {
          const data = message?.data;

          // If backend error leaks extra Convex metadata, map it to a clean UI.
          if (typeof data === 'string') {
            const lower = data.toLowerCase();
            const tooFrequent =
              lower.includes('you are submitting message too frequently');

            if (tooFrequent) {
              const match = data.match(/try again after\s+(\d+)\s+min/i);
              const mins = match?.[1] ? Number(match[1]) : null;
              return (
                <>
                  <Typography
                    component="div"
                    sx={{ fontWeight: 600, fontSize: '14px', mb: '3.5px' }}
                  >
                    Too many requests
                  </Typography>
                  <Typography component="div" sx={{ fontSize: '14px' }}>
                    {mins != null
                      ? `you are submitting message too frequently, please try again after ${mins} min`
                      : 'you are submitting message too frequently, please try again later'}
                  </Typography>
                </>
              );
            }
          }

          return data;
        })()}
      </Alert>
    </>
  );
};

export default Warning;