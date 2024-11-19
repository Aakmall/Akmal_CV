import React from "react";
import "./home.css";
import me from "../../Assets/botak(2.jpg";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div>
        <img src={me} alt="" className="home__img" />
        <h1 className="home__name">Akmal Rizki Anapu</h1>
        <span className="home__education">Saya adalah programmer pemula</span>
      </div>
    </section>
  );
};

export default Home;
