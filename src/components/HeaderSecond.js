import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Header.css";
import { Button } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import SideBarSecond from "./SidebarSecond";
import { HashLink } from 'react-router-hash-link';

function HeaderSecond() {
  const navigate = useNavigate();

  const home = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const clean = (e) => {
    e.preventDefault();
    navigate("/clean/basket");
  };

  const [navOpen, setNavOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = (e) => {
    e.preventDefault();

    if (user) {
      auth.signOut();
    }
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
      <HashLink to="/#">
          <p>Home </p>
          <i></i>
        </HashLink>
        <HashLink to="/clean#">
          <p>Male</p>
          <i></i>{" "}
        </HashLink>
        <HashLink to="/clean/women#">
          <p>Female</p>
          <i></i>
        </HashLink>

        
        <Button className="header__button" onClick={clean}>
          Laundry Basket
        </Button>
        {/* <Link onClick={handleAuthentication}>
          <p className="redd">{user ? "Sign Out" : ""}</p>{" "}
        </Link> */}
      </div>
      <div className={navOpen ? "show" : "test"}>
        <SideBarSecond id="sidebar" />
      </div>
    </div>
  );
}

export default HeaderSecond;
