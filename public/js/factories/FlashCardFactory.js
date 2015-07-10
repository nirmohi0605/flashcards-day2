app.factory('FlashCardsFactory', function ($http) {
    return { getFlashCards: function (category) {
        var queryParams = {};
        if(category && category !== 'Reset'){
            queryParams.category = category;
        }
        return $http.get('/cards',{params: queryParams}).then(function(res){
            return res.data
        })
    } };
});