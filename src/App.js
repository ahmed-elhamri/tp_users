import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import {useState} from "react";
import {INITIAL_USERS} from "./data/users";
import Input from "./components/Input";

export default function App() {
    const [users, setUsers]       = useState(INITIAL_USERS);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchUser, setSearchUser]     = useState("");

    const handleDeleteUser  = id   => setUsers(prev => prev.filter(u => u.id !== id));
    const handleUserDetails = user => setSelectedUser(user);
    const handleCloseDetails   = ()   => setSelectedUser(null);

    const filteredUsers = users.filter(u => {
        const q = searchUser.toLowerCase();
        return (
            u.firstName.toLowerCase().includes(q) ||
            u.lastName.toLowerCase().includes(q)  ||
            u.email.toLowerCase().includes(q)     ||
            u.phone.includes(q)
        );
    });

    return (
        <>
            <Header />
            <main className="page">
                <div className="search-bar">
                    <Input
                        value={searchUser}
                        onChange={e => setSearchUser(e.target.value)}
                        placeholder="Search by name, email or phone..."
                        variant="primary"
                        size="md"
                    />
                </div>
                <UserTable users={filteredUsers} onDelete={handleDeleteUser} onDetails={handleUserDetails} />
            </main>
            <UserModal user={selectedUser} onClose={handleCloseDetails} />
        </>
    );
}
