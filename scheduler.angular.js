var scheduler = {
    'showScroll': false,
    'step': function(desc, scroll, fn, sleep){
        $('html, body').animate({scrollTop:scroll}, 'slow');
        console.profile(desc);
        setTimeout(fn, (sleep || 2000));
    },
    '$rootScope': angular.element($(document)).scope(),
    'start': function(fn){
        $(function () {
            angular.element(document).injector().invoke(function($compile) {
                fn(scheduler.$rootScope, scheduler.step, $compile);
            });
        });
    },
    'getScope': function(attr, name){
        return angular.element(document.querySelectorAll('[' + attr + '="' + name + '"]')).scope();
    },
    'setScrollMonitor': function(value){
        scheduler.showScroll = value;
    }
};

$(window).scroll(function() {
    if(scheduler.showScroll){
        console.info($(this).scrollTop());
    }
});
