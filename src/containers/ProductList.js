import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { addProduct, removeProduct } from '../actions';
import Product from '../components/Product';
import { connect } from 'react-redux';

// Product list renders a listgroup with listgroupitems - each 
// list group item holding a Product component.  
// Syncing up with redux to map over redux items and keep the
// cart in props so we can display product count
class ProductList extends Component {
  render() {
    return (
      <ListGroup className="ProductList">
        {this.props.items
          .map(product => {
            return (<ListGroupItem>
              <Product
                key={product.id}
                data={product}
                addProduct={this.props.addProduct}
                removeProduct={this.props.removeProduct} />
            </ListGroupItem>)
          })}
        <ListGroupItem>
          <h3>Cart Total: {this.props.cart.length}</h3>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addProduct, removeProduct })(ProductList);