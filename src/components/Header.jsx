import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header>
            <div class="container">
                <button class="bg-primary text-white px-4 py-2 rounded-md">Say Hello</button>
                <h1>Munamii Cakery</h1>
                <img src={logo} alt="Munamii Cakery Logo" />
            </div>
            <div>
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;