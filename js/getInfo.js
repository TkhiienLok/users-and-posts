
function httpGet(url) {

    return new Promise(function(resolve, reject) {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function() {
		if (this.status == 200) {
			resolve(this.response);
		} else {
			var error = new Error(this.statusText);
			error.code = this.status;
			reject(error);
	    }
	};

	xhr.onerror = function() {
	    reject(new Error("Network Error"));
	};

	xhr.send();
    }
	);

}

httpGet("https://jsonplaceholder.typicode.com/users")
  .then(
	response => getUsers(response),
	error => alert(`Rejected: ${error}`)
  );
  
function getUsers(res){
    const users = res;
    alert(users);
}
