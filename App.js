import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import UserReg from "./Auth/Register";
import Login from "./Auth/LogIn";
import Home from "./pages/Home";
import Replay from "./pages/Replay";

function App() {
  return (
    <div className="App">
      {/* routes here */}
      <Router>
        <Routes>
            <Route path="/" element={ <UserReg /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/Home" element={ <Home /> } />
            <Route path="/Replay" element={ <Replay /> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
