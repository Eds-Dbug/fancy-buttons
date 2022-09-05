import {useState} from "react";

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  };

  const arr = [];
  for(let i = 0; i < repetitions; i++) {
    arr.push(<span key={i}>I like this text</span>);
  }

  return(
    <button onClick={handleClick} className="TextRepeaterButton">
      {arr}
    </button>
  );
}

export default TextRepeaterButton;