import {
    SignedIn,
    SignedOut,
    RedirectToSignIn
  } from "@clerk/clerk-react";
  import "./App.css";
  import { useState, useEffect } from "react";
  import Main from './MAIN/Main.jsx'
  import { Route, Routes } from "react-router-dom";
  import Universitet from './Navbar/Universitet.jsx'
  import Tuzilma from "./Navbar/Rector.jsx"
  import Talaba from "./Navbar/Talabalarga.jsx"
  import Loader from "./MAIN/Loader.jsx";
  import LoginForm  from "./Navbar/Royxat.jsx"
  
  const App = () => {
    const [loader, setLoader] = useState(true);
    const [SITES, setSITES] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoader(false);
        setSITES(true);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          {loader && <Loader />}
          {SITES && (
            <Routes>
              <Route index element={<Main />} />
              <Route path="universitethaqida" element={<Universitet />} />
              <Route path="rector" element={<Tuzilma />} />
              <Route path="yo'riqnoma" element={<Talaba />} />
              <Route path="ro'xatdan o'tish" element={<LoginForm />}/>
            </Routes>
          )}
        </SignedIn>
 
      </>
    );
  }
  
  export default App;
  