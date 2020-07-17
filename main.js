// Renders an error message
function showError(msg) {
  const html = `<li><p class="error">${msg}</p></li>`;
  document.querySelector('#results').innerHTML = html;
}

// Searches for books and returns a promise that resolves a JSON list
function searchForBooks(term) {
  // TODO
}

// Generate HTML and sets #results's contents to it
function render() {
  // TODO
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

var app = angular.module('googleBookApp', []);
app.controller('googleBookCtrl', function ($scope, $http) {
  $scope.searchQuery = "";
  $scope.maxResult = 39;  // Google Book Api value must be between 0-40
  $scope.key = 'Your Key';

  $scope.searchBooks = function () {
    if ($scope.searchQuery && $scope.searchQuery.length > 0) {
      $http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.searchQuery + "&key=" + $scope.key + "&maxResults=" + $scope.maxResult).then(function (response) {
        $scope.results = response.data.items;
        console.log("$scope.results", $scope.results);
      });
    }

  }
});
