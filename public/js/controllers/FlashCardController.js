app.controller('FlashCardController', function ($scope, ScoreFactory) {

    $scope.answerQuestion = function(userAnswer){
        $scope.answered = true;
        if (userAnswer.correct){
            $scope.answeredCorrectly = true;
            ScoreFactory.correct++;
        }
        else {
            $scope.answeredCorrectly = false;
            ScoreFactory.incorrect++;
        }
    }
});
