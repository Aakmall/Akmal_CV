import React from "react";
import "./home.css";
import me from "../../Assets/botak(2).png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div>
        <img src={me} alt="" className="home__img" />
        <h1 className="home__name">Akmal Anapu</h1>
        <span className="home__education">Saya adalah programmer pemula</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
