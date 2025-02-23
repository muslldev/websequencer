import "./user.css";
import user from "../../assets/profile.svg";

const User = () => {
  return (
    <div className="aside__user">
      <button className="aside__user_btn">
        <img style={{ width: 40, height: 40 }} src={user} alt="User" />
        <h4 className="aside__user_name">Твой псевдоним</h4>
      </button>
    </div>
  );
};

export default User;
