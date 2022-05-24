import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/Header.css";
import { Button } from "@material-ui/core";
import SideBar from "./SideBar";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const history = useHistory();

  const clean = (e) => {
    e.preventDefault();
    history.push("/clean");
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

    history.push("/");
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
        <HashLink to={user ? "/orders" : "/business"}>
          <p>{user ? "Dashboard" : "For Business"}</p>
          <i></i>{" "}
        </HashLink>
        <HashLink to={user ? "/business" : "/login"}>
          <p>{user ? "For Business" : "Login"} </p>
          <i></i>
        </HashLink>
        <Button className="header__button" onClick={clean}>
          Clean Now
        </Button>
        <HashLink onClick={handleAuthentication}>
          <p className="redd">{user ? "Sign Out" : ""}</p>{" "}
        </HashLink>
      </div>
      <div className={navOpen ? "show" : "test"}>
        <SideBar id="sidebar" />
      </div>
    </div>
  );
}

export default Header;
