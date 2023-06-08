import React, { useEffect, useState } from "react";
import axios from "axios";

function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://6449f08279279846dcdb4f6b.mockapi.io/products/Productlist"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(
        `https://6449f08279279846dcdb4f6b.mockapi.io/products/Productlist/${productId}`
      );
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Freshness</th>
          <th>Product Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nama}</td>
            <td>{product.category}</td>
            <td>{product.freshness}</td>
            <td>{product.price}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListProduct;