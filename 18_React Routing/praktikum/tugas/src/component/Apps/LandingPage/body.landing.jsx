import React from 'react';
import './body.landing.css';

function Body() {
  return (
   <div id="body">
    <div className="container text-white">
      <div className="row">
        <div className="col mt-5  px-5" id="tulisan">
          <h1>
            Better Solutions For Your <br /> Business
          </h1>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="btn1">
            <button type="button" className="btn btn-primary text-white">
              Get Started
            </button>
            <button type="button" className="btn btn-link text-white">
              Watch Video
            </button>
          </div>
        </div>
        <div className="col mt-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/886f/9f0e/77cd31ec810bc9f340b17b2068327c33?Expires=1678060800&Signature=Wh9C2j~vpYtBSAPXKwLpzZvHp8aJVHSevlrTRMiylEJbilsnFvdSBD84mICupsdqMybgHsrgmvGaNjE~xbHJnp0Nr4bP3b9g3rX7LI0BeKBJ7QN9jo0kCQ089Cv8gl2S9dbvhU~kxGSfUbcJo6j6MPK~SBp-vzyW-QRxS9yGv908-DVD8sfzG2MCHq1CIoLjTgCYaLqLEl~6FOxcalbuD2xqnU4JvJhWgxhl~uIrNkpGD2VoRh2VjESJP0B0aF7xgbIqQcWUB7LZMZAq4ccOM4tWtcqy-xNL3Q6-NQ4L6oCDViG07m-SKmSLM0IRixgcscXa56SIXb9Q55wBnTO0VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Computer"
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Body;