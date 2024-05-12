let currentUrlObject = window.location
if (currentUrlObject){
	let domain = currentUrlObject.hostname.split(".");
	if (domain[0] != "old") {
		let newUrl = `old.${domain.slice(1).join(".")}/${currentUrlObject.pathname}`
		window.location.replace(newUrl)
	}
}
