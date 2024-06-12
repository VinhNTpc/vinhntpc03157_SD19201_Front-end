const app = angular.module("SignIn", [])
app.controller('SignInController', function ($scope) {
    $scope.list_account = [];

    $scope.info = {};
    $scope.signIn = function () {
        var foundAccount = checkSignIn($scope.info.email, $scope.info.password);
        if (foundAccount) {
            alert("Đăng nhập thành công");
            window.location.href = "/";
        } else {
            alert("Tài khoản không tồn tại hoặc mật khẩu không chính xác");
        }
    }

    function checkSignIn(email, password) {
        for (let i = 0; i < $scope.list_account.length; i++) {
            if ($scope.list_account[i].email === email && $scope.list_account[i].password === password) {
                return $scope.list_account[i];
            }
        }
        return null;
    }

    $scope.signUp = function () {
        if ($scope.list_account.push(angular.copy($scope.info))) {
            localStorage.setItem("list_account", angular.toJson($scope.list_account))
        }
    }

    if (localStorage.getItem("list_account")) {
        $scope.list_account = angular.fromJson(localStorage.getItem("list_account"));
    }
    console.log($scope.list_account);
});
