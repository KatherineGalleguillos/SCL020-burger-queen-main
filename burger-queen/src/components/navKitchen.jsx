import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import salir from '../images/salir.png'
import logoCoffe from '../images/logoCoffe.png'
import './navbar.css'


const NavKitchen = () => {

    const ClickSalir = () => {

        }
   
    return(
        <div className="navbarContainer">
            <img src={logoCoffe} alt="logo" className="logo"></img>
            <NavLink to="/deliver">Pedidos para entregar</NavLink>
            <NavLink to="/">Salir</NavLink>

        </div>
    )
}
export default NavKitchen