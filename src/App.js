import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index"
import Journal from "./pages/Journal"
// import Journal from "./Journal"
// import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { auth, provider } from "./firebase";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Journal" element={<><Journal /> <Footer/> </>}/>

          {/* Landing page */}
          <Route path="/" element={<><Header/> <Index/> <Footer/></>}/> 

        </Routes>
      </div>

    </BrowserRouter>
  
  );
}

export default App;
