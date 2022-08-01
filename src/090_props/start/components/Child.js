import "./Child.css";

const Child = ({ color = "green", num, fn, bool, obj }) => {
  return (
    <div className={`component ${color}`}>
      <h3>{fn("Props")}</h3>
      <h3>{bool ? "true" : "false"}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
