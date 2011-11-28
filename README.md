SimpleSelect jQuery Plugin
==========================

jQuery SimpleSelect is a lightweight, simple to use, and accessible way to style select elements using jQuery.

Why build it?
-------------

I wanted a select element that would look great when closed, would replicate standard browser functionality when open and maintain accessibility and keyboard navigation properties that the default select boxes have.

I couldn't find anything that fit my criteria which would be dead simple to implement, and work cross platform with validators and frameworks using Java and .NET, and could be simply added to enterprise level CMS systems with minimal effort.

How does it work?
-----------------

The jQuery code wraps a standard select element in two spans so that the [.sliding doors](http://www.alistapart.com/articles/slidingdoors/) method can be used.

It then adds another span to replicate the select element's label, and sets the opacity of the select box to 0

Because the select element is transparent, -not hidden-, when you interact with it (be it click or keyboard based) you are actually interacting with the select element itself. The plugin then applies classes to indicate what state the select element is in.

On open, you see the default dropdown that you would see when you use the default select element. Yes this means that you can't style it, but that's a very small price to pay for a beautiful looking select box, that's fully keyboard accessible, and dead easy to implement.

The HTML
--------

You just need to use a standard select box element

The jQuery
----------

```javascript
$(function(){
    $('select').simpleSelect();
});
```

Or you can add options to override the classes used by the plugin

```javascript
$(function(){
    $('select').validation({
        containerClass: 'simpleSelect',
        labelClass: 'simpleLabel',
        focusClass: 'focus'
    });
});
```

Tested browsers
---------------

This solution may work on other browsers as well. These are the ones that it has been tested on

* Microsoft Internet Explorer 7+
* Mozilla Firefox 4+
* Google Chrome 10+
* Apple Safari 5+