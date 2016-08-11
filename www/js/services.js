App
.constant('ApiEndpoint', {
    url: 'http://aspen-insurance.us/webservices/joe/'
  
    
})
.factory('APIService', function ($resource,ApiEndpoint) { // Using ngResource service ,good
    var data = $resource(
        ApiEndpoint.url,
        {},
        {
            login: {
                url: ApiEndpoint.url + 'signin.php',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                method:'POST'
            },
            signup: {
                url: ApiEndpoint.url + 'signup.php',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                method:'POST'
            },
            loadEvents: {
                url: ApiEndpoint.url + 'events.php',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                method:'POST',
                isArray: true
            }
           
        });
      
    return data;
})

.factory('User', function ($localStorage, $rootScope, $ionicLoading, $ionicPopup, APIService, $ionicHistory){
    
    // var user = {
    //     username: '',
    //     password: '',
    //     screen_name: ''        
    // };
    
   
    var self = this;
    var localStoreAvailable = typeof (Storage) != "undefined";
    
    self.isLoggedIn = function () {
        if(localStoreAvailable){
            if($localStorage.loggedIn){
                return $localStorage.loggedIn;
            }else{
                return false;
            }
        }
        return false;
    }
        
    //Get user profile
    self.profile = function (){
        var p = {
            user_id: 0,
            user_email: '',
            login_token: ''    
        };
        
        if(localStoreAvailable){
            if($localStorage.profile){
                p = JSON.parse($localStorage.profile);
            }
        }
        
        return p;        
    }
    
    //Store profile
    /**
         * How to use :
         *
         *  
         *  User.store(profile,'email');
         *  User.store(profile,'facebook');
         *
         * @param profile
         * @param loginType
         * @returns {boolean}
    */    
    self.store = function(profile, loginType) {
        if(localStoreAvailable){
            $localStorage.profile = JSON.stringify(profile);
            $localStorage.loggedIn = true;
            $localStorage.loginType = loginType;
            return true;
        }
    }
    
    // Remove user profile
    self.logout = function (callback) {
        $ionicLoading.show('Logout..');
        // User related
        var loginType = self.getLoginType();
        // if(loginType ==='facebook'){
        //     //Facebook logout
        //     $cordovaFacebook.logout()
        //     .then(function(success){
        //         //success
        //     }, function(error){
        //         //error
        //         $ionicPopup.alert({
        //             title: 'Error',
        //             template: 'Facebook logout error!'
        //         });
        //     });
        // }
        
        $localStorage.$reset();
        $ionicHistory.clearCache();
        $ionicHistory.claerHistory();
        
        if(callback){
            callback();
        } else {
            $rootScope.$broadcast('user: logout', self.profile());
            setTimeout(function(){
                $ionicLoading.hide();
                $state.go('');
            }, 1000);
        }
        
    }
    
    // Get login type
    self.getLoginType = function() {
        if(localStoreAvailable){
            var p = 'email';
            if($localStorage.loginType){
                p = $localStorage.loginType;
            }
            return p;
        }
    }
    
    // Set login type
    self.storeLoginType = function(type) {
        if(localStoreAvailable) {
            var p = type;
            $localStorage.loginType = p;
            return true;
        }
    }
    
    // Login
    // data ={
    //   request_type : 'login',
    //   username: '',
    //   password: ''  
    // };
    self.login = function (data, loginType, succCallback, errCallback){
        try{
            $ionicLoading.show({template:'login...'});
            console.log("self login: " + data);
            console.log("self login: " + $.param(data));
            
            APIService.login(
                $.param(data),
                function (result){
                    $ionicLoading.hide();
                    console.log("result: " + result);
                    // Do success
                    if(result.success == 1){
                        //success
                     
                        var current_user = {
                            user_id: 0,
                            user_email: '',
                            login_token: ''
                            
                        };
                        current_user.user_email = data.username;
                        current_user.user_id = result.user_id;
                        current_user.login_token = result.login_token;
                        self.store(current_user, loginType);
                        succCallback && succCallback();
                        
                    } else{
                        //error
                       
                        errCallback && errCallback(result);
                    }
                }, function (err){
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Info',
                        template: "Server connect error."
                    });
                }                                
            );
        }catch (err){
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'Info',
                template: "Server connect error."
            });
        }
    }
    
    self.signup = function (data, loginType, succCallback, errCallback){
        try{
            $ionicLoading.show({template:'Signup...'});
            
            APIService.signup(
                $.param(data),
                function (result){
                    $ionicLoading.hide();
                    // Do success
                    if(result.success == 1){
                        //success
                        var current_user = {
                            user_id: 0,
                            user_email: '',
                            login_token: ''
                            
                        };
                        current_user.user_email = data.email;
                        current_user.user_id = result.user_id;
                        current_user.login_token = result.login_token;
                        self.store(current_user, loginType);
                        succCallback && succCallback();
                        
                    } else{
                        //error
                       
                        errCallback && errCallback(result);
                    }
                }, function (err){
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Info',
                        template: "Server connect error."
                    });
                }                                
            );
        }catch (err){
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'Info',
                template: "Server connect error."
            });
        }
    }
    
    return self;
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);