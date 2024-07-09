import { useState } from "react"


export default function UserInput(){
    const [userInput,setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    return <form id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment}/>
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