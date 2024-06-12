const app = angular.module("SignUp", []);
app.controller('SignUpController', function ($scope) {
    $scope.list_account = [];
    $scope.info = {};

    $scope.signUp = function () {
        if ($scope.signUpForm.$valid) {
            $scope.list_account.push(angular.copy($scope.info));
            localStorage.setItem("list_account", angular.toJson($scope.list_account));
            window.location.href = "/";
        }
    };

    if (localStorage.getItem("list_account")) {
        $scope.list_account = angular.fromJson(localStorage.getItem("list_account"));
    }
    console.log($scope.list_account);
});