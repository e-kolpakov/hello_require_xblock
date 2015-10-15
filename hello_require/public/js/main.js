(function(define) {
    'use strict';

    define(['xblock_resource/xblock-hello-require/public/js/utils'], function(Utils){
        function HelloRequire(runtime, element) {
            Utils.display_message(element, "You: Hello RequireJS!");
            Utils.show_message(element, "RequireJS: Hello %username!");
        }

        return HelloRequire;
    });
}).call(this, define || RequireJS.define);
