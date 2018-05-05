var app = angular.module("mainApp", ["ngRoute"]);

app.directive("navigationBar", function () {
    return {templateUrl: "component/home/navigationBar.html"}
})

app.directive("footerBar", function () {
    return {templateUrl: "component/home/footer.html"}
})

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "component/home/home.html"
        })
        .when("/about", {
            templateUrl: "component/home/about.html"
        })
        .when("/angular", {
            templateUrl: "component/home/angular.html"
        })
        .when("/ionic", {
            templateUrl: "component/home/ionic.html"
        })
        .when("/login", {
            templateUrl: "component/login/login.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});


app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});