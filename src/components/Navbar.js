import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.About}</a>
            </li>
          </ul>

          {/* 🌙 DARK MODE SWITCH */}
          <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
            />
            <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`}>
              Enable Dark Mode
            </label>
          </div>

          {/* 🔍 SEARCH FORM */}
          <form className="d-flex mx-2">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}
