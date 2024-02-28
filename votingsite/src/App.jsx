import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Election from "./pages/Election";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { MyFooter } from "./components/Footer";
import { logEvent } from "firebase/analytics";
import { analytics } from "./utils";
import Contact from "./pages/Contact";
import Reset from "./pages/Reset";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Chatroom from "./pages/Chatroom";
import Forgotpas from "./pages/Forgotpas";
import Ballot from "./pages/Ballot";
import Voiting from "./pages/Voiting";
import Profile from "./pages/Profile";
import Ballotbox from "./pages/Ballotbox";
import Candidatelist from "./pages/Candidatelist";
import Voterlogin from "./pages/Voterlogin";
import Voteregister from "./pages/Voteregister";
import Votingbox from "./pages/Votingbox";
import Auth from "./pages/Auth";
import Editcandidate from "./pages/Editcandidate";
import Result from "./pages/Result";
import Voterlist from "./pages/Voterlist";

function App() {
  if (analytics) {
    logEvent(analytics, "visited..");
  }
  const [loggedIn, setisLoggedin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setisLoggedin(true);
    }
  }, []);
  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/election" element={<Election />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/chat" element={<Chatroom />} />
          <Route path="/forgotpas" element={<Forgotpas />} />
          <Route path="/Ballot" element={<Ballot />} />
          <Route path="/voiting" element={<Voiting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ballotbox" element={<Ballotbox />} />
          <Route path="/candidatelist" element={<Candidatelist />} />
          <Route path="/voterlog" element={<Voterlogin />} />
          <Route path="/voteregister" element={<Voteregister />} />
          <Route path="/Votingbox/:BallotId" element={<Votingbox/>} />
          <Route path="/Editcandidate" element={<Editcandidate/>} />
          <Route path="/Voterlist" element={<Voterlist/>} />
          <Route path="/Result" element={<Result/>}/>
          {loggedIn && <Route path="/Auth" element={<Auth/>} />}
          {loggedIn && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
        <MyFooter />
     
    </>
  );
}

export default App;
