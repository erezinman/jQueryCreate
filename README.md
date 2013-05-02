# jQueryCreate

>	"It's elementary, Watson." **-  S. Holmes**
	
>	"How come no one has ever done this before?" **-  Future You**

No learning curve - The jQueryCreate plugin is simple, intuitive and extremely useful. Just plug and play.

The jQuery creator plugin Allows you to create your elements using CSS selectors syntax.
Don't use javascript with different syntaxes when it comes to dynamic DOM element creation. 
Use the same syntax for element querying and creation.

## General
* **Author**: [EZSlaver](mailto:EZSlaver@gmail.com) (E. Zinman)
* **Date**: 05.02.2013
* **Current Version**: 1.0.0

## Usage
Add the plugin to your HTML page, and do this only after you add the jQuery reference.

Now, you can use the $c() command to create your elements.
```javascript

	// Different usages of the plugin are specified.
	var $div = $c("div");
	$div = $c("div#foo");
	$div = $c("div.bar");
	$div = $c("div#foo.bar");
	$div = $c("div.bar#foo");
	$div = $c("div.bar#foo.foo");
	$div = $c("div.bar.foo#foo");
	$div = $c("div[disabled=disabled]");
	$div = $c("div[disabled=disabled].bar");
	$div = $c("div[disabled=disabled]#foo");
	$div = $c("div[disabled=disabled]#foo.bar");
	$div = $c("div[disabled=disabled][selected=true]#foo.bar");
	$div = $c("div[disabled=disabled][selected=\"true\"]#foo.bar");
	$div = $c("div[disabled=disabled][selected=\"very true\"]#foo.bar");
	$div = $c("div[disabled=disabled][selected=\"very:true\"]#foo.bar");

	// Creates two elements with one command.
	var $elements = $c("div.one, input.two");
	
```
Full documentation lies within the file.

##Remarks
- The plugin doesn't support the 'style' attribute. You can use the jQuery.css function in concatenation to the creation function.
- The plugin adds two pototype methods to the string: string.format()  and string.relativeSlice(). Their documentation is within the code.
- The code supports creation of all elements known by me. In case something's missing, email me or post an 'issue'.
- The code uses regular expressions. I have first prepared many of them, only to discover I need only use a few. I cannot guarantee all of them work, though I do not use all of them.
- The code could be easily altered to not require jQuery, yet I do not see the purpose of such an action.

##Performance
I haven't come across an issue in that area, and I use the '$c() ' function for a while now, and in many colors and shapes.
If you find a problem, mail me so I can fix it.

## Code Examples:
```javascript
	// Returns a wrapped element to be used directly via jQuery.
	var $newDiv = $c('div#New').append($c('input[type=text].shows-default-value'));
	$('body').append($newDiv).append($c('div.seperator'));
```

## Licensing
Copyright (C) 2010-2013 [E. Zinman](mailto:EZSlaver@gmail.com)
 * Licensed under the MIT License
 * http://www.opensource.org/licenses/mit-license.php