<header id="header-mypotageradd">
   <h1>Plantes</h1>
   <div class="nav nav-mypotageradd">
      <a class="nav__btn nav__btn--left nav__btn--retour" ng-click="back()">retour</a>
      <form method="post">
         <label class="nav__btn nav__btn--right nav__btn--loop loop" for="searchPlante">search</label>
         <input class="search" type="text" name="searchPlante">
      </form>
   </div>
</header>

<section id="mypotageradd">

   <div class="bg mypotageradd">
      <div class="bg-wrapper">

         <ul class="doc">

            <li class="doc__el" ng-click="doc()" ng-repeat="plante in plantes track by $index">
               <a class="doc__el--img" href="">
                  <img ng-src="{{plante.img}}">
               </a>
               <div class="doc__el--plante">
                  <p><a>{{plante.name}}</a></p>
               </div>
            </li>

         </ul>

      </div>
   </div>

</section>
