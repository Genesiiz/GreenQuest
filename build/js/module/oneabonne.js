app.controller('oneabonne', function($scope, $location, sharedProperties, myService) {

   $scope.follow = function(index) {

      var $thisIt = $('.follow:eq('+index+')');

      $thisIt.toggleClass('active');

      if($thisIt.hasClass('active')) {
         $thisIt.html('Abonné(e)s');
      } else {
         $thisIt.html('Suivre');
      }
   };


   //add the profil content to the page oneprofil.php
   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.getProfils();

   $scope.getProfil = function(index) {
      var $thisIt = $('.personnes__el--info:eq('+index+')');
      var value = $thisIt.find('p').html();

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
