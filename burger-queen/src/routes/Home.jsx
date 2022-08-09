import { Link } from "react-router-dom";
import image from "../images/logoCoffe.png";
import '../home.css'

const Home = () => {
  return (
    <>
      <div className="imagen">
        <img src={image}/>
      </div>

      <form className='loginForm'>
        <p className="title">¡Bienvenidos! </p >
        <p className="subtitle">Esperamos que tengas un excelente turno de trabajo</p> 

        <input 
          class = "email" 
          type="text" 
          name='email'
          placeholder="Usuario">
        </input>
        <input 
          class = "password" 
          type="password" 
          name='password'
          placeholder="Contraseña">
        </input>
        <button type = "submit" className="logIn"> <Link to="/selectRole">Iniciar Sesión</Link> </button>
        
      </form>
    </>
  );
}

  export default Home;