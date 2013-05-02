jQueryCreate
============

The jQuery creator plugin repository. Allows you to create your elements using the CSS selector syntax.
	
	--"Why haven't anyone done this before?"
		Future You

Author: EZSlaver 
Date: 05.02.2013
Version: 0.9.0

You can use the plugin as follows:
Add the plugin to your HTML page, and do this only after you add the jQuery reference.
Now, you can use the $c() command to create your elements.
The plugin doesn't support the 'style' plugin. At least, for now...

Usage Examples:
	var div = $c("div");
	div = $c("div#foo");
	div = $c("div.bar");
	div = $c("div#foo.bar");
	div = $c("div.bar#foo");
	div = $c("div.bar#foo.foo");
	div = $c("div.bar.foo#foo");
	div = $c("div[disabled=disabled]");
	div = $c("div[disabled=disabled].bar");
	div = $c("div[disabled=disabled]#foo");
	div = $c("div[disabled=disabled]#foo.bar");
	div = $c("div[disabled=disabled][selected=true]#foo.bar");
	div = $c("div[disabled=disabled][selected=\"true\"]#foo.bar");
	div = $c("div[disabled=disabled][selected=\"very true\"]#foo.bar");
	div = $c("div[disabled=disabled][selected=\"very:true\"]#foo.bar");

