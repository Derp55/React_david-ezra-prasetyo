import './body.css';
import React, { useState } from 'react';
import Logo from '../assets/bootstrap-logo.svg';

function Body() {
const [ProductName, setProductName] = useState('');

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

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value.length <= 10) {
      setProductName(value);
    }
  };

    return (
        <div className='body'>
            <img src={Logo} alt="logo" />
            <h1>{article.title.en}</h1>
            <p>{article.description.en}</p>

            <form action="">
            <h3>Detail Product</h3>

            <div className='col1'>
            <label htmlFor="">Product Name</label>
            <input type="text" value={ProductName} onChange={handleInputChange}/>
            </div>

            <div>
            <label htmlFor="Product Category">Product Category</label>
            <select name="Category" id="">
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
            <label htmlFor="Product Freshness">Product Freshness</label>
            <input type="radio" name="Product Freshness" id="" />
            <label htmlFor="Brand New">Brand New</label>

            <input type="radio" name="Product Freshness" id="" />
            <label htmlFor="Second Hand">Second Hand</label>

            <input type="radio" name="Product Freshness" id="" />
            <label htmlFor="Refurbished">Refurbished</label>
            </div>
            
            <div>
            <label htmlFor="Additional Description">Additional Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div>
            <label htmlFor="Product Price">Product Price</label>
            <input type="number" name="" id="" />
            </div>
            </form>
           
           <input type="submit" value="Submit" />
           <button onClick={handleClick}>Generate random number</button>

        </div>
       
    )
    } 

export default Body;