import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

// Product card displays the product, and has two buttons, one that
// adds product to cart and one that removes.  These call dispatch function
// which are passed down from parent ProductList
class Product extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct() {
    this.props.addProduct(this.props.data);
  }

  removeProduct() {
    this.props.removeProduct(this.props.data.id);
  }

  //if route is /cart then the add button will not be displayed
  render() {
    const { name, price, image_url, id } = this.props.data;
    return (
      <Card className="Product">
        <CardImg top width="100%" src={image_url} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{`Price: ${price}`}</CardText>
          {this.props.addProduct ? (
            <Button onClick={this.addProduct}>Add To Cart</Button>
          ) : null}
          <Button onClick={this.removeProduct}>Remove From Cart</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Product;
