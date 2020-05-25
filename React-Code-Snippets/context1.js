import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  //above means that from what context you wanna get the data in if we had multiple contexts
  //above also means that it will find the Provider for ThemeContext in the component tree
  //and that provider will be ThemeContextProvider in App.js i.e its parent component
  //and this will enable it to get the data from ThemeContext.provider through value={} attr
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ color: theme.syntax, background: theme.ui }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
