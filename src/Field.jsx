import { useGame } from "./GameContext";

export default function Field() {
  const { restart, handleWhack } = useGame();

  const NUM_HOLES = 9;
  const newField = Array(NUM_HOLES).fill(false);

  // Pick a random index for the mole
  let mole = Math.floor(Math.random() * NUM_HOLES);
  newField[mole] = true;

  return (
    <>
    <button className="restart" onClick={restart}>Restart</button>
    <ul className="field">
      
      {newField.map((hasMole, i) => (
        <li 
        key={i} 
        className={`hole${hasMole ? " mole" : ""}`}
        onClick={() =>{
          if (hasMole) {
            handleWhack();
          }
        }}
        ></li>
      ))}
    </ul>
    </>
  );
  }
