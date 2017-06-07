app.controller('mypotager', function($timeout, $scope, $rootScope, $location, sharedProperties, myService) {

   //tabbar
   $scope.home = sharedProperties.getHome();
   $scope.documentation = sharedProperties.getDocumentation();
   $scope.profil = sharedProperties.getProfil();
   $scope.potager = sharedProperties.getPotager();

   $scope.home.classList.remove('active');
   $scope.documentation.classList.remove('active');
   $scope.profil.classList.remove('active');

   $scope.potager.classList.add('active');


   var myPlantes = [];

   function myPlante(name, hour, img) {
      this.name = name;
      this.hour = hour;
   }

   //add new myPlante
   function addNewPlante(name, hour, img) {
      var p = new myPlante(name, hour, img);
      myPlantes.push(p);
      savePlantes();
   }

   //remove myPlante
   function removePlanteAtIndex(index) {
      myPlantes.splice(index, 1);
      savePlantes();

   }

   //get myPlantes
   function getPlanteAtIndex(index) {
      return myPlantes[index];
   }

   //get data from localStorage
   function getPlantes() {
      var str = localStorage.getItem('myPlantes');
      myPlantes = JSON.parse(str);
      console.log (myPlantes);
      if (!myPlantes) {
         myPlantes = [
            {
               hour: "1min",
               img: "assets/plant/first.png",
               name: "Ajoute des plantes à ton potager",
            }
         ];
      }
   }

   getPlantes();

   function savePlantes() {
      var str = JSON.stringify(myPlantes);
      localStorage.setItem('myPlantes', str);
   }

   $scope.myPlantes = myPlantes;

   $scope.plantes = sharedProperties.getPlantes();

   //myPlantes table is load finished
   $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

      //variable on page
      var $modifierBtn = $('.nav__link');
      var $addBtn = $('.nav__btn--add');
      var $selector = $('.selector');
      var $potagerEl = $('.potager__el');
      var $potagerPlante = $('.potager__el--plante');
      var $tabModif = $('.tab-modif');
      var $tabEl = $('.tab__el');
      var $allSelectBtn = $('.tab-modif__el--left');
      var $suppressBtn = $('.tab-modif__el--right');
      var $swipe = $('.swipe');

      var modifON = Boolean(false);
      var suppressON = Boolean(false);

      //change navigation on click 'modifier'
      $modifierBtn.click(function() {

         if(modifON === false && suppressON === false) {
            $modifierBtn.html('Annuler');
            $addBtn.addClass('modif');
            $potagerEl.addClass('modif');
            $potagerPlante.addClass('modif');
            $selector.addClass('modif');
            $tabEl.addClass('modif');
            $allSelectBtn.removeClass('null');
            $suppressBtn.removeClass('null');
            $tabModif.addClass('active');

            modifON = Boolean(true);
         } else if(modifON === true && suppressON === false) {
            $modifierBtn.html('Modifier');
            $potagerPlante.removeClass('modif');
            $selector.removeClass('modif').removeClass('checked');
            $allSelectBtn.removeClass('transparent');
            $tabEl.removeClass('modif');
            $addBtn.removeClass('modif');
            $tabModif.removeClass('active');

            modifON = Boolean(false);
         } else if(suppressON === true && modifON === false) {
            $swipe.css("transform", "translate3d(0, 0, 0)");
            $tabModif.removeClass('active');
            $modifierBtn.html('Modifier');

            suppressON = false;
         }

      });

      //verify if potager__el is checked ??
      //change element on click potager__el
      $scope.potagerEl = function() {
         var index = this.$index;

         if(modifON === false && suppressON === false) {

            for(var i = 0; i < $scope.plantes.length; i++) {
               if($scope.myPlantes[index].name === $scope.plantes[i].name) {
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

         } else if(modifON === true && suppressON === false) {
            $($potagerEl[index]).find($selector).toggleClass('checked');

         } else if(suppressON === true && modifON === false) {
            $swipe.css("transform", "translate3d(0, 0, 0)");
            $tabModif.removeClass('active');
            $tabEl.removeClass('null');
            $allSelectBtn.addClass('null');
            $suppressBtn.addClass('null');
            $modifierBtn.html('Modifier');

            suppressON = false;
         }

      };

      //select all potager__el
      $scope.allSelected = function() {
         if(!$(this.$index).hasClass('transparent')) {
            $selector.addClass('checked');
            $allSelectBtn.addClass('transparent');
         }
      };

      //suppress potager element (potagerEl)
      $scope.delete = function() {
         var i = 0;
         $potagerEl.each( function() {
            if($(this).find('.selector').hasClass('checked')) {

               var index = $(this).index();
               removePlanteAtIndex(index-i);
               i ++;
            }
         });
         $modifierBtn.html('Modifier');
         $potagerPlante.removeClass('modif');
         $selector.removeClass('modif').removeClass('checked');
         $allSelectBtn.removeClass('transparent');
         $tabEl.removeClass('modif');
         $addBtn.removeClass('modif');
         $tabModif.removeClass('active');

         modifON = Boolean(false);
      };
      $scope.suppress = function() {
            var index = this.$index;
            removePlanteAtIndex(index);

            $modifierBtn.html('Modifier');
            $swipe.css("transform", "translate3d(0, 0, 0)");
      };


      //hammer js: swipe
      $potagerEl.hammer()
         .on('pan', function(e) {
            var $swiped = $(this).find($swipe);

            if(e.gesture.direction == '2') {
               if(e.gesture.deltaX < -123) {
                  return false;
               } else {
                  $swiped.css("transform", "translate3d("+e.gesture.deltaX+"px, 0, 0)");
               }
            } else if(e.gesture.direction == '4') {
               if(e.gesture.deltaX > 123) {
                  return false;
               } else {
                  $swiped.css("transform", "translate3d("+(-123 + e.gesture.deltaX)+"px, 0, 0)");
               }
            }

         })
         .on('panend', function(e) {
            var $swiped = $(this).find($swipe);

            if(e.gesture.deltaX < -61.5) {
               $swiped.css("transform", "translate3d(-123px, 0, 0)");
               $tabModif.removeClass('active');
               $allSelectBtn.addClass('null');
               $suppressBtn.addClass('null');
               $modifierBtn.html("Ok");
               suppressON = true;

            } else {
               $swiped.css("transform", "translate3d(0, 0, 0)");
               $tabModif.removeClass('active');
               $modifierBtn.html("Modifier");
               suppressON = false;
            }
         });

      //end 'is load finished: "ngRepeatFinished"'
   });

});
