// ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="row">
      {productsData.map((product, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <ProductItem
            item={product}
            setStateModal={setStateModal}
          />
        </div>
      ))}
    </div>
  );
}
