const Input = ({ placeholder, value, onChange }) => {
    return (
        <input
            className="py-1 px-2 text-slate-600 outline-slate-400"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
