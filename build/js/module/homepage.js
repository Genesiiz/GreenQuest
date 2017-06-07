app.controller('homepage', function($scope, sharedProperties, myService, $location) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.documentation.classList.remove('active');
   $scope.potager.classList.remove('active');
   $scope.profil.classList.remove('active');

   $scope.home.classList.add('active');


   //weather
   var weather = document.getElementById('weather');
   var home = document.getElementById('home');
   var headerHome = document.getElementById('header-home');
   var navHome = document.getElementsByClassName('nav-home')[0];
   var navHomeReturn = document.getElementsByClassName('nav-home')[0].childNodes[1];


   weather.addEventListener("click", getAdvice);

   function getAdvice() {
      headerHome.classList.add('advice-actived');
      home.classList.add('advice-actived');
      navHome.classList.add('advice-actived');
   };

   navHomeReturn.addEventListener("click", removeAdvice);

   function removeAdvice() {
      navHome.classList.remove('advice-actived');
      home.classList.remove('advice-actived');
      headerHome.classList.remove('advice-actived');
   };


   //add the profil content to the page oneprofil.php
   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.getProfils();

   $scope.profil = function(index) {

      var value = $($('.actu__el--post')[index]).find('a').html();

      for(var i = 0; i < $scope.profils.length; i++) {
         if(value === $scope.profils[i].name) {
            var name = $scope.profils[i].name;
            var img = $scope.profils[i].img;
            var bio = $scope.profils[i].bio;
            var publi = $scope.profils[i].publi;
            var abonne = $scope.profils[i].abonne;
            var abo = $scope.profils[i].abo;
            var post01 = $scope.profils[i].post01;
            var post02 = $scope.profils[i].post02;
            var post03 = $scope.profils[i].post03;
            var post04 = $scope.profils[i].post04;
            var post05 = $scope.profils[i].post05;
            var post06 = $scope.profils[i].post06;
         }
      }

      myService.profilContentUpdate(name, img, bio, publi, abonne, abo, post01, post02, post03, post04, post05, post06);
      $location.path('/oneprofil');
   };

});
