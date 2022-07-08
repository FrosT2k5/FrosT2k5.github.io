function sub() {
	let frm = document.forms['contactus'];
	var fullname = frm['fullname'].value
	var email = frm['email'].value
	var msg = frm['message'].value
	var req = "Name: " + fullname + "%0A%0AEmail: " + email + "%0A%0AMessage: " + msg
	var url = "https://frost2k5.000webhostapp.com/contact.php?"+req
	fetch(url)
	alert("Message sent!")
}
