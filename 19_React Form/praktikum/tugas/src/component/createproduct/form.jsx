import React, { useState,useEffect } from 'react';
import Logo from "../assets/bootstrap-logo.png";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
useEffect(()=> {
    alert("Welcome");
}, []);

const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [freshness, setFreshness] = useState('');
  const [price, setPrice] = useState('');

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

  const data = {
          name,
          category,
          freshness,
          price,
        }

        localStorage.setItem('FormData', JSON.stringify(data));


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
<div id="Landing">
  <div className="container-fluid ">
  <div className="d-grid justify-content-center">
    <div className="text-center">
      <img src={Logo} alt="logo" />
      <h1>{article.title.en}</h1>
            <p>{article.description.en}</p>
    </div>

    <form className="" action="" onSubmit={handleSubmit}>
      <h3 className="mb-4">Detail Product</h3>

      <div className="col ">
        <label htmlFor="Product Name">Product Name</label>
        <br />
        <input 
        type="text" 
        required 
        placeholder="..."
        onChange={(e) => setName(e.target.value)}    
        />
      </div>

      <br />
      <div className="col">
        <label htmlFor="Product Name">Product Category</label>
        <br />
        <select name="category" required title="category">
          <option value disabled="">
            Choose...
          </option>
          <option value="Clothes"> Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Hats">Hats</option>
        </select>
      </div>

      <br />
      <div className="col">
        <label htmlFor="Product Name">Image of Product</label>
        <br />
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            name=""
            id=""
            placeholder=""
            aria-describedby="fileHelpId"
            required
          />
        </div>

      </div>
      <div className="col">
        <label htmlFor="Product Name">Product Freshness</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Product Freshness"
            id=""
            required
          />
          <label className="form-check-label" htmlFor="">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Product Freshness"
            id=""
            required
          />
          <label className="form-check-label" htmlFor="">
            Second Hand
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Product Freshness"
            id=""
            required=""
          />
          <label className="form-check-label" htmlFor="">
            Refurbished
          </label>
        </div>
      </div>
      <br />
      <div className="col">
        <label htmlFor="Product Name">Additional Description</label>
        <br />
        <textarea
          name=""
          id=""
          style={{ width: 603, height: 116 }}
          required
          defaultValue={""}
        />
        </div>
        
        <div className="input-group flex-wrap mb-3 col">
            <div className='mt-2'>
                <label htmlFor="">Product Price</label>
            </div>
            <br />
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                type="number"
                className="form-control"
                required
                />
            </div>
        </div>

      <br />
      <input
        className="btn btn-primary"
        type="submit"
        defaultValue="Submit"
        style={{ width: 557, height: 48 }}
      />
      <button onClick={handleClick}>Generate random number</button>
    </form>
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
</div>
</div>
  )
};

export default Form;