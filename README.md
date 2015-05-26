# gagner.js
What could be more interesting than clicking a button? How about chasing one around the screen instead.

### Get Started
Once you have included the script on your page, all you need to do is decide which element you want to use.

```html
<script>
    window.onload = function() {
        var options = {
            showResults: 2
        };
        var gagner = new Gagner(document.getElementById('my-button'), options);
    }
</script>
```

Although you are more than welcome to use this script with other libraries such as jQuery - you are under no obligation to do so as there are no dependencies.

### Styles
Included in this repo are three different button styles. All you need to do is add the class to your element depending on the theme of your choice. The possible classes are:

* gagner-normal
* gagner-light
* gagner-dark

### Questions
If you have any suggestions, or would like to know more please get in touch.

### Licence

MIT Licence - Copyright (c) 2015 - Carl Willimott