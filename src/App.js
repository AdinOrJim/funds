import React from 'react';
import './App.css';
import Title from './components/Title';
import PoposList from './components/PoposList';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import POPOSDetails from './components/PoposDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={PoposList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
      </div>
    </Router>
  );
}

export default App;
