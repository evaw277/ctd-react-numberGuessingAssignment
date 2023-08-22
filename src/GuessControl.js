import { useState } from "react";
import Button from "./Button.js";

export default function GuessControl(props) {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    props.onGuess(Number(currentGuess));
    setCurrentGuess("");
  };
  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}
