import Button from "./Button";
import { useEffect, useState } from "react";

export default function UserModal({ user, onClose }) {
    if (!user) return null;

    const userDetails = {
        "First Name": user.firstName,
        "Last Name": user.lastName,
        "Email": user.email,
        "Phone": user.phone,
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-title">User Details</span>
                    <Button onClick={onClose}>×</Button>
                </div>

                {Object.entries(userDetails).map(([label, value]) => (
                    <div className="modal-field" key={label}>
                        <div className="modal-label">{label}</div>
                        <div className="modal-value">{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}