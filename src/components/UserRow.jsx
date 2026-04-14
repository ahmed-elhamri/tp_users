function UserRow({ user, onDelete, onDetails }) {
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <button className="btn-details" onClick={() => onDetails(user)}>Details</button>
                <button className="btn-delete"  onClick={() => onDelete(user.id)}>Delete</button>
            </td>
        </tr>
    );
}
export default UserRow;