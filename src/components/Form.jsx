import classNames from "classnames";

const Form = ({ onSubmit, className, children }) => {
    return (
        <form
            onSubmit={onSubmit}
            className={classNames("border rounded-md bg-white", className)}
        >
            {children}
        </form>
    );
};
export default Form;
