
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';


function Navbar (){
    return(
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">

    <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </Link>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <Link to='/homepage' className="navbar-item" >
        Accueil
      </Link>

      <Link to='/monelevage' className="navbar-item">
        Mon élevage
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <Link to='/meschats' className="navbar-link">
          Mes chats
        </Link>

        <div className="navbar-dropdown">
          <Link to='/listcats' className="navbar-item">
            Liste de mes chats
          </Link>
          <Link to='/newcat' className="navbar-item">
            Ajouter un chat
          </Link>
          <Link to='/deletecat' className="navbar-item">
            Supprimer un chat
          </Link>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link className="button is-primary">
            <strong>Inscrivez vous</strong>
          </Link>
          <Link className="button is-light">
            Connectez vous
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>

)
};

export default Navbar;