import React, { useState,useEffect } from 'react';
import Logo from "../../assets/bootstrap-logo.png";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Table = () => {
useEffect(()=> {
    alert("Welcome");
}, []);

const CreateproductSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Nama produk wajib diisi'),
  category: Yup.string()
    .required('Kategori produk wajib diisi'),
  freshness: Yup.number()
    .typeError('Kesesuaian produk harus dalam bentuk angka'),
  price: Yup.number()
    .typeError('Harga produk harus dalam bentuk angka')
    .min(1, 'Harga produk minimal Rp 1')
    .max(1000000, 'Harga produk maksimal Rp 1 juta'),
  description: Yup.string()
    .required('Deskripsi produk wajib diisi')
    .min(10, 'Deskripsi produk minimal 10 karakter')
    .max(500, 'Deskripsi produk maksimal 500 karakter'),
});

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

  return ( 
<div id="Landing">
  <div className="container-fluid ">
  <div className="d-grid justify-content-center">
    <div className="text-center">
      <img src={Logo} alt="logo" />
      <h1>{article.title.en}</h1>
            <p>{article.description.en}</p>
    </div>

    <Formik
    initialValues={{
        name: '',
        category: '',
        freshness: '',
        description: '',
        price: '',
    }}

        validationSchema={CreateproductSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}

    >
        {({ errors, touched }) => (
        <Form>
           <h3 className="mb-4">Detail Product</h3> 

            <div className='col'>
            <label htmlFor="Product Name">Product Name</label>
            <Field name="nama" />
            {errors.nama && touched.nama && <div>{errors.nama}</div>}
            </div>

            <div className='col'>
            <label htmlFor="Product Category">Product Category</label>
            <br />
            <Field as="select" name="category">
                <option value="" disabled> Choose Category </option>
                <option value="Clothes">Clothes</option>
                <option value="Shoes">Shoes</option>
                <option value="Hats">Hats</option>
            </Field>
            {errors.category && touched.category && <div>{errors.category}</div>}
            </div>

        
            <div className='col'>
            <label htmlFor="Product Freshness">Product Freshness</label>
            <br />
            <Field type="radio" name="freshness" value="1" />
            <label htmlFor="Brand New">Brand New</label>
            <Field type="radio" name="freshness" value="2" />
            <label htmlFor="Second Hand">Second Hand</label>
            <Field type="radio" name="freshness" value="3" />
            <label htmlFor="Refurbished">Refurbished</label>
            {errors.freshness && touched.freshness && <div>{errors.freshness}</div>}
            </div>

            <div className='col'>
            <label htmlFor="Additional Description">Additional Description</label>
            <br />
            <Field as="textarea" name="description" style={{ width: 603, height: 116 }}/>
            {errors.description && touched.description && <div>{errors.description}</div>}
            </div>

            <div className='col'>
                <label htmlFor="Product Price">Product Price</label>
                <br />
                <Field name="price"/>
                {errors.price && touched.price && <div>{errors.price}</div>}
            </div>

            <br />
           <button 
           className='btn btn-primary'
           style={{ width: 557, height: 48 }} 
           type='submit'>Submit</button>
        </Form>
        )}
    </Formik>
    
  </div>
</div>
</div>
  )
};

export default Table;