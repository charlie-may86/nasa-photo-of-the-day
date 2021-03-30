import React, { useState, useEffect }from "react";
import axios from "axios"

import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Photo from './components/Photo'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'



function App() {
  const [photoData, setPhotoData] = useState([])
  
  useEffect(() => {
    const fetchPhoto = () => 
    axios.get(`${URL}`)
    .then(res => {
      setPhotoData(res.data);
    })
    .catch(err => {
      debugger
    })
    fetchPhoto()

  }, [])

  return (
    <div className = 'App'>
      <Header date = {photoData.date} />
      <Photo 
        photo = {photoData.url} 
        info = {photoData.explanation}
      />

      <Footer copyright = {photoData.copyright} />
    </div>
  );
}

export default App;
