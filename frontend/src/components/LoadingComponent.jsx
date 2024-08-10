import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import { useMemo } from 'react';


const LoadingComponent = () => {
  const opts = useMemo(() => ({ method: 'GET' }), []);
  const [data, loading, error] = useJsonFetch("http://localhost:7000/loading", opts);

  if (loading) return <p>Loading...</p>;
  if (error) {
    const errorMessage = error.message || 'An unknown error occurred';
    return (
      <div className="component">
        <h3>Loading Component</h3>
        <pre>Error: {errorMessage}</pre>
      </div>
    );
  }

  return (
    <div className="component">
      <h3>Loading Component</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default LoadingComponent;
