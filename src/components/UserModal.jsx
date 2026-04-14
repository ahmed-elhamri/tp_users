function UserModal({ user, onClose }) {
    if (!user) return null;
    const userDetails = [
        ["First Name", user.firstName],
        ["Last Name",  user.lastName],
        ["Email",      user.email],
        ["Phone",      user.phone],
    ]
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-title">User Details</span>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                {userDetails.map(([label, value]) => (
                    <div className="modal-field" key={label}>
                        <div className="modal-label">{label}</div>
                        <div className="modal-value">{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserModal;