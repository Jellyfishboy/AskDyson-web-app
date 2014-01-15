'use strict';

angular.module('askDysonWebApp', ['pascalprecht.translate'])
    .config(['$translateProvider', function($translateProvider) {

        $translateProvider
            .translations('en-GB', {
                HEADLINE: 'Welcome',
                INTRO_TEXT: 'This is rather awesome'
            })
            .translations('de-DE', {
                HEADLINE: 'Willkommen',
                INTRO_TEXT: 'Das ist ziemlich genial'
            });
        $translateProvider.preferredLanguage('en-GB');
        $translateProvider.fallbackLanguage('en-GB');
}]);
