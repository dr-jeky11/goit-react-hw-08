import s from "./Error.module.css";

export default function Error({ errorMessage }) {
  return (
    <div className={s.wrapper}>
      <p className={s.error}>{errorMessage}</p>
      <p className={s.error}>Please try again.</p>
    </div>
  );
}
