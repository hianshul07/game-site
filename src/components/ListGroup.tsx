import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ({items, heading}: Props) => {
  const [selIndex, setSelIndex] = useState(0)
  return (
    <>
      <h1>{heading}</h1>
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              setSelIndex(index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
