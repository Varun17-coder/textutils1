// write rfc to use emmet------reactFunctionalBasedComponent
import React from 'react'

import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">

      {/* link will be used instead of anchor tag <a></a> for react router */}
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item"> */}
            {/* <Link className="nav-link" to="/about"><strong> {props.aboutText}</strong></Link> */}
            {/* <a className="nav-link" href="/about"><strong> {props.aboutText}</strong></a> */}
          {/* </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}

        {/* here the prop has set to change the font colour using conditional statements */}

        {/* very important expression to see down cause we used ternary operator to set the EnableDark to white and black */}
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">EnableDarkMode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

// this is to declare the type of prop. To not to get confused in the input of prop variables
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // 'isRequired' is to make it mandatory to set 
  aboutText: PropTypes.string
}

// this is a default prop setting
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
}