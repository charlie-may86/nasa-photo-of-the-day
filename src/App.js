import React, { useState }from "react";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  const [date, setDate] = useState('INSERT API DATE');
  const [copyright, setCopyright] = useState('INSERT API COPYRIGHT');
  // setDate()

  return (
    <div className = 'App'>
      <Header date = {date} />
      <Footer copyright = {copyright} />
    </div>
  );
}

export default App;
