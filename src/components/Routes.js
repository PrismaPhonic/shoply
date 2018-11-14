import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../containers/ProductList';
import CartList from '../containers/CartList';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <ProductList />} />
        <Route exact path="/cart" render={props => <CartList />} />
      </Switch>
    );
  }
}

export default Routes;
