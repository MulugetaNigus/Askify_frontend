import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";

function Replay() {
  const [message, setmessage] = useState("");
  // send the replay message to the user
  const handleToSendMessg = async () => {
    //  alert("test send !");
    const Replay = {
      lecture: window.localStorage.getItem("AskifyLec"),
      message: message,
      user: window.localStorage.getItem("QAsker"),
    };
    await axios
      .post("http://localhost:5000/api/v2/portal/sendMessage", Replay)
      .then((result) => {
        alert("sent !");
        setmessage("");
        // console.log(result.data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      {/* <Nav /> */}
      {/* header */}
      <div className="row m-1">
        <div className="col-md-10 mx-auto d-flex flex-column align-items-start justify-content-start m-2 mb-2 mt-5">
          <div className="head d-flex flex-column align-items-start justify-content-start">
            <h3 className="fw-bold text-muted border border-primary rounded p-2 bg-primary bg-opacity-25 border-opacity-25">
              From {window.localStorage.getItem("QAsker")}
            </h3>
          </div>
          <div className="quations text-start">
            <p className="text-lead fs-4 fw-light">
              {window.localStorage.getItem("Q")}
            </p>
            <b className="fs-5">
              Your Replay for {window.localStorage.getItem("QAsker")} :
            </b>
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="form-control my-2 border-info fw-bold rounded p-2 bg-info bg-opacity-25 border-opacity-25 fs-5"
            placeholder="Write Down Your Answer Here..."
            onChange={(e) => setmessage(e.target.value)}
            value={message}
          />
          <div className="actionBtn">
            <button
              className="btn btn-outline-primary btn-lg mt-2 w-100"
              onClick={() => handleToSendMessg()}
            >
              Replay for {window.localStorage.getItem("QAsker")}
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Replay;