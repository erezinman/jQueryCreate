# jQueryCreate
	
	"Why haven't anyone done this before?"
		--Future You


No learning curve - The jQueryCreate plugin is simple, intuitive and extremely useful. Just plug and play.

The jQuery creator plugin Allows you to create your elements using CSS selectors syntax.
Don't use javascript with different syntaxes when it comes to dynamic DOM element creation. 
Use the same syntax for element querying and creation.

## Details
- Author: EZSlaver
- Date: 05.02.2013
- Current Version: 0.9.0
- License: MIT License

## Usage
Add the plugin to your HTML page, and do this only after you add the jQuery reference.

Now, you can use the $c() command to create your elements.

The plugin doesn't support the 'style' attribute. Yet...


## Code Examples:
	<script type="text/javascript">
		// Returns a wrapped element to be used directly via jQuery.
		var $newDiv = $c('div#New').append($c('input[type=text].shows-default-value'));
		$('body').append($newDiv).append($c('div.seperator'));
	</script>
Usages:
- $c("div");
- $c("div#foo");
- $c("div.bar");
- $c("div#foo.bar");
- $c("div.bar#foo");
- $c("div.bar#foo.foo");
- $c("div.bar.foo#foo");
- $c("div[disabled=disabled]");
- $c("div[disabled=disabled].bar");
- $c("div[disabled=disabled]#foo");
- $c("div[disabled=disabled]#foo.bar");
- $c("div[disabled=disabled][selected=true]#foo.bar");
- $c("div[disabled=disabled][selected=\"true\"]#foo.bar");
- $c("div[disabled=disabled][selected=\"very true\"]#foo.bar");
- $c("div[disabled=disabled][selected=\"very:true\"]#foo.bar");

## Licensing
Copyright (C) 2010-2013 Erez Zinman
 * Licensed under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
