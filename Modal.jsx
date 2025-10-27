// Modal.jsx
import React from 'react';

export default function Modal({ content }) {
  if (!content) return null;

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => window.location.reload()}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={content.image} className="img-fluid mb-3" alt={content.name} />
            <p>{content.description}</p>
            <p><strong>Giá:</strong> ${content.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
