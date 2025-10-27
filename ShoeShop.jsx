// ShoesStore.jsx
import React, { Component } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';
import dataJson from './data.json';

export default class ShoesStore extends Component {
  state = {
    productDetail: null,
  };

  setStateModal = (product) => {
    this.setState({ productDetail: product });
  };

  render() {
    return (
      <div>
        <ProductList
          productsData={dataJson}
          setStateModal={this.setStateModal}
        />
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
