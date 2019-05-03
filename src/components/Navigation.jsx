import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/todos">Todos</NavLink>
      </li>
      <li>
        <NavLink to="/lifecycle">lifecycle</NavLink>
      </li>
    </ul>
  </nav>
);
