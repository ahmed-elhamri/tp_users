import UserRow from "./UserRow";

function UserTable({ users, onDelete, onDetails }) {
    return (
        <div className="table-wrapper">
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
        </div>
    );
}

export default UserTable;