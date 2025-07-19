function sub() {
	let frm = document.forms['contactus'];
	var fullname = frm['fullname'].value
	var email = frm['email'].value
	var msg = frm['message'].value
	var req = "Name: " + fullname + "%0A%0AEmail: " + email + "%0A%0AMessage: " + msg
	var url = "https://frost.alwaysdata.net/contact.php?"+req
	fetch(url)
	alert("Message sent!")
}

async function simulateTyping(elementID, editText, timeout) {

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const domElement = document.getElementById(elementID)
	let textString = ""
	const ignoreUpdate = ['<','>']

	for (i=0; i<editText.length; i++) {
		textString += editText[i]
		if (!ignoreUpdate.includes(editText[i])) {
			domElement.innerHTML = textString + "|"
		}
		await sleep(timeout)
	}

	domElement.innerHTML = textString
}
