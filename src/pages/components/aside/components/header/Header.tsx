import logo from "../../../../../../public/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="aside__header">
      <img
        className="aside__header_logo"
        src={logo}
        alt="WebSequencer"
        onClick={() => alert("bhjbh")}
      />
      <h2 className="aside__header_title">WebSequencer</h2>
    </div>
  );
};

export default Header;
