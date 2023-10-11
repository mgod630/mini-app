import { t } from "i18next";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString().split(" ")
    );
    setInterval(() => {
        setTime(new Date().toLocaleTimeString().split(" "));
    }, 1000);
    const showName = useSelector((state) => state.name.value);

    return (
        <div className="flex flex-col items-center font-semibold text-xl">
            <p>{time[0]}</p>
            <p className="mt-3">{t("Welcome")} {showName}</p>
        </div>
    );
};

export default Home;
