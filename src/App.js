import { useEffect, useState } from 'react';
import './App.css';
import axios from './utils/fakeAxios';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await axios.get();
      setData(data);
    }
    fetchData();
  } ,[])

  return (
    <div className="App">
      Init
    </div>
  );
}

export default App;
