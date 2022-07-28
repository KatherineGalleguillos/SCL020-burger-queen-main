import { Link } from "react-router-dom";
import image from "../images/logo.png";

const Home = () => {
    return (
      <>
        <main>
          <div>
            <img src={image}/>
          </div>
          <p>
            ¡Bienvenidos! Esperamos que tengas un excelente turno de trabajo
          </p>
        </main>
        <nav>
          <button>
          <Link to="/selectRole">Continuar</Link>
          </button>
        </nav>
      </>
    );
  }

  export default Home;