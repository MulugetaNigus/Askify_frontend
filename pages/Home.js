import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

// icons
import { FcOk } from "react-icons/fc";
import Replay from "./Replay";

// lecture name
const LetName = window.localStorage.getItem("AskifyLec");

function Home() {
  // hooks
  const [incommingQ, setincommingQ] = useState([]);
  const [ViewMessg, setViewMessg] = useState(false);
  const [ActualMessage, setActualMessage] = useState();

  // fetch all messages here using useffect
  useEffect(() => {
    const getMessages = async () => {
      try {
        await axios
          .get("http://localhost:5000/api/v2/portal/incommingMessage")
          .then((result) => {
            console.log(result.data);
            const filteredData = result.data.filter((item) =>
              item.lecture.includes(LetName)
            );
            console.log(filteredData);
            setincommingQ(filteredData);
            let IsItForMe = result.data.map((u) => u.lecture.split("_")[0]);
            console.log(IsItForMe.filter((us) => us === LetName));
          });
      } catch (error) {
        console.log(error.code);
        console.log(error.message);
      }
    };
    getMessages();
  }, []);

  return (
    <>
      <Nav />
      {/* header */}
      {ViewMessg ? (
        <Replay setActualMessage={setActualMessage} />
      ) : (
        <>
          <div className="row m-1">
            <div className="col-md-10 mx-auto d-flex flex-row align-items-start justify-content-start m-1 mb-1 mt-5">
              <h3
                className="fw-bold border-success rounded p-2 bg-none bg-opacity-25 border-opacity-100"
                id="admin"
              >
                Hello {LetName}{" "}
                <span className="fs-1">
                  <FcOk />
                </span>
              </h3>
            </div>
          </div>

          {/* mainBody */}
          {
            incommingQ &&
              incommingQ.map((user) => (
                <div className="row m-1 mb-2">
                  <div
                    className="col-md-10 mx-auto d-flex align-items-start justify-content-between
              border-danger rounded p-2 bg-danger bg-opacity-25 border-opacity-25
              p-4
            "
                  >
                    <h4>{user.user.split("_")[0]}</h4>
                    {/* <Link to="/Replay"> */}
                    <button
                      className="btn btn-outline-primary btn-lg"
                      onClick={() => {
                        window.localStorage.setItem(
                          "QAsker",
                          user.user.split("_")[0]
                        );
                        window.localStorage.setItem("Q", user.message);
                        setViewMessg(true);
                      }}
                    >
                      Replay
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              ))
            // :
            // <p className="mt-5 fw-bold fs-4">There is no questions for now, ready fot the future !</p>
          }
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;
