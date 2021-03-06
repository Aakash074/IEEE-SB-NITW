import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
        <div className="container">
          <a href="/home">
            <img className="logo" src="images/favicon.ico" alt="logo"></img>
            <br></br>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-center" id="mySidenav">
              <li className="nav-item active">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#goals" className="nav-link">
                  Goals
                </a>
              </li>
              <li className="nav-item">
                <a href="#IEEE" className="nav-link">
                  IEEE
                </a>
              </li>
              <li className="nav-item">
                <a href="#events" className="nav-link">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#news" className="nav-link">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-button ml-auto">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button
                    href="#contact"
                    type="button"
                    className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light nav-link"
                  >
                    <a style={{ color: '#ffffff' }} href="#contact">
                      Jump in
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
