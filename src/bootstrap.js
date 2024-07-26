
    import React from 'react';
    import './ProductCard.css';
    
    const ProductCard = ({ product }) => {
      return (
        <div className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <div className="product-category">Category: {product.category}</div>
            <div className="product-rating">
              Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductCard;
