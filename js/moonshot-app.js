
// create a new module
(function(){
    var app = angular.module('moonshot-app',['ngRoute']);

        app.config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl : 'main.html',
                controller  : 'moonshot-main-controller'
            })
            .when('/question/:question_id', {
                templateUrl : 'question.html',
                controller  : 'moonshot-main-controller'
            })
    });

})();

// create controller on that new module
(function(){
    angular.module('moonshot-app')

        .controller('moonshot-main-controller', function($scope, $http, $routeParams){
            $scope.loadQuestions = function(){
                $http.get('http://ec2-52-89-75-176.us-west-2.compute.amazonaws.com:8000/questions/')
                .then(function(result){
                    $scope.questions = result.data;
                });
            };
            $scope.question_id = $routeParams.question_id;
        });
})();