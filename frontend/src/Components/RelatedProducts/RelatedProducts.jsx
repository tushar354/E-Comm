import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = ({ category }) => {
  // Function to filter products based on category
  const filterProductsByCategory = (products, selectedCategory) => {
    return products.filter(product => product.category === selectedCategory);
  };

  // Filter products based on category
  const relatedProducts = filterProductsByCategory(data_product, category);

  return (
    <div className='relatedproducts'>
      <h1>Other Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
