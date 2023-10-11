import { NavLink } from "react-router-dom";

const NavbarItem = ({ to, text, classname }) => {
    return (
        <NavLink to={to} className={classname}>
            {text}
        </NavLink>
    );
};

export default NavbarItem;
