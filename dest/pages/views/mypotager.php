<header id="header-mypotager">
   <h1>Mon potager</h1>
   <div class="nav nav-mypotager">
      <a class="nav__link nav__link--left">Modifier</a>
      <a class="nav__btn nav__btn--right nav__btn--add" href="#mypotageradd">ajouter</a>
   </div>
</header>

<section id="mypotager">

   <div class="bg mypotager">
      <div class="bg-wrapper">

         <ul id="potager" class="potager">

            <li class="potager__el" ng-click="potagerEl()" ng-repeat="plante in myPlantes track by $index" on-finish-load="ngRepeatFinished">
               <div class="swipe">
                  <span class="selector">selector</span>
                  <a class="potager__el--img">
                     <img ng-src="{{plante.img}}">
                  </a>
                  <div class="potager__el--plante">
                     <p>
                        <a>{{plante.name}}</a><br>
                        <small>{{plante.hour}}</small>
                     </p>
                  </div>
               </div>
               <div class="suppress" ng-click="suppress(); $event.stopPropagation();">Supprimer</div>
            </li>

         </ul>

      </div>
   </div>

</section>
<div class="tab-modif">
   <a class="tab-modif__el tab-modif__el--left" ng-click="allSelected()">Tout selectionner</a>
   <a class="tab-modif__el tab-modif__el--right" ng-click="delete()">Supprimer</a>
</div>
