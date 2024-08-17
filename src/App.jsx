import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./Fetch";
import Menu from "./Menu";

function App() {
  const url = "https://coral-app-yabtm.ondigitalocean.app/api/menus?populate=*";
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    Fetch(url, setData, setLoading, setError, setInitialData);
  }, []);

  if (loading) {
    return (
      <div className='center'>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className='center'>
        <h1>There was an error fetching data...</h1>
      </div>
    );
  }
  return (
    <>
      <Menu data={data} setData={setData} initialData={initialData}></Menu>
    </>
  );
}

export default App;
