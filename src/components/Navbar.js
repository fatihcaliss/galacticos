"use client"; // This is a client component
import { BiFootball } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { useEffect, useState } from "react";

const Navbar = () => {
    
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "light" ? "dark" : "light"
    );

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className="w-full bg-white dark:bg-slate-900 flex p-4  items-center justify-between fixed z-50 opacity-75">
            <div className="inline-flex space-x-2 hover:cursor-pointer ">
                <div className="w-auto">
                    <BiFootball size={"2rem"} color={`${theme === "light" ? "white" : "black"}`} />
                </div>
                <span className="hidden md:block text-slate-900 dark:text-slate-100 font-bold text-2xl">Galacticos</span>
            </div>
            <ul className=" md:flex space-x-4 dark:text-slate-100 text-slate-900">
                <li className="px-4 py-2 hover:cursor-pointer" aria-label='theme-icon' onClick={changeTheme} >{theme === "light" ? <FiSun size={"2rem"} /> : <MdDarkMode size={"2rem"} />}</li>
            </ul>
        </nav>
    )
}

export default Navbar