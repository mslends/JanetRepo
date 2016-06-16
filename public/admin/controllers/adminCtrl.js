angular.module('janet').controller('adminCtrl', function($scope, $stateParams, adminService) {

    console.log("adminCtrl working");

    $scope.showProducts = () => {
        adminService.getProducts().then(function(response) {
            console.log(response);
            $scope.products = response;
        });
    };

    $scope.showProducts();

    $scope.addNewProduct = function(newProduct) {
        adminService.createProduct(newProduct).then(function(response) {
            $scope.showProducts();
            $scope.newProduct = response;
            $scope.newProduct = {};
            $scope.newProductModalShown = !$scope.newProductModalShown;
            alert(newProduct.name + " has been added to inventory!");
        });
    };

    $scope.deleteProduct = function(product) {
        $scope.confirmDelete = confirm(product.name + " will be removed from inventory. Click OK to confirm.");
        if ($scope.confirmDelete === true) {
            adminService.deleteSingleProduct(product).then(function() {
                $scope.showProducts();
            });
        }
    };


//////////////////Admin Profile Settings/////////////

$scope.updateAdminProfileSettings = (user) => {
    console.log("edit admin settings hit!");
    adminService.updateUser(user).then(function(){
        alert("Changes to your admin profile information have been saved.");
    });
};

});
