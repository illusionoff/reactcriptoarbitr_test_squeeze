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

            <span className="brand-logo center" id="brand-logo">CriptoArbitr</span>
            {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="badges.html">Components</a></li>
            </ul> */}
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab"> <Link activeClass="active" to="TechnicalTask" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab red-text text-darken-2" >Technical task</span></Link></li>
              <li className="tab"><Link activeClass="active" to="developmentDescription" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab">Development</span></Link></li>
              {/* <li className="tab disabled"><Link activeClass="active" to="test3" spy={true} smooth={true} duration={500} offset={-60}><span class="navTab">Disabled Tab</span></Link></li> */}
              <li className="tab"><Link activeClass="active" to="chart" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab">Chart</span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <ul className="sidenav" id="mobile-demo">
        <li><a href="badges.html">Components</a></li>
      </ul> */}
    </>
  )

}
