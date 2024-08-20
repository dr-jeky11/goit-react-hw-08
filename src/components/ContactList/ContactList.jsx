import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}
