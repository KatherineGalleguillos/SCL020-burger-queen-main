import { Link } from "react-router-dom";


function Chef() {
    return (
      <>
        <main>
          <h1>Tostado Miel</h1>
          <h2>¡Bienvenido Chef!</h2>
          <section>
          <button class="btnChefVolver">
          <Link to="/about">Volver al menú</Link>
          </button>
          </section>
        </main>
      </>
    );
  }
  
  export default Chef