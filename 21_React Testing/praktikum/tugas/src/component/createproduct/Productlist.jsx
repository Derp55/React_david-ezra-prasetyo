import React from "react"
import { useSelector } from "react-redux"

function ProductList() {
    const produks = useSelector((state =>state));

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
                    {produks.map((produk, index) => (
                    <tr key={index}>
                      <td>{index +1}</td>
                      <td>{product.name}</td>
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

export default ProductList;
