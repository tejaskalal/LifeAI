import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { AiOutlineFileText } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (option) => {
    setActiveComponent(option);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Dashboard />;
      case "login":
        return <Login />;
      case "about":
        return <About />;
      case "conditions":
        return <Conditions />;
      case "support":
        return <Support />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="nav-container">
        <FaRegUser onClick={() => handleClick("profile")} />
        <FiLogIn onClick={() => handleClick("login")} />
        <FcAbout onClick={() => handleClick("about")} />
        <AiOutlineFileText onClick={() => handleClick("conditions")} />
        <MdSupportAgent onClick={() => handleClick("support")} />
      </div>

      <div className="content-area">{renderComponent()}</div>
    </>
  );
};

export default Navbar;
