let uri = document.querySelector('textarea').value;

function send() {
	console.log(fetch(`${uri}`));
}

