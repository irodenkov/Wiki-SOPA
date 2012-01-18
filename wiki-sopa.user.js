// ==UserScript==
// @name           WikiSOPA
// @namespace      http://en.wikipedia.org/*
// @description    Remove SOPA blackout overlay from wikipedia.
// ==/UserScript==


$(document).ready(function() {
		window.jQuery("div#mw-sopaOverlay").remove();
		window.jQuery("body>div").show();
});
