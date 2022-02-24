import React from "react";
import business from "../../Assets/Images/business.png";
import development from "../../Assets/Images/development.png"
import marketing from '../../Assets/Images/marketing.png'

const homePage = () => {
  return (
    <div className="banner pb-5">
      <h1 className="home-header pb-5">
        A Digital <br /> Agency.
      </h1>

      <div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={business} alt='business_strategy' className="mb-4" />
            <h2 className="text-white mb-3">Business Stratagy</h2>
            <p className="stratagy-desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={development} alt='development_strategy' className="mb-4" />
            <h2 className="text-white  mb-3">Website Development</h2>
            <p className="stratagy-desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={marketing} alt='marketing_strategy' className="mb-4" />
            <h2 className="text-white  mb-3">Marketing & Reporting</h2>
            <p className="stratagy-desc display-1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
