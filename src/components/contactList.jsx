import { useSelector } from "react-redux";
import { Contact } from "./contact";
import css from "./contactList.module.css";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.filters.filter);

  const visibleUsers = contacts.filter(item => {
    return item.text.toLowerCase().includes(filterContact.toLowerCase());
  });
    return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {visibleUsers.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
