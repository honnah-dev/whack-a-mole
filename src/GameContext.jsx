import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);

  const addToScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <GameContext.Provider value={{ score, addToScore }}>
      {children}
    </GameContext.Provider>
  );
  
}

export function useGame() {
  return useContext(GameContext);
}
