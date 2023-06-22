import React, {useState} from "react";
import classes from "./FormInput.module.css";

const initialInput = {
    'current-savings' :10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}

function FormInput(props){
    const [input, setInput] = useState(initialInput)

    function resetHandler(event){
       setInput(initialInput)
    }
    function inputChangeHandler(input, value){
        setInput((prevInput)=>{
            return{
                ...prevInput,
                [input]:+value,
            }
        })
    }

    function formSubmitHandler(event){
        event.preventDefault()
        props.onSaveInputData(input)
    }

    return(
        <div>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <div className={classes['input-group']}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input onChange={(event)=>
                            inputChangeHandler("current-savings", event.target.value)}
                               value={input['current-savings']} type="number" id="current-savings" />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input onChange={(event)=>
                            inputChangeHandler("yearly-contribution", event.target.value)}
                               value={input['yearly-contribution']} type="number" id="yearly-contribution" />
                    </p>
                </div>
                <div className={classes['input-group']}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input onChange={(event)=>
                            inputChangeHandler("expected-return", event.target.value)}
                               value={input['expected-return']} type="number" id="expected-return" />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input onChange={(event)=>
                            inputChangeHandler("duration", event.target.value)}
                               value={input['duration']} type="number" id="duration" />
                    </p>
                </div>
                <p className={classes.actions}>
                    <button type="reset" onClick={resetHandler}  className={classes.buttonAlt}>
                        Reset
                    </button>
                    <button type="submit" className={classes.button}>
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    )
}

export default FormInput;