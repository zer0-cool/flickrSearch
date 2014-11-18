angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'ngResource'
])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    });
  })


  .factory('flickrPhotos', function ($resource) {
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
  })


  .controller( 'HomeCtrl', function HomeController( $scope, flickrPhotos ) {

  })

  .controller( 'ImgCtrl', function ImageController( $scope, flickrPhotos ) {
    $scope.search = function(){

      alert($scope.searchMatch);
      $scope.photos = flickrPhotos.load({ tags: $scope.searchTerm });
    };
  })

;



