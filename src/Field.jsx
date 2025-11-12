export default function Field() {
  const NUM_HOLES = 9;
  const newField = Array(NUM_HOLES).fill(false);

  // Pick a random index for the mole
  let mole = Math.floor(Math.random() * NUM_HOLES);
  newField[mole] = true;

  return (
    <ul className="field">
      {newField.map((hasMole, i) => (
        <li key={i} className={`hole${hasMole ? " mole" : ""}`}></li>
      ))}
    </ul>
  );
}