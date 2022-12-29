import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

import Forgotpassword from "./Pages/ForgotPassword";
import Signup from "./Pages/SignUp";
import Header from "./components/Header";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Offers from "./Pages/Offers";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}
