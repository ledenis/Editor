var isHtmlMode = false;
var frameDoc; // frame.document
var frameWin; // frame.window

document.onreadystatechange = function() {
	frameDoc = frameContent.document;
	frameDoc.designMode = "On";
	
	document.getElementById('switchMode').onclick = function() {
		isHtmlMode = !isHtmlMode;
		setHtmlMode(isHtmlMode);
	};
	
	document.getElementById('bold').onclick = function() {
		frameContent.document.execCommand('bold');
	};
};

function setHtmlMode(mode) {
	var content = '';
	if (mode) { // HTML mode
		// show the HTML text
		content = frameDoc.body.innerHTML;
		frameDoc.body.innerText = content;
		frameDoc.body.textContent = content;
	}
	else { // Text mode
		content =  frameDoc.body.textContent || frameDoc.body.innerText;
		frameDoc.body.innerHTML = content;
	}
}
