app.controller('plante', function($scope, sharedProperties, myService) {

   $scope.documentation = sharedProperties.getDocumentation();
   var $btnAdd = $('.nav__btn--add');

   var $modale = $('.modale');
   var $modaleWrapper = $('.modale-wrapper');
   var $modaleAdd = $('.modale-btn__add');
   var $modaleAnnule = $('.modale-btn__annule');

   //set content of plante
   $scope.planteContent = myService.planteContent;

   //add btn show modale window
   $btnAdd.click(function() {

      $modale.addClass('up');
      $modaleWrapper.addClass('up');

   });

   //remove modale
   $modale.click(function() {

      $modale.removeClass('up');
      $modaleWrapper.removeClass('up');

   });

   //annule modale
   $modaleAnnule.click(function() {

      $modale.removeClass('up');
      $modaleWrapper.removeClass('up');

   });

   //add plante with modale
   $modaleAdd.click(function() {

      var myPlantes = [];

      function myPlante(name, img, hour) {
         this.name = name;
         this.img = img;
         this.hour = hour;
      }

      //add new myPlante
      function addNewPlante(name, img, hour) {
         var p = new myPlante(name, img, hour);
         myPlantes.push(p);
         savePlantes();
      }

      //get data from localStorage
      function getPlantes() {
         var str = localStorage.getItem('myPlantes');
         myPlantes = JSON.parse(str);
         if (!myPlantes) {
            myPlantes = [];
         }
      }

      getPlantes();

      //ajout de la plante
      addNewPlante($scope.planteContent.name, $scope.planteContent.img, $scope.planteContent.hour);

      function savePlantes() {
         var str = JSON.stringify(myPlantes);
         localStorage.setItem('myPlantes', str);
      }

      $scope.myPlantes = myPlantes;

   });

});
