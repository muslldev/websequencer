import "./project.css";
const Project = () => {
  return (
    <div className="menu__projects_item">
      <div
        style={{
          background: "teal",
          width: 343,
          height: 228,
          borderRadius: "20px 20px 0 0",
        }}
      ></div>
      <p className="menu__projects_item-title">Musical synthetic composition</p>
      <div className="menu__projects_item-topics">
        <button className="menu__projects_item-topic">Synthwave</button>
        <button className="menu__projects_item-topic">Techno</button>
      </div>
    </div>
  );
};

export default Project;
