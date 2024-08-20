import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}
