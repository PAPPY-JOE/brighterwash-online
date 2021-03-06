import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Header.css";
import { Button } from "@material-ui/core";
import SideBar from "./SideBar";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const navigate = useNavigate();

  const order = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  const [navOpen, setNavOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = (e) => {
    e.preventDefault();

    if (user) {
      auth.signOut();
    }
  };

  const home = (e) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <div className="header">
      <div className="header__box box-1">
        <h2 title="Home - Brigher Wash Laundry Services" onClick={home}>
          Brighter Wash
        </h2>
        <MenuRoundedIcon
          className="menuIcon"
          onClick={() => setNavOpen(!navOpen)}
        />
      </div>
      <div className="header__box box-2">
        <HashLink to={user ? "/clean" : ""}>
          <p>{user ? "Male" : ""}</p>
          <i></i>{" "}
        </HashLink>
        <HashLink to={user ? "/clean/female" : "/login"}>
          <p>{user ? "Female" : "Login"} </p>
          <i></i>
        </HashLink>
        <Button className="header__button" onClick={order}>
        Laundry Basket
        </Button>
        {/* <HashLink onClick={handleAuthentication}>
          <p className="redd">{user ? "Sign Out" : ""}</p>{" "}
        </HashLink> */}
      </div>
      <div className={navOpen ? "show" : "test"}>
        <SideBar id="sidebar" />
      </div>
    </div>
  );
}

export default Header;
