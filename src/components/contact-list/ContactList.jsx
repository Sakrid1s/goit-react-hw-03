import Contact from '../contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ users }) => {
  return (
    <>
      <div className={css.contactList}>
        {users.map(user => {
          return <Contact user={user} key={user.id} />;
        })}
      </div>
    </>
  );
};

export default ContactList;
