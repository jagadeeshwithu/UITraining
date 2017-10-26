function ajax(method, url, successFunctionRef, errorFunctionRef){	
	var xhr = new XMLHttpRequest();

	xhr.open(method, url);

	xhr.onreadystatechange = function(xhrRef, errorObject) {
		
		if ((xhr.status == 200) && (xhr.readyState == 4)){
			if(typeof successFunctionRef == "function")
				successFunctionRef(xhr);
		} else if ((xhr.status != 200) && (xhr.readyState == 4)){
			if(typeof errorFunctionRef == "function")
				errorFunctionRef(errorObject);
		}
	};
}

ajax(
	"GET",
	"https://reqres.in/api/users?page=2",
	function(xhr){
		var responseObject = JSON.parse(xhr.response);	
		
		var arrayOfUserObjects = responseObject.data;
		var namesContainerDiv = document.getElementById("namesContainer");
		
		if(arrayOfUserObjects instanceof Array){
			for(var i = 0; i < arrayOfUserObjects.length; i++){
				var userObject = arrayOfUserObjects[i];
				var userNameHoldingDiv = document.createElement("div");//<div class="nameslist">&nbsp;</div>
				
				userNameHoldingDiv.setAttribute("class", "nameslist");
				namesContainerDiv.appendChild(userNameHoldingDiv);
				
				userNameHoldingDiv.innerHTML = userObject.first_name;
			}
		}
	}
);

