import { Alert, Typography } from '@mui/material';
import React from 'react';

const Warning = ({ message }) => {
  console.log(message);

  return (
    <>
      <Alert
        sx={{ maxWidth: '700px', marginBottom: '40px' }}
        severity={message.type}
      >
        {(() => {
          const data = message?.data;

          const isGenericServerError =
            (typeof data === 'string' && data.includes('Server Error')) ||
            (typeof data?.message === 'string' && data.message.includes('Server Error'));

          if ((data && data.code === 'RATE_LIMIT') || isGenericServerError) {
            return (
              <>
                <Typography
                  component="div"
                  sx={{ fontWeight: 600, fontSize: '14px', mb: '3.5px' }}
                >
                  {data?.title || 'Too many requests'}
                </Typography>
                <Typography component="div" sx={{ fontSize: '14px' }}>
                  {data?.retryAfter != null
                    ? `${data.message}, please try again after ${data.retryAfter} min`
                    : 'you are submitting message too frequently, please try again later'}
                </Typography>
              </>
            );
          }

          return typeof data === 'object' ? (data?.message || 'Something went wrong') : data;
        })()}
      </Alert>
    </>
  );
};

export default Warning;