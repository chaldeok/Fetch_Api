document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternalData)

function getText() {
	fetch('text.txt')
			.then(function(response) { // приходит ответ
				return response.text(); // возвращается promise
			})
			.then(function(data) {
			 	document.getElementById('output').innerHTML = data;
			})
			.catch(function(err) {
				console.log(err);
			})
}

function getJson() {
	fetch('posts.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				let output = '';
				data.forEach(function(post) {
					output += `<li>${post.title}</li>`
				});
				document.getElementById('output').innerHTML = output;
			})
			.catch(function(err) {
				console.log(err);
			})
}

function getExternalData() {
	fetch('https://api.github.com/users')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				let output = '';
				data.forEach(function(user) {
					output += `<li>${user.login}</li>`
				});
				document.getElementById('output').innerHTML = output;
			})
			.catch(function(err) {
				console.log(err);
			})
}

