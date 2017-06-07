<?php include 'pages/head.php' ?>

<body ng-app="app" ng-controller="mainCtrl">
<!-- begin here! -->

<?php include 'pages/tabbar.php' ?>

<main ui-view></main>

<!-- connexion modale -->
<section id="connexion">
<div class="header-connexion bg-connexion">

   <h1>Connexion</h1>

</div>
<div class="bg">
   <div class="bg-wrapper_connexion">

      <img src="assets/profil/ownprofil.png">

      <p>Se connecter en tant que Nicolas Henry</p>
      <a id="connexion-btn">Connexion</a>

      <small class="subline-connexion">Déjà inscris <a>connexion</a> ou <a>créer un compte</a></small>

   </div>
</div>
</section>
<div class="connexion-shadow"></div>

<!-- ... -->

<?php include 'pages/end.php' ?>
