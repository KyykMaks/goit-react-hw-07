import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './contactForm.module.css';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const userNameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.phone,
      id: nanoid(),
    };

   dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        phone: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={userNameId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={userNameId}
        />

        <label htmlFor={numberId}>Number</label>
        <Field className={css.field} type="phone" name="phone" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};