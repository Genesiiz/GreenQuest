<header id="header-oneprofil">
   <h1>{{profilContent.name}}</h1>
   <div class="nav nav-oneprofil">
      <a class="nav__btn nav__btn--left nav__btn--retour" ng-click="back()">Retour</a>
   </div>
</header>

<section id="oneprofil">

   <div class="bg oneprofil">
      <div class="bg-wrapper">

         <div class="padding-box">

            <img class="profil-img" ng-src="{{profilContent.img}}">
            <ul class="profil">
               <li class="profil__el profil__publi">
                  <a>
                     <span class="profil__el--title">Publi.</span>
                     <span class="profil__el--number profil__el--publi">{{profilContent.publi}}</span>
                  </a>
               </li>

               <li class="profil__el">
                  <a href="#oneabonne">
                     <span class="profil__el--title">Abonnés</span>
                     <span class="profil__el--number profil__el--abonne">{{profilContent.abonne}}</span>
                  </a>
               </li>

               <li class="profil__el">
                  <a href="#oneabo">
                     <span class="profil__el--title">Abos</span>
                     <span class="profil__el--number profil__el--abo">{{profilContent.abo}}</span>
                  </a>
               </li>

               <li class="followone">
                  <a>Suivre</a>
               </li>
            </ul>

            <p class="pseudo">{{profilContent.name}}</p>
            <p class="bio">{{profilContent.bio}}</p>
            <a class="son-potager" href="#onepotager">Son potager</a>

            <span class="separator">separator</span>

         </div>

         <ul id="oneprofilpubli" class="actu">

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.post01}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.post02}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.post03}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.post04}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.post05}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.post06}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

            <li class="actu__el">
               <a class="actu__el--img">
                  <img ng-src="{{profilContent.img}}">
               </a>
               <div class="actu__el--post">
                  <p><a>{{profilContent.name}}</a><span> {{profilContent.firstPost}}</span></p>
                  <div class="info"><small>3h</small><a>Répondre</a></div>
               </div>
            </li>

         </ul>

      </div>
   </div>

</section>
