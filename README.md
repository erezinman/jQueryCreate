# jQueryCreate

The jQuery creator plugin repository. Allows you to create your elements using the CSS selector syntax.
	
	'Why haven't anyone done this before?"
		--Future You

## Details
Author: EZSlaver

Date: 05.02.2013

Version: 0.9.0

## Usage
Add the plugin to your HTML page, and do this only after you add the jQuery reference.

Now, you can use the $c() command to create your elements.

The plugin doesn't support the 'style' plugin. At least, for now...


## Code Examples:
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

