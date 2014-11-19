flickr.factory('flickrPhotos', function ($resource) {
    return $resource('https://api.flickr.com/services/rest/', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
  });



