var isHtmlMode = false;

document.onreadystatechange = function() {
	frameContent.document.designMode = "On";
	
	document.getElementById('switchMode').onclick = function() {
		isHtmlMode = !isHtmlMode;
		setHtmlMode(isHtmlMode);
	};
};

function setHtmlMode(mode) {
	var content = '';
	if (mode) { // HTML mode
		// show the HTML text
		content = frameContent.document.body.innerHTML;
		frameContent.document.body.innerText = content;
	}
	else { // Text mode
		content = frameContent.document.body.innerText;
		frameContent.document.body.innerHTML = content;
	}
}
