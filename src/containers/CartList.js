import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';
import { addProduct, removeProduct, applyDiscount } from '../actions';
import Product from '../components/Product';
import { connect } from 'react-redux';
import './cartList.css';

// Cart list renders a listgroup with listgroupitems - each
// list group item holding a Product component which exists in the cart.

const DISCOUNTS = {
  REMOVE10: 0.9,
  REMOVE20: 0.8,
  REMOVE30: 0.7
};

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.discountField in DISCOUNTS) {
      console.log(this.state.discountField);
      this.props.applyDiscount(DISCOUNTS[this.state.discountField]);
    }
  }

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
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="discountField">Discount Code</Label>
            <Input
              type="discountField"
              name="discountField"
              id="discountField"
              placeholder="Please enter discount code"
              value={this.state.discountField}
              onChange={this.handleChange}
            />
            <Button>Apply Discount</Button>
          </FormGroup>
        </Form>
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
      .map(product => product.price * product.quantity * state.discount)
      .reduce((a, b) => a + b, 0)
  };
}

export default connect(
  mapStateToProps,
  { addProduct, removeProduct, applyDiscount }
)(CartList);
