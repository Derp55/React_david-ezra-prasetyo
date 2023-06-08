import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GetProduct = gql`
  query GetProduct {
    store_product {
      id
      nama
      category
      freshness
      info
      price
    }
  }
`;

function ProductCard() {
  const { loading, error, data } = useQuery(GetProduct);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      {data.store_product.map(({ id, nama, category, freshness, info, price }) => (
        <div className="card" style={{ width: '18rem' }} key={id}>
          <img className="card-img-top" 
          src="https://picsum.photos/200/300"
           alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{nama}</h5>
            <p className="card-text">{category}</p>
            <p className="card-text">{freshness}</p>
            <p className="card-text">{info}</p>
            <p className="card-text">{price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;