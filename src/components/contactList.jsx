import { useSelector } from "react-redux";
import { Contact } from "./contact";
import css from "./contactList.module.css";
import { selectFilteredContacts } from "../redux/contactsSlice";

export default function ContactList() {
 
  
  const selectorFilter = useSelector(selectFilteredContacts)

 
    return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {selectorFilter.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
