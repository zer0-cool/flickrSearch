var flickr = angular.module( 'ngBoilerplate.home', [
  'ui.router',
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
    return $resource('https://api.flickr.com/services/rest/', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } },
      {});
  })


  .controller( 'HomeCtrl', function HomeController( $scope, flickrPhotos ) {

  })

  .controller( 'ImgCtrl', function ImageController( $scope, flickrPhotos ) {
      $scope.currentPage = 1;

      $scope.search = function()
      {
        $scope.photoCollection = flickrPhotos.load(
          {
            method: 'flickr.photos.search',
            api_key: 'f172ed967118edae74df471a11a4c121',
            tags: $scope.searchTerm,
            tag_mode: $scope.searchMatch,
            per_page: $scope.searchPerPage,
            page: $scope.currentPage
          }).$promise.then(function(data){

            $scope.photoReturn =  data.photos.photo;
            $scope.totalPages = data.photos.pages;
            $scope.currentPage = data.photos.page;

          });
      };

      $scope.nextPage = function()
      {
        $scope.currentPage++;
        $scope.search();
      };

  })

;



