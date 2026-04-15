import Button from "../../components/button";

export default function Header() {
    return (
        <header className="header">
            <span>Users</span>
            <div className="header-actions">
                <Button variant="ghost" size="sm">Home</Button>
                <Button variant="ghost" size="sm">Logout</Button>
            </div>
        </header>
    );
}