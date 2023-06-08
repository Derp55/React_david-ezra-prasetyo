
import React from 'react';
import Logo from "../../assets/bootstrap-logo.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const CreateproductSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Nama produk wajib diisi'),
  category: Yup.string()
    .required('Kategori produk wajib diisi'),
  freshness: Yup.string()
    .required('Kesesuaian produk harus dipilih'),
  price: Yup.number()
    .typeError('Harga produk harus dalam bentuk angka')
    .min(1, 'Harga produk minimal Rp 1')
    .max(1000000, 'Harga produk maksimal Rp 1 juta'),
});

const handleSubmit = async (values, { setSubmitting }) => {
  try {
    const productData = {
      nama: values.nama,
      category: values.category,
      freshness: values.freshness,
      price: values.price,
    };

    const response = await axios.post('https://6449f08279279846dcdb4f6b.mockapi.io/products/Productlist', productData);
    console.log('Product created:', response.data);
  } catch (error) {
    console.error('Error creating Product:', error);
  } finally {
    setSubmitting(false);
  }
};

const initialFormValues = {
  nama: '',
  category: '',
  freshness: '',
  price: '',
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

function CreateTable() {
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
initialValues={initialFormValues}
validationSchema={CreateproductSchema}
onSubmit={handleSubmit}
>
{({ errors, touched }) => (
  <Form>
    <h3 className="mb-4">Detail Product</h3>

    <div className='col'>
      <label htmlFor="Product Name">Product Name:</label>
      <Field type="text" name="nama" id="nama" />
      {errors.nama && touched.nama && <div>{errors.nama}</div>}
    </div>

    <div className='col'>
      <label htmlFor="Product Category">Product Category</label>
      <br />
      <Field as="select" name="category" id="category">
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
      <Field type="radio" name="freshness" id="brand-new" value="brand-new" />
      <label htmlFor="brand-new">Brand New</label>

      <Field type="radio" name="freshness" id="second-hand" value="second-hand" />
      <label htmlFor="second-hand">Second Hand</label>

      <Field type="radio" name="freshness" id="refurbished" value="refurbished" />
      <label htmlFor="refurbished">Refurbished</label>

      {errors.freshness && touched.freshness && <div>{errors.freshness}</div>}
    </div>

    <div className='col'>
      <label htmlFor="Product Price">Product Price</label>
      <br />
      <Field type="text" name="price" id="price" />
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
  );
}

export default CreateTable;
