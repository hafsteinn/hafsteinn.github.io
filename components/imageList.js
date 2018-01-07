var _imageList = {
    oninit: _Images.loadImages,
    view: function(ctrl) {
        return m("div",{class: "grid", oncreate : function(element, isInitialized) {
                //initialize masonry container
                $('.grid').imagesLoaded( function(){
                  $('.grid').masonry({
                      itemSelector: '.grid-item',
                      percentPosition: true,
                      columnWidth: '.grid-sizer',
                      isAutomated: true,
                      animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                      },
                      gutter:10
                  });
                });
              }}, 
              m("div", {class: "grid-sizer"}),
              	_Images.list.map(function(image) {
                  return m("div",{class: "grid-item",oncreate: function(el){
                      //render Masonry layout for each new object
                      $('.grid').imagesLoaded( function(){
                        var $container = $('.grid').masonry();
                        $container.masonry('reloadItems');
                        $container.masonry('layout');
                      });

                  }}, [
                  	m("img",{src: image.link,}),
                  	m("a",{class: "image-text", href: image.image.contextLink}, image.title)
                  ])
              })
        ) 
    }
}

