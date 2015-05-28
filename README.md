# gagner.js
What could be more interesting than clicking a button? How about chasing one around the screen instead.

This simple library is just a bit of fun which stops users from clicking specific buttons or other selected elements.

### Get Started
Once you have included the script on your page, all you need to do is decide which element you want to use.

```html
<script>
    window.onload = function() {
        var options = {
            showResults: 2,
            intervals: 7
        };
        var gagner = new Gagner(document.getElementById('my-button'), options);
    }
</script>
```

Although you are more than welcome to use this script with other libraries such as jQuery - you are under no obligation to do so as there are no dependencies.

### Options
There are a few different options which can be passed on creation to override some of the settings. They are listed as follows:

* showResults (number) - The number of misses before the scoreboard should be shown (default 1).
* intervals (number) - The number of misses before another message will be displayed (default 5).

### Styles
Included in this repo are three different button styles. All you need to do is add the class to your element depending on the theme of your choice. The possible classes are:

* gagner-normal
* gagner-light
* gagner-dark

### Questions
If you have any suggestions, or would like to know more please get in touch.

### Licence

MIT Licence - Copyright (c) 2015 - Carl Willimott