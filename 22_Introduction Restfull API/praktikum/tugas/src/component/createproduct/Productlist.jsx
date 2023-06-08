import React, { useEffect, useState } from "react"
import axios from 'axios';

function ListProduct() {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://6449f08279279846dcdb4f6b.mockapi.io/products/Productlist');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchProducts();
  }, []);
    return (
<table>
                <thead>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Freshness</th>
                    <th>Product Price</th>
                </thead>
                <tbody>
                    {products.map(product => (
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.nama}</td>
                      <td>{product.category}</td>
                      <td>{product.freshness}</td>
                      <td>{product.price}</td>
                      <button>Delete</button>
                      <button>Edit</button>
                    </tr>
                    ))}
                </tbody>
            </table>
    )
}

export default ListProduct;
