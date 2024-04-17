import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './contactForm.jsx';
import ContactList from './contactList.jsx';
import SearchBox from './searchBox.jsx';
import { selectError, selectLoading } from '../redux/contactsSlice.js';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps.js';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

useEffect(() =>{
  dispatch(fetchContacts());
  },[dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
    </div>
  );
};