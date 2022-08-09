import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import salir from '../images/salir.png'
import logoCoffe from '../images/logoCoffe.png'
import './navbar.css'


const Navbar = () => {

    const ClickSalir = () => {

        }
   
    return(
        <div className="navbarContainer">
            <img src={logoCoffe} alt="logo" className="logo"></img>
            <NavLink to="/takeOrder">
                <select name="nuevaOrden" id="nuevaOden">
                    <option value="seleccion" selected> Tomar Pedido</option>
                    <option value="cafeteria">Cafetería</option>
                    <option value="pasteleria">Pastelería</option>
                </select>
            </NavLink>
            
            <NavLink to="/deliver">Pedidos para entregar</NavLink>
            <img src={salir} alt="salir" onClick={ClickSalir} className="salir" to="/"></img>

        </div>
    )
}
export default Navbar