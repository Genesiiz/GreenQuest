app.controller('onepotager', function($scope, $rootScope, $location, sharedProperties, myService) {

   var $potagerElPlante = $('.potager__el--plante');
   $scope.plantes = sharedProperties.getPlantes();

   $rootScope.plante = function(index) {

      $scope.index = index;
      var value = $($potagerElPlante[index]).find('a').html();

      for(var i = 0; i < $scope.plantes.length; i++) {
         if(value === $scope.plantes[i].name) {
            var name = $scope.plantes[i].name;
            var img = $scope.plantes[i].img;
            var title01 = $scope.plantes[i].title01;
            var para01 = $scope.plantes[i].para01;
            var title02 = $scope.plantes[i].title02;
            var para02 = $scope.plantes[i].para02;
            var title03 = $scope.plantes[i].title03;
            var para03 = $scope.plantes[i].para03;
            var title04 = $scope.plantes[i].title04;
            var para04 = $scope.plantes[i].para04;
         }
      }

      myService.planteContentUpdate(name, img, title01, para01, title02, para02, title03, para03, title04, para04);
      $location.path('/plante');

   };

});
