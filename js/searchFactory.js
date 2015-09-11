githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var githubToken = process.env.GITHUB_TOKEN
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm, access_token: githubToken
        }
      }); 
    }
  };
}]);