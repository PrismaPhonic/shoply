import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { addProduct, removeProduct } from '../actions';
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
                renderQuantity={true}
                removeProduct={this.props.removeProduct}
                addProduct={this.props.addProduct}
              />
            </ListGroupItem>
          );
        })}
        <ListGroupItem>
          <h3>Cart Total: {this.props.cartTotal}</h3>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    cartTotal: state.cart
      .map(product => product.price * product.quantity)
      .reduce((a, b) => a + b, 0)
  };
}

export default connect(
  mapStateToProps,
  { addProduct, removeProduct }
)(CartList);
