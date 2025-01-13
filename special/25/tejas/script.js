function ping() {
	let url = "https://frost.alwaysdata.net/contact.php?"+"Tejas is up"
        fetch(url)
}

function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
        }

async function simulateTyping(elementID, editText, timeout) {

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
	await sleep(1000)

	for (i=textString.length; i>=0; i--) {
		textString = textString.slice(0,i)
		if (!ignoreUpdate.includes(editText[i])) {
                        domElement.innerHTML = textString + "|"
                }
		await sleep(15)
	}

	domElement.innerHTML = textString
        await sleep(200)
}

function addFirework() {
	let fireworkDiv = document.createElement("div")
	fireworkDiv.setAttribute("class","firework")

	mainDiv = document.getElementById("fireworkContainer");
        mainDiv.append(fireworkDiv)
}

function removeFirework() {
	let fireworkDiv = document.querySelector(".firework")
	fireworkDiv.style.visibility = "hidden"
}

function revertRemove() {
	let fireworkDiv = document.querySelector(".firework");
        fireworkDiv.style.visibility = "visible";
}
