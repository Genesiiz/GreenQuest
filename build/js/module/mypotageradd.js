app.controller('mypotageradd', function($scope, $location, sharedProperties, myService) {

   //search
   var loop = document.getElementsByClassName('nav__btn--loop')[0];
   var retour = document.getElementsByClassName('nav__btn--retour')[0];
   var search = document.getElementsByClassName('search')[0];
   var title = document.getElementsByTagName('h1')[0];
   var $docEl = $('.doc__el');

   loop.addEventListener("click", getSearch);

   function getSearch() {
      retour.classList.toggle('search');
      title.classList.toggle('search');
      search.classList.toggle('active');
   };

   //add the plante content to the page plante.php
   $scope.planteContent = myService.planteContent;

   $scope.doc = function () {

      var index = this.$index;
      var name = $scope.plantes[index].name;
      var img = $scope.plantes[index].img;
      var title01 = $scope.plantes[index].title01;
      var para01 = $scope.plantes[index].para01;
      var title02 = $scope.plantes[index].title02;
      var para02 = $scope.plantes[index].para02;
      var title03 = $scope.plantes[index].title03;
      var para03 = $scope.plantes[index].para03;
      var title04 = $scope.plantes[index].title04;
      var para04 = $scope.plantes[index].para04;

      myService.planteContentUpdate(name, img, title01, para01, title02, para02, title03, para03, title04, para04);
      $location.path('/plante');

   };

   $scope.plantes = sharedProperties.getPlantes();

});
