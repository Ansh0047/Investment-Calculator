import { useState } from "react"


export default function UserInput(){
    // Two way binding
    // this useState for managing and storing the input provided by the user
    const [userInput,setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    // to update the data on the ui when user enters the input
    function handleChange(inputIdentifier, newValue){
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,            // this is syntax is used to copy the data stored in the prevUserInput
                [inputIdentifier]: newValue    // and this JS syntax is used to set the object's property value 
            }
        });
    }

    return <form id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required onChange={(event) => handleChange('initialInvestment',event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required />
            </p>
        </div>
    </form>
}