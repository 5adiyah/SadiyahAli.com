import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation";
import Hero from "./hero";

const Header = ({ siteTitle }) => (
  <header>
      <Navigation/>
      <Hero/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
