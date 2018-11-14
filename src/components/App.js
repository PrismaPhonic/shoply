import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Routes from './Routes';
import './App.css';
import NavBar from './ShoplyNavBar';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <NavBar />
        <Routes />
      </Container>
    );
  }
}

export default App;
