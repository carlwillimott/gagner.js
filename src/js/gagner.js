
var Gagner = (function() {

    'use strict';

    var setup = {

        buttons: false,

        // Default configuration settings.
        defaults: {
            showResults: 1
        },

        init: function(elements, options) {

            // Assign all of the elements to the object·
            // @ TODO - determine if we have an array or just one element.

            // Loop over all of the properties and update the defaults if valid.
            for (var i in options) {
                if (options.hasOwnProperty(i) && this.defaults.hasOwnProperty(options[i])) {
                    this.defaults[i] = options[i];
                }
            }

            this.bindEvents();
            this.generateScoreboard();


        },

        bindEvents: function() {

        },

        generateScoreboard: function() {

        }

    };

    return function(elements, options) {
      setup.init(elements, options);
    };


})();