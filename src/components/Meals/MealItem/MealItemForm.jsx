import { useRef, useState } from "react"

import "./MealItemForm.css"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setAmountIsValid(false)
        return
    }
    props.onAddCart(enteredAmountNumber)

  }
  return (
    <form className='form' onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{type: "number", id: "amount", min: "1", max: "5", step: "1", defaultValue: "1"}} />
        <button type="submit">+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm