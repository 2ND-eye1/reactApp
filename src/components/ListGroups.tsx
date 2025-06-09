import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
// import { MouseEvent } from "react";
function ListGroups({ items, heading }: Props) {
  // this is local so it cannot be modified outside of the component
  // this means no item is selected.
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  // event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* we can use ternary operators in order to conditionally render conten */}
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {/* instead of using 'null' we can use the '&&' */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroups;
