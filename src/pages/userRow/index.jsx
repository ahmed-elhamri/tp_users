import Button from "../../components/button";

export default function UserRow({ user, onDelete, onDetails }) {
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <div className="row-actions">
                    <Button variant="primary" size="sm" onClick={() => onDetails(user)}>Details</Button>
                    <Button variant="danger" size="sm" onClick={() => onDelete(user.id)}>Delete</Button>
                </div>
            </td>
        </tr>
    );
}