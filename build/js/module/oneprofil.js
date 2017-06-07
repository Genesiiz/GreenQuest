app.controller('oneprofil', function($scope, sharedProperties, myService) {

   $scope.main = sharedProperties.getMain();

   var hammertime = new Hammer($scope.main);
      hammertime.on('pan', function(e) {
         if(e.direction == '4') {
            $scope.main.style.transform = "translate3d("+ e.deltaX +"px, 0, 0)";
         }
   });

   //auto scroll to publication
   $('.profil__publi > a').click(function(){

      $('.bg-wrapper').animate({
         scrollTop:(($('#oneprofilpubli').offset().top) - 98)
      }, 'slow');
      return false;

   });

   $scope.profilContent = myService.profilContent;
   $scope.profils = sharedProperties.profils;


   //follow btn
   $('.followone').click(function() {
      $(this).toggleClass('active');

      if($(this).hasClass('active')) {
         $(this).html('Abonné(e)s');
      } else {
         $(this).html('Suivre');
      }
   });

});
