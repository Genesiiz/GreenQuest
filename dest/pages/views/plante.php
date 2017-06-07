<header id="header-plante">
   <h1>Plante</h1>
   <div class="nav nav-plante">
      <a class="nav__btn nav__btn--left nav__btn--retour" ng-click="back()">retour</a>
      <a class="nav__btn nav__btn--right nav__btn--add">ajouter</a>
   </div>
</header>

<section id="plante">

   <div class="bg plante">
      <div class="bg-wrapper">

         <div class="padding-box">

            <img src="{{planteContent.img}}">
            <h2>{{planteContent.name}}</h2>
            <h3>{{planteContent.title01}}</h3>
            <p>{{planteContent.para01}}</p>
            <h3>{{planteContent.title02}}</h3>
            <p>{{planteContent.para02}}</p>
            <h3>{{planteContent.title03}}</h3>
            <p>{{planteContent.para03}}</p>
            <h3>{{planteContent.title04}}</h3>
            <p>{{planteContent.para04}}</p>

         </div>

      </div>
   </div>

</section>

<div class="modale">
      <div class="modale-wrapper">

         <div class="modale__el modale__el--up">
            <img src="{{planteContent.img}}">
            <p>Ajouter <span id="modale-title">{{planteContent.name}}</span> à votre potager ?</p>
            <span class="separator"></span>
            <a class="modale-btn modale-btn__add">Ajouter</a>
         </div>
         <div class="modale__el modale__el--down">
            <a class="modale-btn modale-btn__annule">Annuler</a>
         </div>

      </div>
</div>
