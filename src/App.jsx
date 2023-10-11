import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Todo from "./components/Todo";
import Weather from "./components/Weather";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
    const editTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", !darkMode);
    };
    return (
        <div
            className={`lg:w-1/2 w-5/6 mx-auto mt-14  ${
                darkMode ? "bg-slate-600 text-white" : "bg-white"
            }`}
        >
            <header className="border border-slate-500 text-center py-1">
                App Bar
            </header>
            <div className="flex border border-slate-500">
                <Navbar />
                <section className="w-full h-full my-10">
                    <Routes className="p-3">
                        <Route path="/" element={<Home />}>
                            Home
                        </Route>
                        <Route path="/todo" element={<Todo />}>
                            Todo
                        </Route>
                        <Route path="/weather" element={<Weather />}>
                            Weather
                        </Route>
                        <Route
                            path="/profile"
                            element={<Profile editTheme={editTheme} />}
                        >
                            Profile
                        </Route>
                    </Routes>
                </section>
            </div>
        </div>
    );
}

export default App;
