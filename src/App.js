import React from 'react';
import './App.css';
import Title from './components/Title';
import PoposList from './components/PoposList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Title/>
      <PoposList/>
      <Footer/>
    </div>
  );
}

export default App;
