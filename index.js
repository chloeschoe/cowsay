var exec = require('child_process').exec;
var cowsay = require("cowsay");
var moo = 'say -v Daniel  ';

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

function speak(whatosay) {
	
	exec (moo + whatosay);

	console.log(whatosay)
}

speak("Mooooo, my grandfather was a knight. His name was sir loin.");

