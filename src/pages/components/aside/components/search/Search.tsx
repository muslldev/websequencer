import search from "../../assets/search.svg";
import "./search.css";

const Search = () => {
  return (
    <div className="aside__search">
      <label className="aside__search_image" htmlFor="aside__search_input">
        <img src={search} alt="Search" />
      </label>
      <input type="text" name="search_input" id="aside__search_input" />
    </div>
  );
};

export default Search;
