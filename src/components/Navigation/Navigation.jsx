import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import s from "./Navigation.module.css";

const createnavLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isActive);
};

export default function Navigation() {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={createnavLinkClass}>
        Home
      </NavLink>
      {isLoggedin && (
        <NavLink to="/contacts" className={createnavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
