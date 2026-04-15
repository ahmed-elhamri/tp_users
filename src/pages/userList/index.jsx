import UserRow from "../userRow";

export default function UserList({ users, onDelete, onDetails }) {
    return (
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.length === 0 ? (
                <tr className="empty-row"><td colSpan={5}>No users found.</td></tr>
            ) : (
                users.map(u => (
                    <UserRow key={u.id} user={u} onDelete={onDelete} onDetails={onDetails} />
                ))
            )}
            </tbody>
        </table>
    );
}