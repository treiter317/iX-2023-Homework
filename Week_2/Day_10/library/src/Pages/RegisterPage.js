import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Button from "../components/custom/Button";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-5">
      <div className="card card-body">
        <h1>Register!</h1>
        <p>Please enter your email and password to register</p>

        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Email"
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button
              type="submit"
              loading={loading}
              className="px-5"
              format="primary"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
