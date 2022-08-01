import { List } from "./List";
import "./Child.css";

const Child = () => {
  return (
    <div className="component">
      <h2>Hello Component</h2>
      <List />
    </div>
  );
};

export default Child;
