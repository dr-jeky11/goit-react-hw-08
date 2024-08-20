import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />

      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
