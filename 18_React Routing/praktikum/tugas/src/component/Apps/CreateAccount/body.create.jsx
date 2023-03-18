import './body.create.css';
import React, { useState,useEffect } from 'react';
import Logo from '../../../assets/bootstrap-logo.svg';
import { v4 as uuidv4 } from "uuid";

function Body() {
  useEffect(()=> {
    alert("Welcome");
}, []);

const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [freshness, setFreshness] = useState('');
  const [price, setPrice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: uuidv4(),
      name,
      category,
      freshness,
      price,
    };
    setProducts([...products, product]);
    setName('');
    setCategory('');
    setFreshness('');
    setPrice('');
  };

  const handleDelete = () => {
    const updatedProducts = products.filter((product) => product.id !== productToDelete.id);
    setProducts(updatedProducts);
    setShowModal(false);
    setProductToDelete(null);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowModal(true);
  };


const article = {
  title: {
    id: "Buat Produk",
    en: "Create Product"
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  }
};

const handleClick = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 100);
   console.log(randomNumber);
  };

    return (
        <div className='body'>
            <img src={Logo} alt="logo" />
            <h1>{article.title.en}</h1>
            <p>{article.description.en}</p>

            <div>
            <form action="" onSubmit={handleSubmit}>
            <h3>Detail Product</h3>

            <div className='col1'>
            <label htmlFor="">Product Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
            <label htmlFor="Product Category">Product Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Clothes"> Clothes </option>
            <option value="Shoes">Shoes</option>
            <option value="Hats">Hats</option>
            </select>
            </div>

            <div>
            <label htmlFor="Image of Product">Image of Product</label>
            <input type="file" name="" id="" />
            </div>

            <div>
          <label>Product Freshness:</label>
          <div>
            <label htmlFor="freshness1">
              <input type="radio" id="freshness1" value="Brand New" checked={freshness === "Brand New"} onChange={(e) => setFreshness(e.target.value)} />
              Brand New
            </label>
            <label htmlFor="freshness2">
              <input type="radio" id="freshness2" value="Second Hand" checked={freshness === "Second Hand"} onChange={(e) => setFreshness(e.target.value)} />
              Second Hand
            </label>
            <label htmlFor="freshness3">
              <input type="radio" id="freshness3" value="Refurbished" checked={freshness === "Refurbished"} onChange={(e) => setFreshness(e.target.value)} />
              Refurbished
            </label>
          </div>
        </div>
            
            <div>
            <label htmlFor="Additional Description">Additional Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div>
            <label htmlFor="Product Price">Product Price</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
           
           <input type="submit" value="Submit" />
           </form>
           </div>
           <button onClick={handleClick}>Generate random number</button>

           <table>
                <thead>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Freshness</th>
                    <th>Product Price</th>
                </thead>
                <tbody>
                    {products.map((product, index) => (
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

        </div>
       
    )
    } 

export default Body;