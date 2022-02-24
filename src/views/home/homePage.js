import React from "react";
import { Link } from "react-router-dom";
import business from "../../Assets/Images/business.png";
import development from "../../Assets/Images/development.png";
import marketing from "../../Assets/Images/marketing.png";

const homePage = () => {
  return (
    <div className="banner pb-5">
      <h1 className="home-header pb-5">
        A Digital <br /> Agency.
      </h1>

      <div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={business} alt="business_strategy" className="mb-4" />
            <h2 className="text-white mb-3">Business Stratagy</h2>
            <p className="stratagy-desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              src={development}
              alt="development_strategy"
              className="mb-4"
            />
            <h2 className="text-white  mb-3">Website Development</h2>
            <p className="stratagy-desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={marketing} alt="marketing_strategy" className="mb-4" />
            <h2 className="text-white  mb-3">Marketing & Reporting</h2>
            <p className="stratagy-desc display-1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="row py-5">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <h1 className="fw-bold text-white">Services</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <span>
              <Link className="llinks">Request Custom Service</Link>
          </span>
        </div>

        <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={business} alt="services_img" />
                    <p>Business Strategy</p>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">

                </div>
            </div>


        </div>
      </div>

      {/* Fun fact counts */}
      <div>
        <h1 className="text-center py-5  text-white">Our fun fatcs</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-4">
            <h1 className="text-center text-danger fw-bold ">
              199<span className="span-style">+</span>
            </h1>
            <p className="text-center">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-4">
            <h1 className="text-center text-danger fw-bold ">
              575<span className="span-style">+</span>
            </h1>
            <p className="text-center">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  py-4">
            <h1 className="text-center text-danger fw-bold">
              69<span className="span-style">+</span>
            </h1>
            <p className="text-center">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12"></div>

          <div className="col-lg-4 col-md-6 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
