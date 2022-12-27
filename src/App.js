import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/ErrorPages/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Users = React.lazy(() => import("./pages/Users/Users"));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<RequireAuth><Suspense fallback={<Loading />}><Users /></Suspense></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
