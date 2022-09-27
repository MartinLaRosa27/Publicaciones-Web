import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Main } from "./Main.jsx";
import { MyPosts } from "./MyPosts.jsx";

export const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <NavLink to="/" className="navbar-brand title">
            Posts Web
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/my-posts" className="nav-link">
                  My Posts
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/my-posts" element={<MyPosts />}></Route>
        <Route
          path="*"
          element={<h1 className="mt-5 text-center">ERROR 404 :(</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
