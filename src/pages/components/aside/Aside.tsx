import "./aside.css";
import Header from "./components/header/Header";
import NavButtons from "./components/nav/NavButtons";
import Search from "./components/search/Search";
import User from "./components/user/User";

const Aside = () => {
  return (
    <div className="aside">
      <Header />
      <Search />
      <NavButtons />
      <User />
    </div>
  );
};

export default Aside;
