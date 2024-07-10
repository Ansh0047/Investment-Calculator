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
        [inputIdentifier]: newValue, // and this JS syntax is used to set the object's property value
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onSelect={handleChange}/>
      <Results input={userInput}/>
    </>
  );
}

export default App;
