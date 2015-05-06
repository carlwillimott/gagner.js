var Gagner = (function() {

    'use strict';

    var setup = {

        buttons: false,

        // Default configuration settings.
        defaults: {
            showResults: 1
        },

        area: {
            height: false,
            width: false
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

            // Check to see if we have any messages in the setup object.
            if (typeof options.messages !== 'undefined') {
                for (var j in options.messages) {
                    if (options.messages.hasOwnProperty(j) && typeof options.messages[j] === "string") {
                        this.messages.push(options.messages[j]);
                    }
                }
            }

            // Generate all of the remaining functionality.
            this.calculateArea();
            this.bindEvents();
            this.generateScoreboard();

        },

        calculateArea: function() {
            this.area.width = window.innerWidth;
            this.area.height = window.innerHeight;
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


        },

        messages: [
            "Almost!",
            "Not quite.",
            "Is that all you've got?",
            "C'mon - try harder!",
            "Not a chance."
        ]

    };

    // Provide the object constructor to the outside world.
    return function(elements, options) {
      setup.init(elements, options);
    };


})();