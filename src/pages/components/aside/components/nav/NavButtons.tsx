import home from "../../assets/home.svg";
import project from "../../assets/music.svg";
import community from "../../assets/community.svg";
import "./nav.css";

const NavButtons = () => {
  return (
    <div className="aside__nav">
      <button className="aside__nav_item">
        <img src={home} alt="Home" />
        <p className="aside__nav_item-title">Главная</p>
      </button>
      <button className="aside__nav_item">
        <img src={project} alt="Projects" />
        <p className="aside__nav_item-title">Свои проекты</p>
      </button>
      <button className="aside__nav_item">
        <img src={community} alt="Community" />
        <p className="aside__nav_item-title">Сообщество</p>
      </button>
    </div>
  );
};

export default NavButtons;
