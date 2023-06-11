import React from "react";

import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();

  async function onLogoutClicked() {
    await signOut(auth);
    navigate('/login');
  }

  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {props.user ? (
              <li className="nav-item">
                <div
                  className="btn btn-outline-light mx-3"
                  onClick={onLogoutClicked}
                >
                  Logout
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
