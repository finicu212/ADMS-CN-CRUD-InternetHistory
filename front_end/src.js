const mainDiv = document.querySelector("#main")

// GET all history:		http://localhost:3000/requests
// GET all users:		http://localhost:3000/users
// GET specific user:	http://localhost:3000/users/ip

fetch("http://localhost:3000/requests")
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.forEach(request => {
			const title = '<div class="entry"><h3>' + request.websitePage + '</h3> - <p>' + request.websiteName + " - " + request.updatedAt + '</p></div>\n'; 
			mainDiv.insertAdjacentHTML("beforeend", title);
		})
	})
	.catch(err => console.log(err))