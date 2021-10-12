import React, { useState } from "react";

import { Contact } from "./components/contact/Contact";
import { Index } from "./components/index/Index";
import { NavMenu } from "./components/navMenu/NavMenu";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Works } from "./components/works/Works";

import './app.scss'
import { Menu } from "./components/menu/Menu";

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Index />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
