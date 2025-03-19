import { useState, useEffect } from "react";
 interface FetchData<T> {
    data: null | T;
    loading: boolean;
    error: string | null;
  }
  
  const useFetch = <T,>(fetchDataProp: () => Promise<T>): FetchData<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);
          const result = await fetchDataProp();
          setData(result);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      }
  
      fetchData();
    }, [fetchDataProp]);
  
    return { data, loading, error };
  };
  
  export default useFetch;
  