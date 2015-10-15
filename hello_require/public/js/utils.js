(function(define) {
    'use strict';

    define(['jquery'], function ($) {
        return {
            display_message: function(element, message) {
                var msg_dom_elem = $("<div>").text(message);
                $(element).append(msg_dom_elem);
            },

            show_message: function (element, message) {
                var self = this;
                setTimeout(function() {
                    self.display_message(element, message);
                }, 1000)
            }
        }
    });
}).call(this, define || RequireJS.define);