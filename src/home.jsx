import { Link } from "react-router-dom";
import image from "./images/1.png";
import images from "./images/2.png";

/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)*/



function Home() {
    return (
      <>
        <main>
          <h1>Selecciona tu rol</h1>
          <section>
          <div>
           <img src={image}/>
           </div>
          <button class="btnMesero">Mesero</button> </section>
          <section>
          <div>
           <img src={images}/>
           </div>
          <button class="btnChef">
          <Link to="/about">Chef</Link>
          </button>
          </section>
        </main>
      </>
    );
  }
  
  export default Home