import { Link } from "react-router-dom";

function Home() {
    return (
      <>
        <main>
          <h1>Selecciona tu rol</h1>
          <section>
          <p>aca va el icono del mesero</p>
          <button class="btnMesero">Mesero</button> </section>
          <section>
          <p>aca va el icono del chefcle</p>
          <button class="btnChef">
          <Link to="/about">Chef</Link>
          </button>
          </section>
        </main>
      </>
    );
  }
  
  export default Home