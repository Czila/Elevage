
import React from 'react';
import 'bulma/css/bulma.min.css';


function Navbar (){
    return(
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Accueil
      </a>

      <a class="navbar-item">
        Mon élevage
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Mes chats
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Liste de mes chats
          </a>
          <a class="navbar-item">
            Ajouter un chat
          </a>
          <a class="navbar-item">
            Supprimer un chat
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Inscrivez vous</strong>
          </a>
          <a class="button is-light">
            Connectez vous
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

)
};

export default Navbar;