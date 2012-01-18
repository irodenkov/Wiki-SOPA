// ==UserScript==
// @name           WikiSOPA
// @namespace      http://en.wikipedia.org/*
// @description    Remove SOPA blackout overlay from wikipedia.
// ==/UserScript==


$(document).ready(function() {
		window.$("div#mw-sopaOverlay").remove();
		window.$("body>div").show();
});
