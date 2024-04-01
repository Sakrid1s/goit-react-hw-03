import { useState } from 'react';
import SearchBox from './components/search-box/SearchBox';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
import users from './components/data/user-data.json';
import './App.css';

function App() {
  const [user] = useState(users);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList users={user} />
    </div>
  );
}

export default App;
