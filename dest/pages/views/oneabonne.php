<header id="header-oneabonne">
   <h1>Abonné(e)s</h1>
   <div class="nav nav-oneabonne">
      <a class="nav__btn nav__btn--left nav__btn--retour" ng-click="back()">retour</a>
   </div>
</header>

<section id="oneabonne">

   <div class="bg oneabonne">
      <div class="bg-wrapper">

         <ul class="personnes">

            <li class="personnes__el" ng-click="getProfil(00)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil07.png">
               </span>
               <div class="personnes__el--info">
                  <p>Nathan Bourgon</p>
                  <a class="follow" ng-click="follow(00); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(01)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil04.png">
               </span>
               <div class="personnes__el--info">
                  <p>Christian Williems</p>
                  <a class="follow" ng-click="follow(01); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(02)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil05.png">
               </span>
               <div class="personnes__el--info">
                  <p>Denis peeters</p>
                  <a class="follow" ng-click="follow(02); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(03)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil08.png">
               </span>
               <div class="personnes__el--info">
                  <p>Carla Jacobs</p>
                  <a class="follow" ng-click="follow(03); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(04)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil02.png">
               </span>
               <div class="personnes__el--info">
                  <p>Guillaume Devin</p>
                  <a class="follow" ng-click="follow(04); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(05)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil04.png">
               </span>
               <div class="personnes__el--info">
                  <p>Christian Williems</p>
                  <a class="follow" ng-click="follow(05); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(06)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil03.png">
               </span>
               <div class="personnes__el--info">
                  <p>Elise Norman</p>
                  <a class="follow" ng-click="follow(06); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(07)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil01.png">
               </span>
               <div class="personnes__el--info">
                  <p>Kevin Darelle</p>
                  <a class="follow" ng-click="follow(07); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

            <li class="personnes__el" ng-click="getProfil(08)">
               <span class="personnes__el--img">
                  <img src="assets/profil/profil06.png">
               </span>
               <div class="personnes__el--info">
                  <p>Eva Janssens</p>
                  <a class="follow" ng-click="follow(08); $event.stopPropagation();">Suivre</a>
               </div>
            </li>

         </ul>

      </div>
   </div>

</section>
