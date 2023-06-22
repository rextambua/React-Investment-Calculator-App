import React, {useState} from "react";
import Header from "./Components/Header";
import FormInput from "./Components/FormInput";
import InvestmentItem from "./Components/InvestmentItem";

function App() {
    const [userInput, setuserInput]=useState(null)

  const saveInputData = (userInput) =>{
      setuserInput(userInput);
  }

    const yearlyData = [];
    if (userInput) {
   let currentSavings = +userInput['current-savings'];
   const yearlyContribution = +userInput['yearly-contribution'];
   const expectedReturn = +userInput['expected-return'] / 100;
   const duration = +userInput['duration'];

   for (let i = 0; i < duration; i++) {
     const yearlyInterest = currentSavings * expectedReturn;
     currentSavings += yearlyInterest + yearlyContribution;
     yearlyData.push({
       // feel free to change the shape of the data pushed to the array!
       year: i + 1,
       yearlyInterest: yearlyInterest,
       savingsEndOfYear: currentSavings,
       yearlyContribution: yearlyContribution,
     });
   }

 }

  return (
    <div>
        <Header/>
        <FormInput onSaveInputData={saveInputData}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {!userInput && <p style={{textAlign:"center"}}>No investment calculated yet</p>}
      {userInput && <InvestmentItem data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
