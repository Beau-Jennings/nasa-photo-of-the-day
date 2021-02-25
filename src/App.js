import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {BASE_URL, API_KEY} from "./URL";
import ContentData from "./Content";




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
        <h1><span role="img" aria-label='go!'>🚀</span>Photo of The Day! <span role="img" aria-label='go!'>🚀</span> </h1>
      </div>

    <ContentData nasaData = {nasaData} >
     
    </ContentData>
    
        <p>{nasaData.copyright}</p>
    </div> 


  );
}

export default App;
