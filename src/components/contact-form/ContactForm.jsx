import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const AddUserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  number: '',
};

const ContactForm = ({ onAddUser }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, action) => {
    onAddUser(values);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddUserSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>
          <p>Name</p>
          <Field type="text" id={nameFieldId} name="username" />
          <ErrorMessage
            className={css.errorMessage}
            name="username"
            component="span"
          />
        </label>
        <label htmlFor={numberFieldId}>
          <p>Number</p>
          <Field type="text" id={numberFieldId} name="number" />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
