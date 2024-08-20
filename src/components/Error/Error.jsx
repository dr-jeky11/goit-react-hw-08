import s from "./Error.module.css";

export default function Error({ errorMessage }) {
  return <p className={s.error}>{errorMessage}</p>;
}
