import Meals from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

import "./Header.css"

const Header = (props) => {
  return (
    <>
      <header className="header" >
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={Meals} alt="Meals"></img>
      </div>
    </>
  )
}

export default Header
