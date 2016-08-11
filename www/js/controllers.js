App
  
.controller('orderHistoryCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('orderHistoryDetailCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventsCtrl', function ($scope, $state, $ionicLoading, $localStorage, APIService, User, $ionicPopup) {
    var eventRequestData = {
        request_type: 'event',
        user_id: 0,
        login_token: '',
        latitude: '',
        longitude: ''
    }
    $scope.init = function () {    
        if(User.isLoggedIn()){
            var user = User.profile();
            console.log("User Id: " + user.user_id);
            console.log("login Token: " + user.login_token);
            eventRequestData.user_id = user.user_id;
            eventRequestData.login_token = user.login_token;
            eventRequestData.latitude = 8.34343242;
            eventRequestData.longitude = 10.435344354;
        }
        $scope.loadingEvents();        
    }
    
    $scope.loadingEvents = function () {
        $ionicLoading.show({
            template: 'Loadding...'
        });
        console.log("Request Data:" + $.param(eventRequestData));
        
        APIService.loadEvents(
            $.param(eventRequestData),
            function(result){
                $ionicLoading.hide();
                $scope.eventsData = result;
                
            }, function (err){
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Server connect error.'
                });
            }
         
        );        
    }
    
    $scope.goEventDetail = function(item){
        $localStorage.current_event_id = item.event_id;
        console.log("Event ID: " + $localStorage.current_event_id);
        $state.go("tabsController.eventDetails");
    }


})
   
.controller('shopCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('atTheGigCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('shippingAddressCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentInfoCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', function ($scope, $state, User, $ionicPopup) {
    var signupAltCtrl = this;
    var signupData = {
        request_type: 'signup',
        screen_name: '',
        email: '',
        password: ''
     }
    
    $scope.init = function(){
        signupAltCtrl.user_name = '';
        signupAltCtrl.user_password = '';
        signupAltCtrl.user_email = '';
    }
  
   $scope.goEvents = function () {
       $scope.signupByEmail();
    //    $state.go("tabsController.events");
   }
   $scope.signupByEmail = function () {
       
       signupData.screen_name = signupAltCtrl.user_name;
       signupData.password = signupAltCtrl.user_password;
       signupData.email = signupAltCtrl.user_email;
       User.signup(
           signupData,
           "email",
           
           function () {
                $state.go("tabsController.events");              
           },
           function (result){
               $ionicPopup.alert({
                   title: "Login Failed!",
                   template: result.error_message
               })
           }
       );
       
   }


})
   
.controller('loginCtrl', function ($scope, $state, User, $ionicPopup) {
    var loginAltCtrl = this;
    var loginData = {
        request_type: 'login',
        username: '',
        password: ''
     }
    
    $scope.init = function(){
        loginAltCtrl.user_name = 'tobias@hotmail.com';
        loginAltCtrl.user_password = 'password';
    }
  
   $scope.goEvents = function () {
       console.log("username: " + loginAltCtrl.user_name);
       console.log("password: " + loginAltCtrl.user_password);
       $scope.loginByEmail();
    //    $state.go("tabsController.events");
   }
   $scope.loginByEmail = function () {
       
       loginData.username = loginAltCtrl.user_name;
       loginData.password = loginAltCtrl.user_password;
       User.login(
           loginData,
           "email",
           
           function () {
                $state.go("tabsController.events");              
           },
           function (result){
               $ionicPopup.alert({
                   title: "Login Failed!",
                   template: "Email or password doesn't match!"
               })
           }
       );
       
   }


})
   
.controller('settingsCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('itemDetailsCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('auctionCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('orderConfirmationCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventDetailsCtrl', function ($scope, $state, $ionicLoading, $localStorage, APIService, User, $ionicPopup) {
    var eventRequestData = {
        request_type: 'event_info',
        user_id: 0,
        login_token: '',
        event_id: 0
    }
    $scope.init = function () {    
        if(User.isLoggedIn()){
            var user = User.profile();
            console.log("User Id: " + user.user_id);
            console.log("login Token: " + user.login_token);
            eventRequestData.user_id = user.user_id;
            eventRequestData.login_token = user.login_token;
            eventRequestData.event_id = $localStorage.current_event_id;
           
        }
        $scope.loadingEvents();        
    }
    
    $scope.loadingEvents = function () {
        $ionicLoading.show({
            template: 'Loadding...'
        });
        console.log("Request Data:" + $.param(eventRequestData));
        
        APIService.loadEvents(
            $.param(eventRequestData),
            function(result){
                $ionicLoading.hide();
                if(result[1].success){
                    $scope.eventDetail = result[0];    
                }else{
                    $ionicPopup.alert({
                        title: 'Error',
                        template: result.error_message
                    });
                }
                
                
            }, function (err){
                $ionicLoading.hide();
                
            }
         
        );        
    }


})
   
.controller('changePasswordCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('splashCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('contactUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 