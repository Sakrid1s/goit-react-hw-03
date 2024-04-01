import { Formik, Field, Form } from 'formik';
import { useId } from 'react';

const initialValues = {
  username: '',
  number: '',
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>
          <p>Name</p>
          <Field type="text" id={nameFieldId} name="username" />
        </label>
        <label htmlFor={numberFieldId}>
          <p>Number</p>
          <Field type="text" id={numberFieldId} name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
