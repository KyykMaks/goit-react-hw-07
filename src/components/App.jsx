import { ContactForm } from './contactForm.jsx';
import ContactList from './contactList.jsx';
import SearchBox from './searchBox.jsx';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  );
};