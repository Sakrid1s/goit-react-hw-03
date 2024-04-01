import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ user }) => {
  return (
    <div className={css.contactItem}>
      <div>
        <p>
          <FaPhoneAlt /> {user.name}
        </p>
        <p>
          <IoPerson /> {user.number}
        </p>
      </div>
      <button type="button" className={css.contactBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
