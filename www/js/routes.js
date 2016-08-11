App

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.orderHistory'
      2) Using $state.go programatically:
        $state.go('tabsController.orderHistory');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/order-history
      /page1/tab7/order-history
      /page1/tab3/order-history
  */
  .state('tabsController.orderHistory', {
    url: '/order-history',
    views: {
      'tab9': {
        templateUrl: 'templates/orderHistory.html',
        controller: 'orderHistoryCtrl'
      },
      'tab7': {
        templateUrl: 'templates/orderHistory.html',
        controller: 'orderHistoryCtrl'
      },
      'tab3': {
        templateUrl: 'templates/orderHistory.html',
        controller: 'orderHistoryCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.orderHistoryDetail'
      2) Using $state.go programatically:
        $state.go('tabsController.orderHistoryDetail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/order-history-detail
      /page1/tab7/order-history-detail
      /page1/tab3/order-history-detail
  */
  .state('tabsController.orderHistoryDetail', {
    url: '/order-history-detail',
    views: {
      'tab9': {
        templateUrl: 'templates/orderHistoryDetail.html',
        controller: 'orderHistoryDetailCtrl'
      },
      'tab7': {
        templateUrl: 'templates/orderHistoryDetail.html',
        controller: 'orderHistoryDetailCtrl'
      },
      'tab3': {
        templateUrl: 'templates/orderHistoryDetail.html',
        controller: 'orderHistoryDetailCtrl'
      }
    }
  })

  .state('tabsController.events', {
    url: '/events',
    views: {
      'tab1': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController.shop', {
    url: '/shop',
    views: {
      'tab9': {
        templateUrl: 'templates/shop.html',
        controller: 'shopCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cart'
      2) Using $state.go programatically:
        $state.go('tabsController.cart');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/cart
      /page1/tab7/cart
  */
  .state('tabsController.cart', {
    url: '/cart',
    views: {
      'tab9': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      },
      'tab7': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.atTheGig'
      2) Using $state.go programatically:
        $state.go('tabsController.atTheGig');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/more
      /page1/tab7/more
      /page1/tab3/more
  */
  .state('tabsController.atTheGig', {
    url: '/more',
    views: {
      'tab9': {
        templateUrl: 'templates/atTheGig.html',
        controller: 'atTheGigCtrl'
      },
      'tab7': {
        templateUrl: 'templates/atTheGig.html',
        controller: 'atTheGigCtrl'
      },
      'tab3': {
        templateUrl: 'templates/atTheGig.html',
        controller: 'atTheGigCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.shippingAddress'
      2) Using $state.go programatically:
        $state.go('tabsController.shippingAddress');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/address
      /page1/tab7/address
      /page1/tab3/address
  */
  .state('tabsController.shippingAddress', {
    url: '/address',
    views: {
      'tab9': {
        templateUrl: 'templates/shippingAddress.html',
        controller: 'shippingAddressCtrl'
      },
      'tab7': {
        templateUrl: 'templates/shippingAddress.html',
        controller: 'shippingAddressCtrl'
      },
      'tab3': {
        templateUrl: 'templates/shippingAddress.html',
        controller: 'shippingAddressCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.paymentInfo'
      2) Using $state.go programatically:
        $state.go('tabsController.paymentInfo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/payment
      /page1/tab7/payment
      /page1/tab3/payment
  */
  .state('tabsController.paymentInfo', {
    url: '/payment',
    views: {
      'tab9': {
        templateUrl: 'templates/paymentInfo.html',
        controller: 'paymentInfoCtrl'
      },
      'tab7': {
        templateUrl: 'templates/paymentInfo.html',
        controller: 'paymentInfoCtrl'
      },
      'tab3': {
        templateUrl: 'templates/paymentInfo.html',
        controller: 'paymentInfoCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl',
    controllerAs: 'signupAltCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
    controllerAs: 'loginAltCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.settings'
      2) Using $state.go programatically:
        $state.go('tabsController.settings');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/settings
      /page1/tab7/settings
      /page1/tab3/settings
  */
  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab9': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      },
      'tab7': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.itemDetails'
      2) Using $state.go programatically:
        $state.go('tabsController.itemDetails');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/item-details
      /page1/tab7/item-details
  */
  .state('tabsController.itemDetails', {
    url: '/item-details',
    views: {
      'tab9': {
        templateUrl: 'templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      },
      'tab7': {
        templateUrl: 'templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      }
    }
  })

  .state('tabsController.auction', {
    url: '/auction',
    views: {
      'tab6': {
        templateUrl: 'templates/auction.html',
        controller: 'auctionCtrl'
      }
    }
  })

  .state('orderConfirmation', {
    url: '/order-confirmation',
    templateUrl: 'templates/orderConfirmation.html',
    controller: 'orderConfirmationCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.profile'
      2) Using $state.go programatically:
        $state.go('tabsController.profile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/profile
      /page1/tab7/profile
      /page1/tab3/profile
  */
  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab9': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab7': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.eventDetails', {
    url: '/event-details',
    views: {
      'tab1': {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventDetailsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.changePassword'
      2) Using $state.go programatically:
        $state.go('tabsController.changePassword');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/password
      /page1/tab7/password
      /page1/tab3/password
  */
  .state('tabsController.changePassword', {
    url: '/password',
    views: {
      'tab9': {
        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'
      },
      'tab7': {
        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'
      },
      'tab3': {
        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'
      }
    }
  })

  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html',
    controller: 'splashCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.contactUs'
      2) Using $state.go programatically:
        $state.go('tabsController.contactUs');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab9/contact-us
      /page1/tab7/contact-us
      /page1/tab3/contact-us
  */
  .state('tabsController.contactUs', {
    url: '/contact-us',
    views: {
      'tab9': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      },
      'tab7': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/splash')

  

});