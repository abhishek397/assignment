import React from "react";
import Watch from "./images/watch.jpg";
import "./styles.css";

const Cart = () => {
  return (
    <>
      <div className="eKart-Container">
        <h2> Welcome to Ekart</h2>

        <div className="search-bar">
          <input type="text" placeholder="search" />
        </div>

        <div className="container-items">
          <div className="watch">
            <img src={Watch} alt="watch" />

            <div id="child">
              Querty watch
              <br />
              Leather Type
              <br />
              ₹12,000
              <br />
              color:Brown
              <br />
              <span>In stock</span>
              <br />
            </div>
            <div id="button">
              <button className="button1">Delete</button>
              <button className="button2">See more like this </button>
            </div>
          </div>
        </div>
        <div id="range-button">
          <span className="dec">
            <button> - </button>
          </span>
          <span className="num">0</span>
          <span className="incre">
            <button> + </button>
          </span>
        </div>

        <hr />

        <div className="container-items">
          <div className="watch">
            <img src={Watch} alt="watch" />

            <div id="child">
              Querty watch
              <br />
              Leather Type
              <br />
              ₹12,000
              <br />
              color:Brown
              <br />
              <span>In stock</span>
              <br />
            </div>
            <div id="button">
              <button className="button1">Delete</button>
              <button className="button2">See more like this </button>
            </div>
          </div>
        </div>
        <span id="range-button">
          <button className="dec"> - </button>
          <span>0</span>
          <button className="incre"> + </button>
        </span>

        <hr />

        <div className="container-items">
          <div className="watch">
            <img src={Watch} alt="watch" />

            <div id="child">
              Querty watch
              <br />
              Leather Type
              <br />
              ₹12,000
              <br />
              color:Brown
              <br />
              <span>In stock</span>
              <br />
            </div>
            <div id="button">
              <button className="button1">Delete</button>
              <button className="button2">See more like this </button>
            </div>
          </div>
        </div>
        <span id="range-button">
          <button className="dec"> - </button>
          <span>0</span>
          <button className="incre"> + </button>
        </span>

        <hr />

        <div className="total">
          <p id="sub-total">Subtotal ₹13,500 </p>
          <button>Proceed to buy (3 items)</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
