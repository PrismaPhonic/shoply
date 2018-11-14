import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { removeProduct } from '../actions';
import Product from '../components/Product';
import { connect } from 'react-redux';
import './cartList.css';

// Cart list renders a listgroup with listgroupitems - each
// list group item holding a Product component which exists in the cart.
class CartList extends Component {
  render() {
    return (
      <ListGroup className="ProductList">
        {this.props.cart.map(product => {
          return (
            <ListGroupItem>
              <Product
                key={product.id}
                data={product}
                removeProduct={this.props.removeProduct}
                addProduct={false}
              />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  { removeProduct }
)(CartList);
