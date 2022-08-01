import React from "react";
import "./Expression.css";

const Expression = () => {
  const title = "Expresstion";
  const array = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;
  return (
    <div className="expression">
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello("Hello")}</h3>
      {<h3>Hello JSX</h3>}
    </div>
  );
};

export default Expression;
