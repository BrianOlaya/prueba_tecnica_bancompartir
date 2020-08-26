import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import bancompartir from './img/bancompartir.png'


const Home = () => {
    return ( 
        <Fragment>
            <div className="bar">
                <img src={bancompartir} alt="logo"/>
              
                <a href="https://www.bancompartir.co/#!inicio" target="_blank" rel="noopener noreferrer"><h2>Ir a Bancompartir</h2></a>
            </div>
        
            <div className="container-users ">
            <Link to="/users" className="link-users "><h1>Ver Usuarios Registrados</h1></Link>
            </div>
      
    
        </Fragment>
     );
}
 
export default Home;