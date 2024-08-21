import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <h1 className={s.welcome}>Hello, number collector! 📱</h1>
      <p className={s.secondary}>
        Time to gather contact numbers like <br></br>Pokémon — gotta save 'em
        all! 📞😂
      </p>
    </main>
  );
}
