import { React, useState} from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbargeneral = () => {
    const [navbar, setNavbbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY > 10) {
            setNavbbar(true)
        } else {
            setNavbbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? "nav-bar p-3 active" : "nav-bar p-3"}>
            <div className="container">
                <Link to="/">
                    <h2>Placehack</h2>
                </Link>
            </div>
        </nav>
    )
}

export default Navbargeneral