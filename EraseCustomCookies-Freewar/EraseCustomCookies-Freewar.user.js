// ==UserScript==
// @name        EraseCustomCookies-Freewar
// @namespace   Zabuza
// @description Löscht die selbst erstellen Cookies am Ende einer Freewar Sitzung
// @include     *.freewar.de/freewar/index.php*
// @version     1
// ==/UserScript==

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

var value = getCookie("freewarXCommand");
if(value == "1") {
	eraseCookie("freewarXCommand");
}