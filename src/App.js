import React, { Component } from 'react';
import './App.css';
import AppNav from './components/Nav/Nav.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <AppNav handleNavClick={(clickedItem) => console.log(clickedItem)} />
            <br/>
            <hr/>
            <div className="App-body">
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/article/:articleID" component={ArticlePage}/>
              <Route exact path="/sections/:sectionId" component={SectionPage}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;