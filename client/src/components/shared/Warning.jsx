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

          if (data && data.code === 'RATE_LIMIT') {
            return (
              <>
                <Typography
                  component="div"
                  sx={{ fontWeight: 600, fontSize: '14px', mb: '3.5px' }}
                >
                  {data.title || 'Too many requests'}
                </Typography>
                <Typography component="div" sx={{ fontSize: '14px' }}>
                  {data.retryAfter != null
                    ? `${data.message}, please try again after ${data.retryAfter} min`
                    : `${data.message}, please try again later`}
                </Typography>
              </>
            );
          }

          return data;
        })()}
      </Alert>
    </>
  );
};

export default Warning;