// aceasta componenta este un a simpla de tip function Component care ilustreza partea de header a aplicatiei
import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        src="https://images.unsplash.com/photo-1547480053-7d174f67b557?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="random"
      />
      <h2>Lista mea vaforita de todo-uri</h2>
    </div>
  );
}

export default Header;
