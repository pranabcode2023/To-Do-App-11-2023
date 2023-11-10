import React from "react";
import "../styles/styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter what you want to do "
        className="input__box"
      />

      <button className="input_submit" type="submit">
        Enter
      </button>
    </form>
  );
};

export default InputField;
