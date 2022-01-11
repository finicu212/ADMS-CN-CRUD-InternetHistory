const mainDiv = document.querySelector("#main")

// GET all history:		http://localhost:3000/requests
// GET all users:		http://localhost:3000/users
// GET specific user:	http://localhost:3000/users/ip

fetch("http://localhost:3000/requests")
	.then(response => response.json())
	.then(data => console.log(data))