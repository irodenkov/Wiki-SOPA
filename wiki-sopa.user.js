// ==UserScript==
// @name           WikiSOPA
// @namespace      http://en.wikipedia.org/*
// @description    Remove SOPA blackout overlay from wikipedia.
// ==/UserScript==


$(document).ready(function() {
		$("div#mw-sopaOverlay").remove();
		$("body>div").show();
});
