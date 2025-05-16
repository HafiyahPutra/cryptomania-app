import React from "react";
import "./about.css";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-header">
      <h1>About Us</h1>
      <h2>Ini adalah halaman tentang kami.</h2>
      <h3>Berikut adalah beberapa informasi tentang kami :</h3>
      <div className="about-container">
        <div className="profile-card">
          <div className="card-image">
            <img src="./img/raihan.jpg" alt="profil.img" />
          </div>
          <p className="name">M.Raihan Thaffan H</p>
          <p>FRONT-END</p>
          <p>DESKRIPSI DIRI</p>
          <div className="social">
            <a
              href="https://instagram.com/_raihanthaffan_"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:example@example.com"
              className="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className="card-image">
            <img src="./img/putra.jpg" alt="profil.img" />
          </div>
          <p className="name">Hafiyah Putra R</p>
          <p>BACK-END</p>
          <p>DESKRIPSI DIRI</p>
          <div className="social">
            <a
              href="https://instagram.com/Hffyan_29"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:example@example.com"
              className="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="profile-card">
          <div className="card-image">
            <img src="./img/fada.jpg" alt="profil.img" />
          </div>
          <p className="name">Ahmad Rifada</p>
          <p>FRONT-END</p>
          <p>DESKRIPSI DIRI</p>
          <div className="social">
            <a
              href="https://instagram.com/rifada005"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:example@example.com"
              className="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
