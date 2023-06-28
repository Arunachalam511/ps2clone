import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";

const Section = lazy(() => import("./components/Section/Section"));
const Login = lazy(()=> import("./pages/Login/Login"));
const Signup = lazy(()=> import("./pages/signup/Signup"))
function App() {
  return (
   
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/sign-up"element={<Signup/>}/>
            <Route path="/section" element={<Section />} />
          </Routes>
        </Suspense>
      </Router>
 
  );
}

export default App;
