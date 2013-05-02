﻿(function() {
	if (!String.prototype.format) {
		String.prototype.format = function(negativeNumbers /*In regex string {1} has a meaning and cannot be replaced. Thus this should be {0}, {-1} and so on.*/) {
			var modifier = 1;
			var args = $.makeArray(arguments);
			if (typeof negativeNumbers == "boolean") {
				modifier = -1;
				args = args.slice(1);
			}
			var s = this;
			for (var i = 0; i < args.length; i++) {
				while (s.indexOf("{" + (i * modifier) + "}") != -1)
					s = s.replace("{" + (i * modifier) + "}", args[i].toString());
			}
			return s;
		};
	}

	if (!String.prototype.relativeSlice) {
		String.prototype.relativeSlice = function(start, end) {
			if (end <= 0) {
				end = this.length + end;
			}
			if (start < 0) {
				start = this.length + start;
			}
			return this.slice(start, end);
		};
	}

	if (!jQuery.fn.getOrCreateChild) {
		jQuery.fn.getOrCreateChild = function(cssString) {
			var $elem = this.children(cssString);
			if ($elem.length) {
				this.append($elem = $c(cssString));
			}
			
			return $elem;
		};
	}

	var matches;
	var findCallAndRemove = function(string, regex, callback) {
		matches = string.match(regex);
		if (matches)
			callback(matches);
		return string.replace(regex, "");
	};

	window.$c = function(string) {
		string = $.trim(string);
		var cIndex = string.indexOf(',');
		if (cIndex != -1) {
			return $c(string.substring(0, cIndex)).add($c(string.substring(cIndex + 1)));
		}
		//		if (!window.$c.rSimplifiedValidArgument.test(string))
		//			throw new Error('Bad Syntax');
		var $element;
		string = findCallAndRemove(string, new RegExp("^" + window.$c.sAllAvailableTags, "ig"), function() {
			$element = $("<{0}>".format(true, matches[0]));
		});
		string = findCallAndRemove(string, new RegExp(window.$c.sSimplifedAnyProperty, "ig"), function() {
			for (var i = 0; i < matches.length; i++) {
				if (!window.$c.rAnyProperty.test(matches[i]))
					throw new Error('Bad Syntax');
				var val = matches[i].match( /=.+$/ )[0].relativeSlice(1, -1).replace(/^"|'/, "").replace(/"|'$/, "");
				$element.attr(matches[i].match(new RegExp(window.$c.sPropertyKey))[0], val);
			}
		});
		string = findCallAndRemove(string, new RegExp(window.$c.sAnyId, "ig"), function() {
			$element.attr("id", matches[0].slice(1));
		});
		string = findCallAndRemove(string, new RegExp(window.$c.sAnyClass, "ig"), function() {
			for (var i = 0; i < matches.length; i++) {
				$element.addClass(matches[i].slice(1));
			}
		});

		if (string.replace( /^\s+/ , "").replace( /\s+$/ , ""))
			throw new Error('Bad Syntax');

		return $element;
	};

	window.$c.sAnyWord = "(?:[a-zA-ZÀ-ÿ][\\w\\-]*)";
	window.$c.sAnyWordIncludingFractures = "(?:(?:[a-zA-ZÀ-ÿ][\\w\\-]*)|(?:\\d+(?:\\.\\d+))";
	window.$c.sAnyWordIncludingFracturesAndMeasurements = "(?:(?:[a-zA-ZÀ-ÿ]\\w*)|(?:\\d+(\\.\\d+)?[(?:em)(?:px)%(?:in)(?:cm)(?:mm)(?:ex)(?:pt)(?:px)(?:pc)]))";
	window.$c.sSimplifiedAnyWordIncludingFracturesAndMeasurements = "(?:(?:\\w*)|(?:\\d+(?:\\.\\d+)?(?:%|(?:[a-zA-ZÀ-ÿ]{2}))))";
	window.$c.sSimplifiedAnySentance = "(?:\\w+(?:\\s|\\w|\\:|\\;|\\/|\\\\|\\.)*)";
	//		window.$c.sAnySentanceIncludingFractures = ;

	window.$c.sAnyColor = "(?:(?:#[0-9a-fA-F]{6})|(?:r|Rg|Gb|B\\(?:{0},{0},{0}\\))".format(true, "[(?:2[(?:[0-4]\\d)(?:5[0-5])])(?:[10]\\d\\d)]");

	window.$c.sAllAvailableTags = "(?:(?:div)|(?:span)|a|(?:img)|(?:input)|(?:iframe)|(?:frame)|(?:link)|(?:meta)|(?:object)|(?:option)|(?:select)|(?:style)|(?:table)|(?:tr)|(?:th)|(?:td)|(?:tbody)|(?:thead)|(?:caption)|(?:textarea)|p|(?:h[1-6])|(?:li)|(?:ul)|(?:ol)|(?:br)|(?:form)|(?:hr))";
	window.$c.sAnyClass = "(?:\\.{0})".format(true, window.$c.sAnyWord);
	window.$c.sAnyId = "(?:#{0})".format(true, window.$c.sAnyWord);

	window.$c.sPropertyKey = window.$c.sAnyWord;
	window.$c.sPropertyValue = "(?:(?:{0})|(?:'{-1}')|(?:\"{-1}\"))".format(true, window.$c.sSimplifiedAnyWordIncludingFracturesAndMeasurements, "[\\w\\s\\.\\:\\;\\#\\\\\\/\\(\\)\\-=&\\?]*");

	window.$c.sSimplifedAnyProperty = "(?:\\[\\s*{0}\\s*=\\s*{-1}\\s*\\])".format(true, window.$c.sPropertyKey, window.$c.sPropertyValue);
	window.$c.rAnyProperty = new RegExp("(?:\\s*{0}\\s*=\\s*{-1}\\s*)".format(true, window.$c.sPropertyKey, window.$c.sPropertyValue));

	window.$c.rSimplifiedValidArgument = new RegExp("^{0}(?:{-1}|{-3})*{-2}?(?:{-1}|{-3})*$".format(true, window.$c.sAllAvailableTags, window.$c.sAnyClass, window.$c.sAnyId, window.$c.sSimplifedAnyProperty));
	//		window.$c.rSimplifiedValidArgument = new RegExp("^{0}[{-1}{-3}]*{-2}?[{-1}{-3}]*$".format(true, window.$c.sAllAvailableTags, window.$c.sAnyClass, window.$c.sAnyId, window.$c.sSimplifedAnyProperty));
}());