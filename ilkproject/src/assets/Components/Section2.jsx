import React from "react";

const Section2 = () => {
  return (
    <section className="products">
      <h4>Products</h4>
      <div className="chairsGeneral">
        <div className="material">
          <h2>Crafted with excellent material.</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button>Explore</button>
        </div>
        <div className="chair">
          <div className="card">
            <img
              src="https://themewagon.github.io/furni/images/product-1.png"
              alt="" className="png"
            />
            <h3>Nordic Chair</h3>
            <strong>$50.00</strong>
            <div className="plusImg">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="plus"
                alt=""
              />
            </div>
          </div>
          <div className="card">
            <img
              src="https://themewagon.github.io/furni/images/product-2.png"
              alt="" className="png"
            />
            <h3>Kruzo Aero Chair</h3>
            <strong>$78.00</strong>
            <div className="plusImg">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="plus"
                alt="" 
              />
            </div>
          </div>
          <div className="card">
            <img
              src="https://themewagon.github.io/furni/images/product-3.png"
              alt="" className="png"
            />
            <h3>Ergonomic Chair</h3>
            <strong>$43.00</strong>
            <div className="plusImg">
              <img
                src="https://themewagon.github.io/furni/images/cross.svg"
                className="plus"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
