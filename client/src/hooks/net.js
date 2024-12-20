import { useState, useEffect } from "react";

export const useFetch = (url, options = {}, body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          ...options.headers,
          ...(token && { Authorization: `Bearer ${token}` }),
        };

        const response = await fetch(url, {
          ...options,
          headers,
          ...(body && { body: JSON.stringify(body) }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options), JSON.stringify(body)]);

  return { data, error, loading };
};

export const useMutation = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mutate = async (body) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const headers = {
        ...options.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      const response = await fetch(url, {
        ...options,
        method: "POST",
        headers,
        body,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { data, error, loading, mutate };
};
