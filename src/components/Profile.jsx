import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUsername } from "../feature/username/usernameSlice";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationFA from "../locales/fa/translation.json";

const resources = {
    en: {
        translation: translationEN,
    },
    fa: {
        translation: translationFA,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("language"),
    fallbackLng: localStorage.getItem("language"),
    interpolation: {
        escapeValue: false,
    },
});
function Profile({ editTheme }) {
    if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", false);
    }
    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "en");
    }
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [showName, setShowName] = useState(
        useSelector((state) => state.name.value)
    );
    const editName = (e) => {
        e.preventDefault();
        setShowName(username);
        dispatch(editUsername(username));
        setUsername("");
    };
    const change = () => {
        if (localStorage.getItem("darkMode") === "false") {
            localStorage.setItem("darkMode", "true");
        } else {
            localStorage.setItem("darkMode", "false");
        }
        editTheme();
    };
    const handleLanguageChange = (e) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };
    return (
        <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">
                {t("Username")} : {showName}
            </p>
            <Button
                onClick={change}
                text={`${
                    localStorage.getItem("darkMode") === "true"
                        ? t("LightMode")
                        : t("DarkMode")
                }`}
                className="bg-slate-500 text-white py-1 my-3"
            />
            {/* <label class="relative inline-flex items-center cursor-pointer my-3">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Dark Mode
                </span>
            </label> */}
            <select
                className="mb-3 border py-1 px-2 rounded-md outline-none cursor-pointer text-slate-600"
                value={i18n.language}
                onChange={handleLanguageChange}
            >
                <option value="en">{t("English")}</option>
                <option value="fa">{t("Farsi")}</option>
            </select>
            <Form onSubmit={editName}>
                <Input
                    placeholder="edit your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Button text={t("Submit")} className="bg-green-500 py-1" />
            </Form>
        </div>
    );
}

export default Profile;
