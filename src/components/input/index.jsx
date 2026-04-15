export default function Input({ value, onChange, placeholder, type = "text", size = "md", variant }) {
    return (
        <input
            className={`input input-${size}${variant ? ` input-${variant}` : ""}`}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}