import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// import { CiLogin } from "react-icons/ci";
import logo from "../Assets/landing-page-3.jpg";

function Login() {
  // states to store the user data
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const [error, seterror] = useState(false);
  const [UserNotFound, setUserNotFound] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const handleLogIn = async () => {
    setloading(true);
    setTimeout(async () => {
      try {
        if (!username || !password) {
          return seterror(true);
          // return alert("All fields are required!");
        }

        const newUser = {
          username: username,
          password: password,
        };

        await axios
          .post("http://localhost:5000/api/v2/portal/login", newUser)
          .then((result) => {
            console.log(result.data.message);
            setloading(false);
            alert("Successfully LogIn!");
            window.localStorage.setItem("NodeAuth", true);
            window.localStorage.setItem("AskifyLec", username);
            navigate("/Home");
            setusername("");
            setPassword("");
          })
          .catch((err) => {
            console.log(err.message);
            setloading(false);
            setUserNotFound(true);
            // alert("Incorrect Email Or Password !");
          });
      } catch (error) {
        console.error(error);
        setUserNotFound(true);
      }
    }, 3000);
  };

  return (
    <>
      <div className="row m-3 mt-5">
        <div
          className="col-md-6 p-3 rounded
                        d-flex flex-column align-items-center justify-content-center
        "
          id="signIn"
        >
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ width: "900px" }}
          />
          <p className="display-3 fw-bold text-primary">
            Sign<span className="text-dark">In</span> Here
          </p>
          {/* <Link to="/" className="w-100 mt-5">
            <button className="btn btn-outline-primary btn-lg w-100">
              SignUp
            </button>
          </Link> */}
        </div>
        <div
          className="col-md-6 mx-auto border border-secondary border-opacity-25 bg-light bg-opacity-25 p-3 rounded"
          id="UserReg"
        >
          <div className="row">
            {UserNotFound && (
              <p className="text-danger border border-danger bg-danger bg-opacity-25 border-opacity-25 rounded pt-2 fw-bold">
                Incorrect Email Or Password
              </p>
            )}
          </div>
          <p className="display-3 fw-bold text-start text-primary">
            Askify
          </p>
          <hr />
          <label
            htmlFor="username"
            className="fw-bold fs-6 d-flex flex-row align-items-start ms-1"
            style={{ color: error && "red" }}
          >
            username
          </label>
          <input
            type="username"
            className="form-control form-control-lg bg-info bg-opacity-25 border border-info border-opacity-25"
            placeholder="JoenDue@gmail.com"
            // {...register("lastname")}
            onChange={(e) => setusername(e.target.value)}
            required
            value={username}
            style={{ border: error && "0.5px solid red" }}
          />
          {error && (
            <p className="text-danger fw-light d-flex flex-row">
              email is required
            </p>
          )}
          <label
            htmlFor="username"
            className="fw-bold fs-6 d-flex flex-row align-items-start ms-1 mt-2"
            style={{ color: error && "red" }}
          >
            password
          </label>
          <input
            type="password"
            className="form-control form-control-lg bg-info bg-opacity-25 border border-info border-opacity-25"
            placeholder="*************"
            // {...register("lastname")}
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
            style={{ border: error && "0.5px solid red" }}
          />
          {error && (
            <p className="text-danger fw-light d-flex flex-row">
              password is required
            </p>
          )}
          <br />
          {loading ? (
            <div className="animate">
              <button
                //   onClick={() => handleLogIn()}
                className="btn btn-light btn-lg w-100 text-danger border border-light fw-normal"
              >
                loading... <span className="fs-3">{/* <CiLogin /> */}</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleLogIn()}
              // onClick={() => navigate("/Home") }
              className="btn btn-primary btn-lg w-100 text-light border border-secondary border-opacity-25 fw-bold"
            >
              logIn <span className="fs-3">{/* <CiLogin /> */}</span>
            </button>
          )}
          <div className="row mb-5">
            <div className="col-md-12 text-start mt-3">
              <Link to="/">Don't Have an Account Yet?</Link>
              {/* <br /> */}
              {/* <br /> */}
              {/* <Link className="my-1" disabled>Forget Password?</Link> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
