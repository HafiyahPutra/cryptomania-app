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
          <p>1101220058</p>
          <p>Front-End</p>
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
              href="mailto:raihan.rahmat2019@gmail.com"
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
            <img src="./img/putra.JPG" alt="profil.img" />
          </div>
          <p className="name">Hafiyah Putra</p>
          <p>1101223345</p>
          <p>Back-End</p>
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
              href="https://github.com/HafiyahPutra"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:haffiyanputra@gmail.com"
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
          <p>1101223019</p>
          <p>Front-End</p>
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
              href="https://github.com/rifada19"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto: ahmadrifada0@gmail.com"
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
