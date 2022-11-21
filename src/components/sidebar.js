import { BsPlus, BsFillCloudLightningFill, BsGearFill } from "react-icons/bs";
import { FaPoo, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Divider } from "./SpacingComponents";

export const SideBar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="fixed top-0 left-0 h-screen 
      w-16 m-0 flex flex-col
     bg-gray-100 text-black shadow-lg
     dark:bg-gray-900 dark:text-white transition-color
     duration-100 ease-linear items-center"
    >
      <SideBarIcon icon={<BsPlus size={"28"} />} />
      <SideBarIcon icon={<BsFillCloudLightningFill size={"28"} />} />
      <SideBarIcon icon={<FaPoo size={"28"} />} />
      <SideBarIcon icon={<BsGearFill size={"28"} />} />
      <Divider className="divider" />
      <button
        className="btn btn-circle darkmode-toggle"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100 z-[99999]">{text}</span>
  </div>
);

export default SideBar;
