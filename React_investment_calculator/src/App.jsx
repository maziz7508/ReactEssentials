import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newVlaue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newVlaue,
      };
    });
  }
  return (
    // <h1>React Investment Calculator</h1>
    <>
      <Header />
      <UserInput userInputObject={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
