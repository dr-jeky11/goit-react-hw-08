import { NavLink } from "react-router-dom";

import s from "./AuthNav.module.css";
import clsx from "clsx";

const createnavLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isActive);
};

export default function AuthNav() {
  return (
    <div className={s.authWrapper}>
      <NavLink to="/register" className={createnavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={createnavLinkClass}>
        Log in
      </NavLink>
    </div>
  );
}
