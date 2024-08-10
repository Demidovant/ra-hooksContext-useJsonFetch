import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import { useMemo } from 'react';


const DataComponent = () => {
  const opts = useMemo(() => ({ method: 'GET' }), []);    
  const [data, loading, error] = useJsonFetch('http://localhost:7000/data', opts);

  if (loading) return <p>Loading...</p>;
  if (error) {
    const errorMessage = error.message || 'An unknown error occurred';
    return (
      <div className="component">
        <h3>Data Component</h3>
        <pre>Error: {errorMessage}</pre>
      </div>
    );
  }

  return (
    <div className="component">
      <h3>Data Component</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;
