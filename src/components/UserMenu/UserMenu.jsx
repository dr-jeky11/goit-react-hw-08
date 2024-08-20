import { useDispatch, useSelector } from "react-redux";

import { IoLogOut } from "react-icons/io5";

import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={s.menuWrapper}>
      <p className={s.welcomeText}>
        👋🏻 <span>{user.name}</span>
      </p>
      <button type="button" className={s.btn} onClick={handleLogOut}>
        <IoLogOut color="whitesmoke" size={28} />
      </button>
    </div>
  );
}
