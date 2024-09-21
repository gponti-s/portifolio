import { useState } from "react";
import "../Style.css";

function ListGroup({
  title,
  subtitle,
  selectedItem,
  setSelectedItem,
  items,
  handleClickItem,
}) {
  return (
    <>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <br></br>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              selectedItem === item
                ? "list-group-item active list-group-item-secondary"
                : "list-group-item list-group-item-action list-group-item-secondary"
            }
            key={item}
            onClick={() => {
              handleClickItem(item);
              setSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
