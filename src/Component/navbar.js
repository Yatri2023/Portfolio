import React from "react";
import ReactDOM from "react-dom/client";
import {
  HomeRepairService,
  Person,
  Mail,
} from "@mui/icons-material";
import Homepage from "@mui/icons-material/Home";
import Contact from "./contact";
import Home from "./Home";
import Portfolio from "./portfolio";
import About from "./about";
import "../Styles/navbar.css";
const styles = {
  activity: { 
    fontSize: "1.5rem", 
    marginRight: "3px",
    marginTop: "5px",
  },
};
const icons = [
  <Homepage style={styles.activity} />, 
  <Person style={styles.activity} />, 
  <HomeRepairService style={styles.activity} />, 
  <Mail style={styles.activity} />
];
const pages = ["Home", "About", "Portfolio", "Contact"];
const navi = [<Home />, <About />, <Portfolio />, <Contact />,];
function Navbar() {
  const m = (navi) => {
    const main = ReactDOM.createRoot(
      document.getElementById("main")
    );
    main.render(navi);
  };
  return (
    <div className="main-page">
      <div className="navbar">
        <div className="name-logo">
          <span className="logo_1">Yatri</span>
          <span className="logo_2">Doshi</span>
        </div>
        <div className="button-group">
          {pages.map((page, index) => (
            <button
              className="btn"
              key={page}
              onClick={() => m(navi[index])}>
              {icons[index]}&nbsp;<span className="t1">{page}</span>
            </button>
          ))}
        </div>
      </div>
      <div id="main">
        <Home />
      </div>
    </div>
  );
}
export default Navbar;
