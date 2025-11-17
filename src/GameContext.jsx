import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

function startGame() {
  setShowWelcome(false);
}

function restart() {
  setShowWelcome(true);
  setScore(0);

}

function handleWhack() {
    setScore(prev => prev + 1);
  }

  const value = {
    score,
    showWelcome,
    startGame,
    restart,
    handleWhack,
  };

  // 🧠 We return a provider that WRAPS your whole app
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("Game context must be used within GameProvider.");
  return context;
}


// 1. Create the context
// 2. Wrap provider around children
// 3. Hold state for score, mole position, and gameActive
// 4. Define startGame(), whackMole(), restartGame()
// 5. Return <GameContext.Provider value={{ ... }}>children</GameContext.Provider>
