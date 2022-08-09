import '../selectRole.css'
import { Link } from "react-router-dom";
import image from "../images/1.png";
import images from "../images/2.png";

const SelectRole = () => {

    return (
      
        <main>
          <section className='rol'>
            <h1>Selecciona tu rol</h1>
          </section>
          <section className='mesero'>
            <img className="image" src={image}/>
            <button class="btnMesero">
            <Link to="/takeOrder">Mesero</Link>
            </button> 
          </section>
          <section className='chef'>
            <img className="images" src={images} />
            <button class="btnChef">
              <Link to="/kitchen">Chef</Link>
            </button>
          </section>
        </main>
      
    );
  };
  
  export default SelectRole