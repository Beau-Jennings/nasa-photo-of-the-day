import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {BASE_URL, API_KEY} from "./URL"

function App() {
const [nasaData,setNasaData ] = useState([]);
  useEffect(() => {
    const fetchNasaData =() =>{
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
      setNasaData(res.data);
      })
      .catch((err) =>{
        console.log (err);
      })
    }
    fetchNasaData();
}, []);

  return (
    <div className="App">
      <div>
      <h1>NASA Photo of The Day</h1>
      </div>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
    </div>
  );
}

export default App;
