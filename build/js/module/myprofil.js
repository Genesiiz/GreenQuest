app.controller('myprofil', function($scope, sharedProperties) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.home.classList.remove('active');
   $scope.documentation.classList.remove('active');
   $scope.potager.classList.remove('active');

   $scope.profil.classList.add('active');

   //auto scroll to publication
   $('.profil__publi > a').click(function(){

      $('.bg-wrapper').animate({
         scrollTop:(($('#myprofilpubli').offset().top) - 98)
      }, 'slow');
      return false;
   });
   
});
