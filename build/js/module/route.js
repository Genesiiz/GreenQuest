app.config(['$stateProvider', function($stateProvider, $urlRouterProvider) {

   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'pages/views/home.php',
         controller: 'homepage'
      })
      .state('documentation', {
         url: '/documentation',
         templateUrl: 'pages/views/documentation.php',
         controller: 'documentation'
      })
      .state('mypotager', {
         url: '/mypotager',
         templateUrl: 'pages/views/mypotager.php',
         controller: 'mypotager'
      })
      .state('myprofil', {
         url: '/myprofil',
         templateUrl: 'pages/views/myprofil.php',
         controller: 'myprofil'
      })
      .state('mypotageradd', {
         url: '/mypotageradd',
         templateUrl: 'pages/views/mypotageradd.php',
         controller: 'mypotageradd'
      })
      .state('oneprofil', {
         url: '/oneprofil',
         templateUrl: 'pages/views/oneprofil.php',
         controller: 'oneprofil'
      })
      .state('oneabonne', {
         url: '/oneabonne',
         templateUrl: 'pages/views/oneabonne.php',
         controller: 'oneabonne'
      })
      .state('oneabo', {
         url: '/oneabo',
         templateUrl: 'pages/views/oneabo.php',
         controller: 'oneabo'
      })
      .state('plante', {
         url: '/plante',
         templateUrl: 'pages/views/plante.php',
         controller: 'plante'
      })
      .state('onepotager', {
         url: '/onepotager',
         templateUrl: 'pages/views/onepotager.php',
         controller: 'onepotager'
      })
      .state('otherwise', {
         url: '*path',
         templateUrl: 'pages/views/home.php',
         controller: 'homepage'
      });

}]);
