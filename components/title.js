import React from 'react';

export default ({ text }) => (
  <div
    className="author"
    style={{
      marginTop: 50
    }}
  >
    <span
      style={{
        backgroundColor: 'black',
        marginTop: 10,
        padding: 10,
        color: '#fff',
        fontSize: '1.2em'
      }}
    >
      {text}
    </span>
  </div>
);
