import Navbar from "components/Navbar";
import './styles.css';

// comand abaixo faz com que a imagem possa ser usado como um componente, veja a linha 17. 

import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from "components/ButtonIcon";
// forma tradicional: function Home() {
const Home = ()  => {

  return (
    <>
    <Navbar />
    <div className="home-container">
        <div className="home-card">
            <div className="home-content-container"> 
                <h1> Conheça o melhor catálogo de produto</h1>
                <p>Ajudaremos você a encontrar os melhores produtos do mercado</p>
                <ButtonIcon />
            </div>
            
            <div className="home-image-container" > 
                <MainImage />

            </div>

        </div>
    </div>

     </>
     );
 
}

export default Home;
