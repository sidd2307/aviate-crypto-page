import React, { useState } from "react";
import logo from "../static/logo.svg";
import "./NavBar.css";

export default function NavBar() {
  const [isMenuClosed, setMenuClosed] = useState(true);
  const links = ["Products", "Features", "About", "Contact"];

  return (
    <div className="bg-[#0D0D2B] text-white flex font-Rubik">
      TODO:Fix padding issues in mobile
      <nav className="w-[90%] ml-auto mr-auto">
        <div className="text-lg bold">
          <img src={logo} alt="" />
        </div>
        <div
          className="nav-hamburguer-icon"
          onClick={() => setMenuClosed(!isMenuClosed)}
        >
          ☰
        </div>
        <div className="nav-links">
          {links.map((node) => {
            return (
              <a
                key={node}
                href="/"
                className="text-white text-base py-2 px-4 hover:border-b-[1px] hover:border-blue-500"
              >
                {node}
              </a>
            );
          })}

          <a href="/" className="text-white text-base py-2 px-4">
            Login
          </a>
          <span className="text-[#525267] text-base ml-4 mr-4 py-2">|</span>
          <a
            href="/"
            class="bg-blue-500 text-white py-2 px-4 rounded-full mb-0 mt-0"
          >
            Register
          </a>
        </div>
      </nav>
      <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
        <div style={{ backgroundColor: "#252540" }}>
          <div
            className="overlay-buttonClose"
            onClick={() => setMenuClosed(!isMenuClosed)}
          >
            <span>&times;</span>
          </div>
          <div className="overlay-menu-wrapper">
            <div className="overlay-menu">
              {links.map((node) => {
                return (
                  <a
                    key={node}
                    onClick={() => setMenuClosed(!isMenuClosed)}
                    className="overlay-menu-item"
                    style={{ color: "white" }}
                  >
                    {node}
                  </a>
                );
              })}

              <div>
                <a href="/" className="text-white text-base py-2 px-4">
                  Login
                </a>
                <span className="text-[#525267] text-2xl ml-4 mr-4">|</span>
                <a
                  href="/"
                  class="bg-blue-500 text-white py-2 px-4 rounded-full mb-0 mt-0"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
