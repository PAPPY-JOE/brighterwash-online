import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/App.css';
import Header from "./components/Header";
import HeaderSecond from "./components/HeaderSecond";
import Footer from "./components/Footer";
import Index from "./pages/Index"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Clean from "./pages/Clean"
import Journal from "./pages/Journal"
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
          {/* Journal */}
          <Route path="/journal" element={<>
          <Header/>
          <Journal /> 
          <Footer/> 
          </>}/>

          {/* Male */}
          <Route path="/clean" element={<>
          <HeaderSecond/>
          <Clean /> 
          <Footer/> 
          </>}/>

          {/* SignUp */}
          <Route path="/signup" element={<>
          <SignUp /> 
          </>}/>

          {/* Login */}
          <Route path="/login" element={<>
          <Login /> 
          </>}/>

          {/* Landing page */}
          <Route path="/" element={<>
          <Header/> 
          <Index/> 
          <Footer/>
          </>}/> 

        </Routes>
      </div>

    </BrowserRouter>
  
  );
}

export default App;
