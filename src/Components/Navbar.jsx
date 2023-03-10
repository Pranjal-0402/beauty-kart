import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Slider from "react-slick";
import { useState } from "react";

export const Navbar = () => {
  const [isMobail, setisMobail] = useState(false);
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <>
      <br />
      <Slider {...settings} className="slid">
        <div>
          <h3>10% off for new users on first order</h3>
        </div>
        <div>
          <h3>FREE SHIPPING on PREPAID Orders</h3>
        </div>
        <div>
          <h3>USE CODE : MASAI10 TO GET 10% OFF</h3>
        </div>
      </Slider>

      <div className="navbar">
        <div className="logosection">
          <div>
            <button className="drawer" onClick={() => setisMobail(!isMobail)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div>
            <img
              src="/Image/logo.png"
              alt="dfd"
              className="logo"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="signupsection">
            <button className="logbtn">
              <Link to="/login">
                <i className="fa-regular fa-user"></i>
              </Link>
            </button>
            <button className="favbtn">
              <i className="fa-sharp fa-solid fa-heart"></i>
            </button>
            <button className="cartbtn-0nav">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </button>
          </div>
        </div>
        <div className="navbar-links">
          <Link className="pagelinks-cat012" to="/top-offers">
            Top Offers
          </Link>
          <Link className="pagelinks-cat012" to="/body-care">
            Body Care
          </Link>
          <Link className="pagelinks-cat012" to="/candles">
            Candles
          </Link>
          <Link className="pagelinks-cat012" to="/home-fragrance">
            Wallflower & AirFreshners
          </Link>
          <Link className="pagelinks-cat012" to="/hand-soaps-sanitizers">
            Hand Soaps & Sanitizers{" "}
          </Link>
          <Link className="pagelinks-cat012" to="/mens-shop">
            Men's Shop
          </Link>
          <Link className="pagelinks-cat012" to="/moxy-collection">
            Moxy
          </Link>
          <Link className="pagelinks-cat012" to="/holiday-shop">
            Holiday Shop
          </Link>
        </div>
      </div>
      <div className={isMobail ? "resdrawer" : "norespon"}>
        <div className="closebuton">
          <button
            onClick={() => setisMobail(!isMobail)}
            className="btnclosedrawer-987"
          >
            {" "}
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="navbar-links-drawer">
          <h4 onClick={() => setisMobail(!isMobail)}>
            {" "}
            <Link className="drawer-links-0934" to="/top-offers">
              Top Offers
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/body-care">
              Body Care
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/candles">
              Candles
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/home-fragrance">
              Wallflower & AirFreshners
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/hand-soaps-sanitizers">
              Hand Soaps & Sanitizers{" "}
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/mens-shop">
              Men's Shop
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/moxy-collection">
              Moxy
            </Link>
          </h4>

          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934" to="/holiday-shop">
              Holiday Shop
            </Link>
          </h4>
          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934">WishList</Link>
          </h4>
          <h4 onClick={() => setisMobail(!isMobail)}>
            <Link className="drawer-links-0934">Login</Link>
          </h4>
        </div>
      </div>
      <img
        src="/Image/homepage/adbaner.jpg"
        alt="add"
        className="navaddsec-21"
      />
    </>
  );
};
