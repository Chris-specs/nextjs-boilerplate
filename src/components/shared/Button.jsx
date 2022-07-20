
const Button = ({ children, type, className, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full block bg-[#353535] text-sm font-light text-focusable py-3.5 rounded-2xl ${className}`}
        >
            {children}
        </button>
    )
}

export default Button