import NavbarItem from "./NavbarItem";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const activeLink = `font-semibold ${
        localStorage.getItem("darkMode") === "true"
            ? "text-white"
            : "text-black"
    } `;
    return (
        <section
            className={`border-r-2 text-slate-400 border-slate-500 flex flex-col p-31 w-24 p-3 ${
                localStorage.getItem("language") === "fa"
                    ? "text-right"
                    : "text-left"
            }`}
        >
            <NavbarItem
                to="/"
                text={t("Home")}
                classname={({ isActive }) => (isActive ? activeLink : "")}
            />
            <NavbarItem
                to="/todo"
                text={t("Todo")}
                classname={({ isActive }) => (isActive ? activeLink : "")}
            />
            <NavbarItem
                to="/weather"
                text={t("Weather")}
                classname={({ isActive }) => (isActive ? activeLink : "")}
            />
            <NavbarItem
                to="/profile"
                text={t("Profile")}
                classname={({ isActive }) => (isActive ? activeLink : "")}
            />
        </section>
    );
};
export default Navbar;
