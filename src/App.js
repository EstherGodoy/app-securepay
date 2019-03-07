import React, { Component } from 'react';
import './assets/css/core.css';
import './assets/css/header.css';
import './assets/css/main.css';
import './assets/css/footer.css';
import './assets/css/calcform.css';
import './assets/css/calculator.css';
import logo from './assets/images/header/logo.png';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            {/*<Route exact path="/" component={Homepage}/>
            <Route exact path="/contact" component={Contact}/>*/}
          <Main/>  
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
