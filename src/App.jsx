import "./index.css"
import Welcome from "./Welcome";
import Field from "./Field";
import { useGame } from "./GameContext";
 



export default function App() {
  const {showWelcome}= useGame();
  const {startGame} = useGame();
  const {restart} = useGame();
  const {handleWhack} = useGame();
  const {score} = useGame();

  return (
    <div>
      <h1 className="header">Whack-a-Mole</h1>
      <p className="header score-card">Score: {score} </p>
      {showWelcome ? (<Welcome startGame={startGame} />):(<Field onWhack={handleWhack} restart={restart} />)}
      
    </div>
  );  
}