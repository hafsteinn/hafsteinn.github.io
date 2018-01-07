var _searchBar = {
    view: function() {
        return m("div", {class: "jumbotron"}, [
	            m("input.input[type=text][placeholder=Leitaðu hér...]", {
	                oninput: m.withAttr("value", function(value) {_Images.currentSearchQuery = value}),
	                value: _Images.currentSearchQuery,
	                onkeyup: _Images.loadImages
	            })
        ])
    }
}