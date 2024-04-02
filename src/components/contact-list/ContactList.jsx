import Contact from '../contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ filteredUsers, removeUser }) => {
  return (
    <>
      <div className={css.contactList}>
        {filteredUsers.map(user => {
          return <Contact user={user} key={user.id} removeUser={removeUser} />;
        })}
      </div>
    </>
  );
};

export default ContactList;
