function toUpper() {
	var lower = document.getElementById("input-box").value;
	if (lower[lower.length - 1] == "?") {
		document.getElementById("output").innerHTML = "Who do you think I am? Jeeves? Jeez.";
	}
	else if (lower.slice(lower.length - 4) == " tpl") {
		toPigLatin(lower);
	}
	else if (lower === "") {
		document.getElementById("output").innerHTML = "You must enter an input.";
	}
	else if (lower.toLowerCase() == "chuck norris") {
		document.getElementById("output").innerHTML = "Cannot convert to uppercase.  CHUCK NORRIS is uppercase by default.";
		addToHistory();
		clearField();
	}
	else {
		document.getElementById("output").innerHTML = lower.toUpperCase();
		addToHistory();
		clearField();
	}
}

document.getElementById("input-box").addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode == 13) {
    	document.getElementById("button").click();
	}
});

function clearField() {
	document.getElementById("input-box").value = "";
}

function addToHistory() {
	var lower = document.getElementById("input-box").value;
	var upper = document.getElementById("output").innerHTML;
	var history = document.getElementById("history-output");
	if (lower.toLowerCase() == "chuck norris") {
		history.insertAdjacentHTML("afterBegin", "<br />" + lower.toUpperCase() + " --> " + lower.toUpperCase() + "<br />");
	}
	else {
	history.insertAdjacentHTML("afterBegin", "<br />" + lower + " --> " + upper + "<br />");  // http://jsfiddle.net/euQ5n/
	}
}

function toPigLatin(lower) {
	input = lower.slice(0, lower.length - 4);
	var inputArr = input.split(/, | /);
	var matches = input.match(/\d+/g);
	var outputArr = [];
	var output = "";
	if (matches !== null) {
		document.getElementById("output").innerHTML = "Number characters cannot be translated. Please try again.";
	}
	else {
		for (var i in inputArr) {
			outputArr.push(inputArr[i].slice(1, inputArr[i].length) + inputArr[i].slice(0, 1) + "ay");
		}
		output = outputArr.join(" ");
		document.getElementById("output").innerHTML = output;
		clearField();
	}
}

$(window).scroll(function() {
    if ($(this).scrollTop()>50)
     {
        $('.fade').css('opacity', '0');
     }
    else
     {
      $('.fade').css('opacity', '100');
     }
 });