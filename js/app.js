const app = angular.module("ASM", ["ngRoute"]);
app.controller("MainController", function ($scope) {
    $scope.imageSrc = "https://htmldemo.net/koffee/koffee/img/slider/1.jpg";
});
app.filter('numberWithCommas', function () {
    return function (input) {
        if (!isNaN(input)) {
            return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return input;
    };
});
app.controller("MembersList", MembersListFunction);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./particals/home.html"
        })
        .when("/about", {
            templateUrl: "./particals/About.html"
        })
        .when("/menu", {
            templateUrl: "./particals/Menu.html",
            controller: menuListController
        })
        .when("/product/:productId", {
            templateUrl: "./particals/ProductDetails.html",
            controller: productDetailController
        })

        .when("/reservation", {
            templateUrl: "./particals/Reservation.html"
        })
        .when("/blog", {
            templateUrl: "./particals/Blog.html",
            controller: blogListController
        })
        .when("/blog/:blogId", {
            templateUrl: "./particals/BlogDetails.html",
            controller: blogDetailController
        })
        .when("/contact", {
            templateUrl: "./particals/Contact.html"
        })
        .when("/sign-in", {
            templateUrl: "./particals/SignIn.html"
        })
        .when("/sign-up", {
            templateUrl: "./particals/SignUp.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});
function MembersListFunction($scope) {
    $scope.members = [
        {
            name: 'Jesse E.Marshall',
            position: 'Senior Accountants',
            image: 'https://htmldemo.net/koffee/koffee/img/team/1.jpg'
        },
        {
            name: 'Tiana D.Greenwood',
            position: 'Marketing Manager',
            image: 'https://htmldemo.net/koffee/koffee/img/team/2.jpg'
        },
        {
            name: 'John K.Smith',
            position: 'Web Developer',
            image: 'https://htmldemo.net/koffee/koffee/img/team/3.jpg'
        },
        {
            name: 'Lily A.Simmons',
            position: 'HR Specialist',
            image: 'https://htmldemo.net/koffee/koffee/img/team/4.jpg'
        }
    ];
}
function  menuListController ($scope, $http){
    $http({
        method: 'GET',
        url: 'http://localhost:3000/products'
    }).then(function successCallback(response) {
        let menuList = response.data;
        $scope.menuList = menuList;
    }, function errorCallback(response) {
    });
}

function  productDetailController ($scope, $http, $routeParams){
    var productId = $routeParams.productId;
    $http.get('http://localhost:3000/products/' + productId)
        .then(function(response) {
            $scope.product = response.data;
        });
}

function blogListController($scope, $http) {
    $http.get('http://localhost:3000/posts')
        .then(function(response) {
            $scope.blogList = response.data;
        });
}
function  blogDetailController ($scope, $http, $routeParams){
    var blogId = $routeParams.blogId;
    $http.get('http://localhost:3000/posts/' + blogId)
        .then(function(response) {
            $scope.blog = response.data;
        });
}