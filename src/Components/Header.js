import logo from "../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";

function Header(){
    return(
        <div className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header;