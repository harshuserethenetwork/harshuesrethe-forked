import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Disclaimer = ({ disclaimer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mode = useSelector((state) => state.theme?.mode) || 'dark';

  const shortText = disclaimer.slice(0, 250);

  const bg = mode === 'light' ? '#f7f9fa' : '#0b0a0e';
  const textColor = '#A0A0A0';
  const btnColor = mode === 'light' ? '#111116' : '#ffff';

  return (
    <p
      style={{
        marginTop: 60,
        backgroundColor: bg,
        color: textColor,
        fontSize: 12,
        fontWeight: 300,
        padding: '16px 14px',
        borderRadius: 10,
      }}
    >
      {isExpanded ? disclaimer : `${shortText}...`}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          marginLeft: '8px',
          border: 'none',
          background: 'transparent',
          color: btnColor,
          cursor: 'pointer',
          fontWeight: '600',
          textDecoration: 'underline',
          textUnderlineOffset: 3,
        }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </p>
  );
};

export default Disclaimer;
