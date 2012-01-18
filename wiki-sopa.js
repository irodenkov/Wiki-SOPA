// ==UserScript==
// @name           WikiSOPA
// @namespace      http://en.wikipedia.org/*
// @description    Remove SOPA blackout overlay from wikipedia.
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==


$(document).ready(function() {
		$("div#mw-sopaOverlay").remove();
		$("body>div").show();
});
