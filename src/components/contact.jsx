import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import css from './contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact} from '../redux/contactsOps';


export const Contact = ({ contact }) => {
  const { id, name, number} = contact;
  const dispatch = useDispatch();
 
  const handleDeleteClick = () => {
      dispatch(deleteContact(id))
  };
  return (
    <li key={id} className={css.contactItem}>
      <div>
        <div className={css.item}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.item}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} type="module" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
};