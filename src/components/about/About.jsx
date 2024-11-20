import React from 'react';
import "./about.css";
import Images from "../../Assets/aset/avatar-1.svg";

const About = () => {
  return (
    <div>
      <section className="about container section" id="about">
        <h2 className="section__title">
          About Me
        </h2>

        <div className="about__container grid">
          <img src={Images} alt="" className="about__img" />
          <div className='about__data grid'>
            <div className="about__info">
              <p className="about__description">saya Akmal anapu, seorang programmer dari manado, Sulawesi utara. saya mempunyai banyak pengalaman di website design. 
              </p>
              <a href="https://github.com/Aakmall" className="btn">Tpe Github</a>
            </div>

            <div className="about__skils grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Development</h3>
                  <span className="skills__number Dev">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">UI/UX Design</h3>
                  <span className="skills__number UI/UX">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Fotografi</h3>
                  <span className="skills__number UI/UX">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
