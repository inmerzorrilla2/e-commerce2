import React from 'react';
import './styles/prodinfo.css';

const ProdInfo = ({ prod, darkMode }) => { 
  const handleViewDetailsClick = () => {
    alert(prod.description); 
  };

  const handleAddToCartClick = () => {
    alert('In construction'); 
  };

  return (
    <div className="product-card">
      <p>{prod.title}</p>
      <img src={prod.image} alt={prod.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{prod.name}</h3>
        <p className="product-price">${prod.price.toFixed(2)}</p>
        <div className="product-actions">
          <button className="add-to-cart" onClick={handleAddToCartClick}>
            Add to Cart
          </button>
          <button className="view-details" onClick={handleViewDetailsClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdInfo;
