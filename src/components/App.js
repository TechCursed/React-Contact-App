import './App.css';

// importing the components
import Header from './Header';
import ConactCard from './ContactCard';
import ContactList from './ContactList';
import AddContacts from './AddContacts';


function App() {
  return (
    <div className="App">
      <Header />
      <AddContacts />
      <ContactList />
    </div>
  );
}

export default App;
