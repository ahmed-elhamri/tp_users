export default function Button({ children, onClick, variant = "primary", size = "md" }) {
    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}