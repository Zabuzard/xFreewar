// ==UserScript==
// @name        xFreewar
// @namespace   Zabuza
// @description Führt das Kommando /x in Freewar aus. Cookies müssen aktiviert sein
// @include     *.freewar.de/freewar/internal/frset.php*
// @include     *.freewar.de/freewar/internal/friset.php*
// @version     1
// ==/UserScript==

function chatEvent() {
	var value = getCookie("freewarXCommand");
	if(value == null || value == "") {
		chat.document.getElementsByName("chat_text")[0].value = "/x";
		chat.document.getElementsByName("sagen")[0].click();
		createCookie("freewarXCommand", "1", 1);
	}
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) {
			return unescape(y);
		}
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

var chat = window.frames[3];
if (typeof chat !== 'undefined') {
	chat.onload = chatEvent;
}