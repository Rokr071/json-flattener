function mainFunction() {
	try {
		var arr =JSON.parse(document.getElementById("inputBox").value);
		flatten(arr);
	} catch(error) {
		console.error(error);
		alert("Invalid Input !!");
	}
}

function flatten(arr) {

	console.log("flattening ... ");
	try {
		var flattened = [].concat.apply([], arr);

		// pretty printing is natively present in stringify
		// spacing level = 2 or '\t'
		var jsonStr = JSON.stringify(flattened, null, 1);

		document.getElementById("outputBox").innerHTML = jsonStr;
		document.getElementById("outputSize").innerHTML = flattened.length;
	} catch(error) {
		console.error("error while flattening: ", error);
	}
	
}

function formatInput() {
	var inputJson = JSON.parse(document.getElementById("inputBox").value);
	var jsonStr = JSON.stringify(inputJson, null, 1);
	console.log("formatting input..");
	document.getElementById("inputBox").value = jsonStr;
	document.getElementById("inputSize").innerHTML = inputJson.length;
}

function copyOutput() {
	var copyText = document.getElementById("outputBox");
	// select the text field
	copyText.select();

	// copy text inside text field
	document.execCommand("copy");
	// copyText.setSelectionRange(0, 99999); /*For mobile devices*/
	console.log("copied the output");
}
