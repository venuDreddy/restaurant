const Fetch = async (url, setData, setLoading, setError, setInitialData) => {
  setLoading(true);
  try {
    const response = await fetch(url);
    if (response.ok) {
      const info = await response.json();
      setLoading(false);
      setData(info.data);
      setInitialData(info.data);
    } else {
      setLoading(false);
      setError(true);
    }
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};
export default Fetch;
