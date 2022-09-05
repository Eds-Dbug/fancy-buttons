import {useState} from "react";

function AngryButton () {
  const [anger, setAnger] = useState(0);

  const handleClick = () => {
    if(anger > 1) {
      setAnger(0);
    }else {
      setAnger(anger + 0.1);
    }
  }

  return (
    <button onClick={handleClick} className="AngryButton" style={{backgroundColor: `rgba(255,0,0,${anger})`}}>
      {anger > 1 && <span>Don't click me too much! </span>}
      {anger < 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;