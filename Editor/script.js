var isHtmlMode = false;
var frameDoc; // frame.document
var frameWin; // frame.window

document.onreadystatechange = function() {
	frameDoc = frameContent.document;
	frameWin = frameContent.window;
	frameDoc.designMode = "On";
	
	// force to use paragraph tags (FF and Chrome)
	frameWin.focus();
	frameDoc.execCommand('formatblock', false, 'p');
	
	document.getElementById('switchMode').onclick = function() {
		isHtmlMode = !isHtmlMode;
		setHtmlMode(isHtmlMode);
	};
	
	document.getElementById('bold').onclick = function() {
		insertBold();
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

function insertBold() {
	var range;
	if (window.getSelection) { // FF, Safari, Opera
		// create element to insert
		var element = frameDoc.createElement('strong');
		
		// get range
		range = frameWin.getSelection().getRangeAt(0);
		
		// insert element
		range.surroundContents(element);
	}
	else { // IE
		range = frameDoc.selection.createRange();
		
		range.pasteHTML('<strong>'+ range.htmlText+'</strong>');
	}
}
