import s from "./Layout.module.css";

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
