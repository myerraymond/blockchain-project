// DataDisplay.js
import React from 'react';

function DataDisplay({ data }) {
  if (!data || !data.nodes) {
    return null;
  }

  return (
    <div>
      {data.nodes.map((node, index) => (
        <div key={index}>
          <p>Hash: {node.address_id.hash}</p>
          <p>Block Timestamp: {node.address_id.block_timestamp}</p>
          <p>Block Number: {node.address_id.block_number}</p>
          {/* Add more data fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;