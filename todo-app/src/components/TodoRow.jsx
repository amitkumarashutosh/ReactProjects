import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const TodoRow = ({ text, onDelete, id }) => {
  const [hover, setHover] = useState(false);
  const [checkValue, setCheckValue] = useState(false);
  return (
    <div
      className="bg-white px-5 py-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between items-center gap-2">
        <Checkbox
          label={text}
          checked={checkValue}
          onChange={() => setCheckValue(!checkValue)}
        />
        {hover && (
          <Button size="small" onClick={() => onDelete(id)}>
            X
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoRow;
