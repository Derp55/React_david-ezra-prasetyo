import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Body = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        ProductName: '',
        ProductCategory: '',
        Image: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="ProductName">Product Name</label>
        <Field id="ProductName" name="ProductName" placeholder="..." />
        <br />

        <label htmlFor="ProductCategory">Product Category</label>
        <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>

        <label htmlFor="image">Image of Product</label>
        <Field
          id="image"
          name="image"
          placeholder="..."
          type="Image"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);


export default Body;