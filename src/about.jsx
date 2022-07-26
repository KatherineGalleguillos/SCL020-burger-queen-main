import { Link } from "react-router-dom";

function About() {
    return (
      <>
        <main>
          <h1>Tostado Miels</h1>
          <h2>Pasteleria y cafetería</h2>
          <p>
            ¡Bienvenidos! Esperamos que tengas un excelente turno de trabajo
          </p>
        </main>
        <nav>
          <button>
          <Link to="/">Continuar</Link>
          </button>
        </nav>
      </>
    );
  }

  export default About