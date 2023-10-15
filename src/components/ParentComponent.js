// ParentComponent.js
import React, { useState, useEffect } from 'react';
import DataDisplay from './DataDisplay';

function ParentComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch('results.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Set the JSON data to the state
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <DataDisplay data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ParentComponent;
