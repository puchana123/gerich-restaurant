import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour" />
      <h1 className="app__header-h1">The Key to Find Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet eum
        quidem sequi. Tenetur similique vel aut minima molestias tempora illum?
        Ipsam unde voluptas, nostrum labore eveniet natus eius ab!
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
