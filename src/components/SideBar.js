import { useNavigate } from "react-router-dom";
import React from "react";
import "../assets/Sidebar.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { HashLink } from 'react-router-hash-link';

function SideBar() {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      navigate("/business");
    }
  };

  return (
    <>    

      <div className="container sidebar">
        <div id="toggleMenu" className="sideNav">
            <ul>
             
              <li><HashLink to='/clean#'> Male</HashLink></li>
              <li><HashLink to="/clean/female#">Female</HashLink></li>
              <li><HashLink to="/clean/basket#">Basket</HashLink></li>
               <li>
               <HashLink to={user ? "/#" : "/login#"}>
                 <span className="clean__sideNav" onClick={handleAuthentication}>
                 {user ? "Sign Out" : "Login"}
                 </span>
               </HashLink>
             </li>
          </ul>
          </div>
      </div>
    </>
  );
}

export default SideBar;
