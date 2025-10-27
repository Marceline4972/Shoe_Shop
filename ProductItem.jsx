// ProductItem.jsx
import React from 'react';

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="card h-100">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.shortDescription}</p>
        <button
          className="btn btn-primary"
          onClick={() => setStateModal(item)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
