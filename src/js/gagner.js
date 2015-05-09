var Gagner = (function(window, document) {

    'use strict';

    var setup = {

        buttons: false,

        // Default configuration settings.
        defaults: {
            showResults: 1,
            intervals: 5
        },

        area: {
            height: false,
            width: false
        },

        stats: {
            counter: null,
            distance: null,
            misses: 0,
            travelled: 0,
            prevX: 0,
            prevY: 0
        },

        init: function(elements, options) {

            if (document.readyState !== 'complete') {
                throw new Error('Document is not ready yet.');
            }

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
            this.generateScoreboard();
            this.bindEvents();

        },

        calculateArea: function(self) {

            var current = self ? self : this;

            current.area.width = window.innerWidth;
            current.area.height = window.innerHeight;

        },

        setupElements: function() {
            this.buttons.style.position = 'absolute';
        },

        bindEvents: function() {

            var self = this;

            window.addEventListener('resize', function() {
                self.calculateArea(self);
            });

            document.addEventListener('mousemove', function(e) {
                self.trackMouseDistance(e, self);
                self.updateDistance();
            });

            this.buttons.addEventListener('mouseover', function(e) {
                self.changePosition(e, self);
            });

            this.buttons.addEventListener('click', function(e) {
                e.preventDefault();
            });

        },

        changePosition: function(e, self) {
            var current = e.target;
            current.style.left = Math.floor(Math.random() * (self.area.width - current.offsetWidth));
            current.style.top = Math.floor(Math.random() * (self.area.height - current.offsetHeight));
            self.updateMisses();
        },

        trackMouseDistance: function(e, self) {

            if (this.stats.misses < self.defaults.showResults) {
                return false;
            }

            // http://jsfiddle.net/RoryMcCrossan/8ahQB/
            var travelled = self.stats.travelled;
            var prevX = self.stats.prevX;
            var prevY = self.stats.prevY;
            var nowX = e.pageX;
            var nowY = e.pageY;
            var xMoved = Math.abs(nowX - prevX);
            var yMoved = Math.abs(nowY - prevY);

            if (prevX === 0 && prevY === 0) {
                self.stats.prevX = nowX;
                self.stats.prevY = nowY;
                return false;
            }

            self.stats.travelled = travelled + xMoved + yMoved;
            self.stats.prevX = nowX;
            self.stats.prevY = nowY;

        },

        updateMisses: function() {

            var next = this.stats.misses + 1;

            if (this.stats.counter) {
                this.stats.counter.innerHTML = next;
            }

            this.stats.misses = next;

        },

        updateDistance: function() {
            if (this.stats.distance) {
                this.stats.distance.innerHTML = this.stats.travelled + 'px';
            }
        },

        generateScoreboard: function() {

            var name = 'gagner-scoreboard';

            if (document.getElementById(name)) {
                return false;
            }

            var scoreboard = this.generateElement('div', name);
            var text = this.generateElement('p', false, 'Total misses');
            var counter = this.generateElement('p', 'gagner-misses', '0');
            var text2 = this.generateElement('p', false, 'Travelled');
            var distance = this.generateElement('p', 'gagner-distance', '0px');
            this.stats.counter = counter;
            this.stats.distance = distance;
            scoreboard.appendChild(text);
            scoreboard.appendChild(counter);
            scoreboard.appendChild(text2);
            scoreboard.appendChild(distance);
            document.body.appendChild(scoreboard);

        },

        generateElement: function(type, id, innerHTML) {
            var element = document.createElement(type);
            element.id = id ? id : "";
            element.innerHTML = innerHTML ? innerHTML : "";
            return element;
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

})(window, document);