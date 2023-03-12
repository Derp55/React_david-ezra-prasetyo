import './body.css';
import React from 'react';
import logo from './bootstrap-logo.svg';

function Body() {
    return (
        <div className='body'>
            <img src={logo} alt="" />
            <h1>Create Product</h1>
            <p>Below is an example form built entirely with Bootstrap’s form controls. 
            Each required form group has a validation state
            that can be triggered by attempting to submit the form without completing it.</p>

            <form action="">
            <h3>Detail Product</h3>

            <div className='col1'>
            <label htmlFor="">Product Name</label>
            <input type="text" />
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
        </div>
    )
}

export default Body;