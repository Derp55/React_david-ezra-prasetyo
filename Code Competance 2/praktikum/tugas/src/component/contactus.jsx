import React, {useState} from "react";
import './contactus.css';


const Contact = () => {
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] =useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert(
          "First Name: " +
            firstname +
            "\nLast Name: " +
            lastname +
            "\nemail: " +
            email +
            "\nmessage: " +
            message
        );
        
        const data = {
          firstname,
          lastname,
          email,
          message,
        }

        localStorage.setItem('ContactData', JSON.stringify(data));

    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return ( 
<div className="container mt-5" id="body1">
  <div className="row">
    <div className="col mt-4">
      <h1>Contact Us</h1>
      <p>
        ANeed to get in touch with us? Either fill out the form with your
        inquiry or find the department email you'd like to contact below
      </p>
    </div>
    <div className="col mt-4">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputFName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="..."
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="..."
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="..."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            What can we help you with?{" "}
          </label>
          <textarea
            name=""
            id="message"
            cols={100}
            rows={5}
            placeholder="..."
            defaultValue={""}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" id="Submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
};

export default Contact;