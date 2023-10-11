import { useState } from "react";
import { API_KEY } from "../static/static";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";
import { t } from "i18next";

const Weather = () => {
    const [cityName, setCityName] = useState("");
    const [weatherInfo, setWeatherInfo] = useState("");
    const [showError, setShowError] = useState(false);
    const [connectionError, setConnectionError] = useState(false);
    const getWeatherInfo = async (e) => {
        e.preventDefault();
        if (!window.navigator.onLine) {
            setConnectionError(true);
            setShowError(false);
            setWeatherInfo("");
            return
        }
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
        if (response.status === 200) {
            const data = await response.json();
            setConnectionError(false);
            setShowError(false);
            setWeatherInfo(data);
            setCityName("");
        } else {
            setConnectionError(false);
            setShowError(true);
            setWeatherInfo("");
        }
    };
    return (
        <div className="flex flex-col items-center">
            <Form onSubmit={getWeatherInfo}>
                <Input
                    placeholder="enter name of a city"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <Button className="py-1 bg-red-400" text={t("Search")} />
            </Form>
            {weatherInfo && (
                <div className="mt-4">
                    <span className="text-slate-400">name : </span>
                    <span>{weatherInfo.name}</span>
                    <br />
                    <span className="text-slate-400">temprature : </span>
                    <span>{weatherInfo.main.temp.toFixed(0) - 271}°</span>
                    <br />
                    <span className="text-slate-400">weather : </span>
                    <span>{weatherInfo.weather[0].main}</span>
                </div>
            )}
            {showError && (
                <p className="text-red-400 font-semibold mt-3">
                    An error occured, please try again
                </p>
            )}
            {connectionError && (
                <p className="text-red-400 font-semibold mt-3">
                    Check your internet connection please
                </p>
            )}
        </div>
    );
};

export default Weather;
