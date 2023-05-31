import React from 'react';
import Logo from "../../assets/bootstrap-logo.png";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreateTable() {
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
      });
    
      const handleSubmit = async (values, { setSubmitting }) => {
        try {
          const response = await axios.post('https://6449f08279279846dcdb4f6b.mockapi.io/products/Productlist', values);
          console.log('Product created:', response.data);
          // Do something with the response, e.g., show success message
        } catch (error) {
          console.error('Error creating Product:', error);
          // Handle error, e.g., show error message
        } finally {
          setSubmitting(false);
        }
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
  onSubmit={handleSubmit}

    initialValues={{
        name: '',
        category: '',
        freshness: '',
        price: '',
    }}

        validationSchema={CreateproductSchema}

    >
        {({ errors, touched }) => (
        <Form>
           <h3 className="mb-4">Detail Product</h3> 

            <div className='col'>
            <label htmlFor="Product Name">Product Name</label>
            <Field name="name" type='text' id='name' />
            {errors.name && touched.name && <div>{errors.name}</div>}
            </div>

            <div className='col'>
            <label htmlFor="Product Category">Product Category</label>
            <br />
            <Field as="select" name="category" id='category'>
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
                <label htmlFor="Product Price">Product Price</label>
                <br />
                <Field name="price" type='text' id='price' />
                {errors.price && touched.price && <div>{errors.price}</div>}
            </div>

            <br />
           <button 
           className='btn btn-primary'
           style={{ width: 557, height: 48 }} 
           type='Submit'>Submit</button>
        </Form>
        )}
    </Formik>
    
  </div>
</div>
</div>
  )
}

export default CreateTable