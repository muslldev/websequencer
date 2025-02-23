import Aside from "./components/aside/Aside";
import Menu from "./components/menu/Menu";
import "./page.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <Aside />
      <Menu />
    </div>
  );
};

export default MainPage;
