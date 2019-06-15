
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
  
var usersAmount;
/* getting JSON of all users  */
function getUsers(res){
    const users = JSON.parse(res);
    alert(users.length);
	usersAmount = users.length;
}

/* getting title and txt of a specific user, id is taken from text input */
window.onload = function(){
    document.getElementById("open").onclick = function fun(){
	    var x = document.forms["myForm"]["user_id"].value;
		console.log(x,typeof(x),Number(x) > 0 && Number(x) <= usersAmount);
		
		var theurl2 = "https://jsonplaceholder.typicode.com/posts?userId=" + x;
		
		httpGet(theurl2)
		.then(
			function(response){			
				var response1 = JSON.parse(response);
				for(var item in response1) {
					
					var div = document.createElement('div');
					div.className = "title";
					div.innerHTML = response1[item].title;
					posts.appendChild(div);
					
					var div = document.createElement('div');
					div.className = "body";
					div.innerHTML = response1[item].body;
					posts.appendChild(div);
								
					
				}
						
			},
			error => alert(`Rejected: ${error}`)
		)
		
		
	    
	}
}

