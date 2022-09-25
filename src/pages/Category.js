import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function Category() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  });
  const Products = ({ products }) => {
    return (
      <div>
        <input type="range" />
        Select Range
        <div>
          {products &&
            products.length > 0 &&
            products.map((item) => {
              return (
                <div>
                  <div>
                    <img src={item.thumbnailUrl} width="50" height="50" />
                  </div>
                  <div>{item.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <div>
      Category:{id}
      <Products products={products} />
    </div>
  );
}
