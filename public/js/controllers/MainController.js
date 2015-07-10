var previous = 0;
var next = 1;

app.controller('MainController', function($scope, FlashCardsFactory){
    $scope.scoreTemplate = 'templates/statistics.html';
    $scope.currentCategory = null;
    $scope.categories = ['MongoDB', 'Express', 'Angular', 'Node','Reset']
    FlashCardsFactory.getFlashCards().then(function(value){
        $scope.flashCards = setFCOptions(value);

    });

    $scope.getCategoryCards = function(category){
        FlashCardsFactory.getFlashCards(category)
            .then(function(value){
            $scope.flashCards = setFCOptions(value);
            $scope.currentCategory = category;
        })
    };

    $scope.showNext = function(){

        $scope.flashCards[previous++].show = false;
        $scope.flashCards[next++].show = true;
    };

    $scope.showPrevious = function(){
        previous--;
        next--;
        $scope.flashCards[previous].show = true;
        $scope.flashCards[next].show = false;
    };
})


function setFCOptions(flashCards){
    flashCards.forEach(function(flashcard){
        flashcard.showPrevious = true;
        flashcard.showNext = true;
        flashcard.show = false;
    })
    flashCards[0].showPrevious = false;
    flashCards[0].showNext = true;
    flashCards[0].show = true;
    flashCards[flashCards.length-1].showPrevious = true;
    flashCards[flashCards.length-1].showNext = false;
    previous = 0;
    next = 1;
    return flashCards;
}