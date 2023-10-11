import classNames from "classnames";

const Button = ({ text, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(className, "text-white rounded-md px-2")}
        >
            {text}
        </button>
    );
};

export default Button;
