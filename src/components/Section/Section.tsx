import React from "react";
import { useSelector } from "react-redux";
import arrow from "../../assets/images/arrow.png";
import controller from "../../assets/images/controller.png";
import add from "../../assets/images/add.png";
import fb from "../../assets/images/fb.png";
import ig from "../../assets/images/ig.png";
import tw from "../../assets/images/tw.png";
import "./section.css";

export default function Section() {
  const user = useSelector(
    (state: { user: { value: { email: string; password: string } } }) =>
      state.user.value
  );

  console.log(user)
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-1">
          <h2>
            PS4 V2 <br /> Dualshock 4
          </h2>
          <h3>Wireless Controller for PlayStation 4</h3>
          <p>{`(Compatible/Generic)`}</p>
          <h4>$32.50</h4>
          <button type="button">
            Buy Now <img src={arrow} />{" "}
          </button>
        </div>
        <div className="col-2">
          <img src={controller} className="controller" />
          <div className="color-box"></div>
          <div className="add-btn">
            <img src={add} />
            <p>
              <small>Add to cart</small>
            </p>
          </div>
        </div>
      </div>
      <div className="social-links">
        <img src={fb} alt="" />
        <img src={tw} alt="" />
        <img src={ig} alt="" />
      </div>
    </>
  );
}
