var winner = function() {alert("Winner!")};
var loser = function() {alert("Loser!")};
var a = winner;
var b = loser;
var c = loser;
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a()
