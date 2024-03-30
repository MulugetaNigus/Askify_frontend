import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// import { PiTrademarkRegisteredLight } from "react-icons/pi";
import logo from "../Assets/landing-page-3.jpg";
// import AuthImg from "./locker.png";

function UserReg() {
  const [Username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [skill, setskill] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  // create a new user
  const navigate = useNavigate();
  const handleRegister = async () => {
    setloading(true);
    setTimeout(async () => {
      try {
        if (!Username || !email || !password) {
          return seterror(true);
          // return alert("All fields are required!");
        }

        const newUser = {
          username: Username,
          email: email,
          password: password,
          Skill: skill,
        };

        await axios
          .post("http://localhost:5000/api/v2/portal/register", newUser)
          .then((result) => {
            console.log(result.data);
            setloading(false);
            alert("Registration Completed!");
            navigate("/login");
            setUsername("");
            setemail("");
            setPassword("");
          })
          .catch((err) => {
            console.log(err.message);
            setloading(false);
            return alert("something went wrong, please try again !");
          });
      } catch (error) {
        console.error(error.message);
        setloading(false);
        return alert("something went wrong, please try again !");
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
            Sign<span className="text-dark">Up</span> Here
          </p>
          {/* <Link to="/login" className="w-100 mt-5"><button className="btn btn-outline-primary btn-lg w-100">SignIn</button></Link> */}
        </div>
        <div
          className="col-md-6 mx-auto border border-secondary border-opacity-25 bg-light bg-opacity-25 p-3 rounded"
          id="UserReg"
        >
          <p className="display-3 fw-bold text-start text-primary">
            Askify
          </p>
          <hr />
          <span
            htmlFor="username"
            className="fw-bold fs-5 d-flex flex-row align-items-start ms-1"
            style={{ color: error && "red" }}
          >
            Username{" "}
          </span>
          <input
            type="text"
            className="form-control form-control-lg bg-info bg-opacity-25 border border-info border-opacity-25"
            placeholder="Joen Due"
            // {...register("firstname")}
            onChange={(e) => setUsername(e.target.value)}
            required
            value={Username}
            style={{ border: error && "0.5px solid red" }}
          />
          {error && (
            <p className="text-danger fw-light d-flex flex-row">
              username required
            </p>
          )}
          <span
            htmlFor="username"
            className="fw-bold fs-5 d-flex flex-row align-items-start ms-1 mt-3"
            style={{ color: error && "red" }}
          >
            email
          </span>
          <input
            type="email"
            className="form-control form-control-lg bg-info bg-opacity-25 border border-info border-opacity-25"
            placeholder="JoenDue@gmail.com"
            // {...register("lastname")}
            onChange={(e) => setemail(e.target.value)}
            required
            value={email}
            style={{ border: error && "0.5px solid red" }}
          />
          {error && (
            <p className="text-danger fw-light d-flex flex-row">
              email required
            </p>
          )}
          <span
            htmlFor="username"
            className="fw-bold fs-5 d-flex flex-row align-items-start ms-1 mt-3"
            style={{ color: error && "red" }}
          >
            password
          </span>
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
              password required
            </p>
          )}
          <span
            htmlFor="time"
            className="fw-bold fs-5 d-flex flex-row align-items-start ms-1 mt-3"
            style={{ color: error && "red" }}
          >
            Skills You Have
          </span>
          <select
            name="skill"
            id="skill"
            className="form-control form-control-lg bg-info bg-opacity-25 border border-info border-opacity-25"
            onChange={(change) => setskill(change.target.value)}
            value={skill}
          >
            <option value="choice your skill set">choice your skill set</option>
            <option value="C++">C++</option>
            <option value="JAVA">JAVA</option>
            <option value="PYTHON">PYTHON</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
            <option value="AI">AI</option>
            <option value="SOFTWARE ENGINNERING">SOFTWARE ENGINNERING</option>
          </select>

          <br />
          {loading ? (
            <div className="animate">
              <button className="btn btn-light text-danger btn-lg w-100 border border-light fw-normal">
                loading...{" "}
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleRegister()}
              className="btn btn-primary btn-lg w-100 text-light border border-secondary border-opacity-25 fw-bold"
            >
              Register{" "}
              <span className="fs-3">
                {/* <PiTrademarkRegisteredLight /> */}
              </span>
            </button>
          )}
          <div className="row mb-5">
            <div className="col-md-12 text-start mt-3">
              <Link to="/login">Already Have An Account?</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserReg;
