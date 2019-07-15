import * as React from "react";

import "./header.scss";

export const Header = () => {
  return (
      <nav className="navigation">
        <a className="navigation__brand" href="/" aria-label={"Amplience - Amplify Expirence Logo"}></a>
      </nav>
  );
};
