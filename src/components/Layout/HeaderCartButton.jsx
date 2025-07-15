import CartIcon from "../Cart/CartIcon"

import "./HeaderCartButton.css"

function HeaderCartButton(props) {

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon"><CartIcon /></span>
      <span>Your Cart</span>
      <span className="badge">6</span>
    </button>
  )
}

export default HeaderCartButton
