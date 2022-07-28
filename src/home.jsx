import { Link } from "react-router-dom";
import image from "./images/1.png";
import images from "./images/2.png";


function Home() {
    return (
      <>
        <main>
          <h1>Selecciona tu rol</h1>
          <section>
          <img className="image" src={image}/>
          <button class="btnMesero">Mesero</button> </section>
          <section>
          <img className="images" src={images}/>
          <button class="btnChef">
          <Link to="/chef">Chef</Link>
          </button>
          </section>
        </main>
      </>
    );
  }
  
  export default Home