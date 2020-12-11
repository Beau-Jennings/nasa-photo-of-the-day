import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {BASE_URL, API_KEY} from "./URL";
import StyledContent from "./Content";
import StyledDetails from "./Details";
import StyledImages from "./Image";


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

    <StyledContent>
      <div className="Content">
        {/* <StyledDetails> */}
        <div className = "Details">
          <h2> {nasaData.title} </h2>
          <p>{nasaData.date}</p>
          <p>{nasaData.explanation}</p>
        </div>
        {/* </StyledDetails> */}

        {/* <StyledImages> */}
        <div className = "Image">
          <img src = {nasaData.url} alt='pic of the day'></img>
        </div>
        {/* </StyledImages> */}
      </div>      
    </StyledContent>
        <p>{nasaData.copyright}</p>
    </div> 


  );
}

export default App;
