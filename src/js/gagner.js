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
            this.buttons = elements;

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
            this.buttons.addEventListener('mouseover', this.changePosition);
        },

        changePosition: function(e) {

            // @ TODO - move the element to a new position before clicking.

        },

        generateScoreboard: function() {

            var name = 'gagner-scoreboard';

            if (!document.getElementById(name) && document.body != null) {
                var scoreboard = document.createElement('div');
                scoreboard.id = name;
                document.body.appendChild(scoreboard);
            }


        }

    };

    return function(elements, options) {
      setup.init(elements, options);
    };


})();