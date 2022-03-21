function sub() {
	let frm = document.forms['contactus'];
	var fullname = frm['fullname'].value
	var email = frm['email'].value
	var msg = frm['message'].value
	var req = fullname + "   " + email + "   " + msg
	var url = "http://frost2k5.000webhostapp.com/contact.php?"+req
	fetch(url)
	alert("Message sent!")
}