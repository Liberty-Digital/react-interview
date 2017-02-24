import React from 'react';

const NavBar = (props) => (
  <nav className="light-blue lighten-1" role="navigation" style={{marginBottom: 16, paddingLeft: 8}}>
    <div className="nav-wrapper">
      <span className="brand-logo">{props.title}</span>
    </div>
  </nav>
);

NavBar.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default NavBar;