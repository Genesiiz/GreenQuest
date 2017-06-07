<header id="header-documentation">
   <h1>Plantes</h1>
   <div class="nav nav-documentation">
      <form method="post">
         <label class="nav__btn nav__btn--right nav__btn--loop loop" for="searchPlante">search</label>
         <input class="search" type="text" name="searchPlante">
      </form>
   </div>
</header>

<section id="documentation">

   <div class="bg documentation">
      <div class="bg-wrapper">

         <ul class="doc">

            <li class="doc__el" ng-click="doc()" ng-repeat="plante in plantes track by $index">
               <a class="doc__el--img">
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
