import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import {useState} from "react";
import {INITIAL_USERS} from "./data/users";

function App() {
  const [users, setUsers]         = useState(INITIAL_USERS);
  const [selected, setSelected]   = useState(null);

  const handleDelete  = id  => setUsers(prev => prev.filter(u => u.id !== id));
  const handleDetails = user => setSelected(user);
  const handleClose   = ()  => setSelected(null);

  return (
      <>
        <Header />
        <main className="page">
          <UserTable users={users} onDelete={handleDelete} onDetails={handleDetails} />
        </main>
        <UserModal user={selected} onClose={handleClose} />
      </>
  );
}

export default App;
