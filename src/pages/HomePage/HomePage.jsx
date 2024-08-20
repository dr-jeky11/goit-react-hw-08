import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <h1 className={s.welcome}>Welcome 🎉</h1>
      <p className={s.secondary}>Need to save contact numbers?</p>
      <p className={s.secondary}>Feel free to use this app 😊</p>
    </main>
  );
}
