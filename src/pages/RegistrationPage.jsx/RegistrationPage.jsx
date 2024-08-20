import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <main>
      <section className={s.section}>
        <RegisterForm />
      </section>
    </main>
  );
}
