githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;

  var searchResource = $resource('https://api.github.com/search/users/');

  self.doSearch = function() {
    githubToken=process.env.GITHUB_TOKEN;
    self.searchResult = searchResource.get(
      { q: self.searchTerm, access_token: githubToken }
    );
  };
}]);