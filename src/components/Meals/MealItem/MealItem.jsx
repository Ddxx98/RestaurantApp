import { useContext } from "react"
import "./MealItem.css"
import CartContext from "../../../store/cart-context"
import MealItemForm from "./MealItemForm"

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
