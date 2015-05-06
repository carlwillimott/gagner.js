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
            this.setupElements();
            this.bindEvents();
            this.generateScoreboard();

        },

        calculateArea: function() {
            this.area.width = window.innerWidth;
            this.area.height = window.innerHeight;
        },

        setupElements: function() {
            this.buttons.style.position = 'absolute';
        },

        bindEvents: function() {

            var self = this;

            this.buttons.addEventListener('mouseover', function(element) {
                self.changePosition(element, self);
            });

        },

        changePosition: function(element, self) {
            var current = element.target;
            current.style.left = Math.floor(Math.random() * (self.area.width - current.offsetWidth));
        },

        generateScoreboard: function() {

            var name = 'gagner-scoreboard';

            if (!document.getElementById(name) && document.body != null) {
                var scoreboard = document.createElement('div');
                scoreboard.id = name;
                document.body.appendChild(scoreboard);
            }


        },

        pluckMessage: function() {
            // http://stackoverflow.com/a/5915122
            return this.messages[Math.floor(Math.random() * this.messages.length)];
        },

        messages: [
            "Almost!",
            "Not quite.",
            "Is that all you've got?",
            "C'mon - try harder!",
            "Not a chance.",
            "What a joke!"
        ]

    };

    // Provide the object constructor to the outside world.
    return function(elements, options) {
      setup.init(elements, options);
    };

})();