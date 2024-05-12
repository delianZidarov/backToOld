let currentUrlObject = window.location
if (currentUrlObject){
	let domain = currentUrlObject.hostname.split(".");
	if (domain[0] != "old" &&
			currentUrlObject.pathname != "/media") {
		let newUrl = `https://old.${domain.slice(1).join(".")}${currentUrlObject.pathname}${currentUrlObject.search}`	
		window.location.href = newUrl
	}
}
