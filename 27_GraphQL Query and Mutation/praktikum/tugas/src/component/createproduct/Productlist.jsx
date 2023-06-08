import React, { useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

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

const DeleteProduct = gql`
  mutation DeleteProduct($productId: uuid!) {
    delete_store_product(where: { id: { _eq: $productId } }) {
      affected_rows
    }
  }
`;

function ListProduct() {
  const { loading, error, data } = useQuery(GetProduct);
  const [deleteProductMutation] = useMutation(DeleteProduct);

  useEffect(() => {
    refetchProduct();
  }, []);

  const refetchProduct = () => {
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteProductMutation({
        variables: { productId: productId },
      });
      refetchProduct(); 
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Freshness</th>
          <th>Product Desc</th>
          <th>Product Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.store_product.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nama}</td>
            <td>{product.category}</td>
            <td>{product.freshness}</td>
            <td>{product.info}</td>
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