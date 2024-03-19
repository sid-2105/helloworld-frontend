import React from "react";
import "./Card.css";

const Card = (props) => {
  const { Title, List} = props;
  return (
    <div className="Card">
      <span className={`Card_title`}>
        <h3>{Title}</h3>
      </span>
      <div className="Card_list">
        <ul>
          {List.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
