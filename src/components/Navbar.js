import React from "react";

export default function Navbar({ title, mode, toggleMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
      style={{ transition: "all 0.4s ease" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <div className="ms-auto form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={toggleMode}
            />
            <label
              className={`form-check-label text-${mode === "light" ? "dark" : "light"}`}
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
