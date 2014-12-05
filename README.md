Spin
====

A meteor package for [Spin.js](http://fgnass.github.io/spin.js/).


Installation
------------

> meteor add hckrs:spin


Usage
-----

You can easily add the spin to your html template by calling:

```Handlebars
{{> spin}}
```

Use different sizes:

```Handlebars
{{> spin size='xs'}}
```

```Handlebars
{{> spin size='sm'}}
```

```Handlebars
{{> spin size='lg'}}
```



Advanced
--------

[Spin.js](http://fgnass.github.io/spin.js/) listed properties to tweak the spinner style.  
There are several ways to change these properties.

#### 1. Custom

Pass additional arguments to the spinner:

```Handlebars
{{> spin radius=18 length=15}}
```

#### 2. Options

Pass an object containing the style properties.  
Define such object in a [template helper](http://docs.meteor.com/#/basic/Template-helpers).

```Handlebars
{{> spin options=myOptions}}
```

#### 3. Sizes

Add more sizes in JavaScript:

```JavaScript
Spin.size.big = {
  length: 50,
  radius: 50,
  width: 4
}
```

Call them by name:

```Handlebars
{{> spin size='big'}}
```

#### 4. Presets

You can define your own presets in JavaScript, like:

```JavaScript
Spin.preset.myPreset = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
}
```

Refer to the preset by name:

```Handlebars
{{> spin preset='myPreset'}}
```

#### 5. Default

You can also overwrite the default properties:

```JavaScript
Spin.default = {
  color: '#f00', // #rgb or #rrggbb or array of colors
  speed: 3, // Rounds per second
}
```

In that case you can just call:

```Handlebars
{{> spin}}
```

#### 6. Combine

You can also combine the above approaches, like:

```Handlebars
{{> spin preset="myPreset" size="lg" options=extraOptions speed=5}}
```

In the case of overlapping properties the precedence is defined as  
the order in which this ReadMe file is written.

