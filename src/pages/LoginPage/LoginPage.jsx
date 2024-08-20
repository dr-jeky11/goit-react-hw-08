import LoginForm from "../../components/LoginForm/LoginForm";

import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <main>
      <section className={s.section}>
        <LoginForm />
      </section>
    </main>
  );
}
