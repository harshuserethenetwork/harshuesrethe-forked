import React, { useState } from 'react';

const Disclaimer = ({ disclaimer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = disclaimer.slice(0, 250);

  return (
    <p style={{marginTop:60, backgroundColor:'#0b0a0e', color:'#A0A0A0', fontSize:12, fontWeight:300}}>
      {isExpanded ? disclaimer : `${shortText}...`}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          marginLeft: '8px',
          border: 'none',
          background: 'transparent',
          color: '#ffff',
          cursor: 'pointer',
          fontWeight: '600',
        }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </p>
  );
};

export default Disclaimer;