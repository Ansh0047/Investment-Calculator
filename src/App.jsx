import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {
  // Two way binding - to ensure that the state and the UI are always sync
  // this useState for managing and storing the input provided by the user
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // State Change fucntion : to update the data on the ui when user enters the input
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, // this is syntax is used to copy the data stored in the prevUserInput
        [inputIdentifier]: +newValue, // and this JS syntax is used to set the object's property value
        // and this +sign before the newValue will change the string to the integer value
      };
    });
  }

  // to check for the input of duration as it is always +ve and we will show the result when it is +ve
  const inputValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onSelect={handleChange}/>
      {inputValid ? <Results input={userInput}/> : <p className="center">Put enter the +ve duration.</p>}
    </>
  );
}

export default App;
