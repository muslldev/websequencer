import arrow from "../../assets/arrow.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="menu__header">
      <div className="menu__select">
        <h2 className="menu__select_title">Недавние</h2>
        <div className="menu__select_sort">
          <p className="menu__select_sort-title">Сортировать:</p>
          <div className="menu__select_sort-options">
            <p className="menu__select_sort-options--title">Недавние</p>
            <img src={arrow} alt="Arrow Down" />
          </div>
        </div>
      </div>
      <button className="menu__project-btn">Новый проект</button>
    </div>
  );
};

export default Header;
