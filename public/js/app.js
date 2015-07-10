

var app = angular.module('FlashCards', []);


app.filter('cheat', function(){
    return function(answers){
        return answers.filter(function(answer){
            return answer.correct;
        })
    }
})
