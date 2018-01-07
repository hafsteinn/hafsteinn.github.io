//retreives images from google api
var apiRoot = config.apiRoot;
var apiKey = config.apiKey;

var _Images = {
    currentSearchQuery: "",
    list: [],
    loadImages: function() {

        _Images.list = [];

        if(_Images.currentSearchQuery.length >= 3)
        {
            return m.request({
            method: "GET",
            url: apiRoot + "/customsearch/v1?q=" + _Images.currentSearchQuery + "&cx=001361074102112665899%3Ap7mybnrloug&searchType=image&key=" + apiKey
            })
            .then(function(result) {
                _Images.list = result.items
            })
        }
        
    }
}