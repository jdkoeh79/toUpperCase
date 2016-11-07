function toUpper() {
	var lower = document.getElementById("input-box").value;
	if (lower[lower.length - 1] == "?") {
		document.getElementById("output").innerHTML = "Who do you think I am? Jeeves? Jeez.";
	}
	else if (lower == "") {
		document.getElementById("output").innerHTML = "You must enter an input.";
	}
	else if (lower.toLowerCase() == "mikhael") {
		document.getElementById("output").innerHTML = "Web developer. Network Admin. Printer repair man!";
		clearField();
	}
	else if (lower.toLowerCase() == "justin") {
		document.getElementById("output").innerHTML = "Aspiring Web Developer and Author of this page.";
		clearField();
	}
	else if (lower.toLowerCase() == "danny") {
		document.getElementById("output").innerHTML = "They say he fought a bear and lived... with one hand tied behind his back!";
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
	history.insertAdjacentHTML("afterBegin", "<br />" + lower + " --> " + upper + "<br />");  // http://jsfiddle.net/euQ5n/
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