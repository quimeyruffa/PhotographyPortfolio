import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header
      className="
      fixed w-full px-[30px] lg:px-[100px]
      z-30 h-[100px]
    lg:h-[140px] flex items-center"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="flex flex-col lg:flex-row lg:first-line:items-center w-full justify-between"
      >
        <Link to={"/"} className="max-[200px]">
          <img src={Logo} alt="" />
        </Link>
        <nav
          className="hidden lg:flex gap-x-12 items-center"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
