import React from "react";
import { BiBasket } from "react-icons/bi";
import "../style.css";

const HomeComponent = () => {
  return (
    <>
      <div className="add-to-cart text-center my-4 m-auto">
        <BiBasket className="basket-img" />
        <span className="total-cart-circle">1</span>
      </div>
      <h4 className="text-center py-3">
        <u>Shopping Website</u>
      </h4>
      <div className="card mb-3 w-25 m-auto">
        <div className="row">
          <div className="col-md-4 img-wrapper item d-flex justify-content-end align-items-center">
            <img
              src="../assets/images/mobile.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 m-0 p-0">
            <div className="card-body mx-3">
              <h5 className="p-0 m-0">iPhone</h5>

              <p className="p-0 m-0 mb-2">
                Price: <b>$1000.00</b>
              </p>

              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
