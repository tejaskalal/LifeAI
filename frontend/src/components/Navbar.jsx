import { FiLogIn } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { AiOutlineFileText } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <FaRegUser />
      <FiLogIn />
      <FcAbout />
      <AiOutlineFileText />
      <MdSupportAgent />
    </div>
  );
};

export default Navbar;
