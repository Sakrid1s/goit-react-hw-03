import { useEffect, useState } from 'react';
import SearchBox from './components/search-box/SearchBox';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
import userData from './components/data/user-data.json';
import './App.css';

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem('users');
    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }
    return userData;
  });

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const [filter, setFilter] = useState('');

  const filteredUsers = users.filter(user => {
    const filteredByName = user.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    const filteredByNumber = Number(
      user.number.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredByName || filteredByNumber;
  });

  const addUser = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox value={filter} searchUser={setFilter} />
      <ContactList filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
