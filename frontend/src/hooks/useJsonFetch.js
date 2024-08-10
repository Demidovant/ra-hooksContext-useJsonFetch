import { useState, useEffect, useCallback } from 'react';

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, opts);

      if (!response.ok) {
        throw new Error(`\nStatus --> ${response.statusText}\nCode -->  ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, opts]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, loading, error];
};

export default useJsonFetch;
