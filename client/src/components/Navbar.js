import React, { useEffect } from 'react';
// import { useEffect } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { Link, Events, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';
import M from 'materialize-css/dist/js/materialize.min.js';



export const Navbar = () => {
  // classNameName Navbar extends Component {

  useEffect(() => {
    // M.AutoInit();
    const elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line no-unused-vars
    const instances = M.Sidenav.init(elems);


  }, []);
  return (
    <>
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab"> <Link activeClass="active" to="test1" spy={true} smooth={true} duration={500} offset={-54}>Test 1</Link></li>
              <li className="tab"><Link activeClass="active" to="test2" spy={true} smooth={true} duration={500} offset={-54}>Test 2</Link></li>
              <li className="tab disabled"><Link activeClass="active" to="test3" spy={true} smooth={true} duration={500} offset={-54}>Disabled Tab</Link></li>
              <li className="tab"><Link activeClass="active" to="test4" spy={true} smooth={true} duration={500} offset={-54}>Test 4</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>

      <div id="test1" className="col s12">Test 1</div>
      <div id="test2" className="col s12">Test 2</div>
      <div id="test3" className="col s12">Test 3</div>
    </>
  )

}
