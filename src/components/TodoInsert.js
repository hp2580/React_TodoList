import React, { useEffect, useState } from "react";
import "./css/TodoInsert.css";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selected,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selected) {
      setValue(selected.text);
    }
  }, [selected]);
  return (
    <div className="toggleWrap">
      <div className="wrap">
        <div className="bg" onClick={onInsertToggle}></div>
        <form
          onSubmit={
            selected
              ? () => {
                  onUpdate(selected.id, value);
                }
              : onSubmit
          }
        >
          <input
            type="text"
            placeholder="추가할 일정을 입력하세요."
            value={value}
            onChange={onChange}
          />
          {selected ? (
            <div className="rewrite">
              <button
                type="button"
                onClick={() => onUpdate(selected.id, value)}
              >
                ✏
              </button>
              <button
                type="button"
                onClick={() => {
                  onRemove(selected.id);
                }}
              >
                🗑
              </button>
            </div>
          ) : (
            <button type="submit">+</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default TodoInsert;
