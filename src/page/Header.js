import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import FormSearch from "../components/FormSearch";
import Menutrigger from "../components/Menutrigger";

function Header(props) {
  return (
    <header className="c-header">
      <div className="c-header__logo">
        <Menutrigger />
        <Link to="/">
          <Logo width="90px" />
        </Link>
      </div>
      <div className="c-header__mid">
        <FormSearch> </FormSearch>
      </div>
      <div className="c-header__right">Icon</div>
    </header>
  );
}

export default Header;
