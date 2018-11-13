import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ProductList from '../containers/ProductList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <ProductList />
      </Container>
    );
  }
}

export default App;
