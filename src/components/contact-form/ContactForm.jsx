import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const AddUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ addUser }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    addUser({
      id: nanoid(),
      name,
      number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId} className={css.formLabel}>
          <div>
            <p>Name</p>
            <Field
              id={nameFieldId}
              name="name"
              className={css.formInput}
              placeholder="Name..."
            />
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label htmlFor={numberFieldId} className={css.formLabel}>
          <div>
            <p>Number</p>
            <Field
              type="text"
              id={numberFieldId}
              name="number"
              className={css.formInput}
              placeholder="Number..."
            />
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
