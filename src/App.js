import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
const [nasaImage,setNasaImage ] = useState([]);
useEffect(() => {
  const fetchNasaImage =() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=XtJHfNtwHnuhj5NRH5oIqwaYGHsPLU7sJib13TN5&date=2012-03-14`)
    .then(res => {
      setNasaImage(res.data);
    })
    .catch((err) =>{
      console.log (err);
      })
  }
    return fetchNasaImage();
}, []);



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
