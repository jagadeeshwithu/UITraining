//console.log(1);

var xhr = new XMLHttpRequest();

//console.log(2);

xhr.open("GET", "https://reqres.in/api/users?page=2");

//console.log(3);

xhr.onreadystatechange = function(xhrRef, errorObject) {
	
	if ((xhr.status == 200) && (xhr.readyState == 4)){
		//console.log(4, "ajax success case");
		//console.log("xhr.readyState",xhr.readyState);
		var responseObject = JSON.parse(xhr.response);	
		
		var arrayOfUserObjects = responseObject.data;
		var namesContainerDiv = document.getElementById("namesContainer");
		
		if(arrayOfUserObjects instanceof Array){
			for(var i = 0; i < arrayOfUserObjects.length; i++){
				var userObject = arrayOfUserObjects[i];
				var userNameHoldingDiv = document.createElement("div");//<div class="nameslist">&nbsp;</div>
				
				userNameHoldingDiv.className = "nameslist";
				userNameHoldingDiv.setAttribute("class", "nameslist");
				namesContainerDiv.appendChild(userNameHoldingDiv);
				//userNameHoldingDiv.style.display = "inline";//css takes care of it, js only sets the class of a new element at runtime
				
				userNameHoldingDiv.innerHTML = userObject.first_name;
			}
		}
		
		
	} else if ((xhr.status != 200) && (xhr.readyState == 4)){
		//console.log(4, "ajax error case");
		console.log(errorObject.message);
	}
};

/*
xhr.readyState 5-step process and undergoes value changes 4 times (between 5 values)

0 : Before Sending Ajax request (still at Client side)
1 : Sending the Ajax request (client is still in the process of sending requests to server/ on going request)
2 : Sent (client completely sent Ajax request to the server/ Any error after this is not responsibility of client ==> errors can be due to server or network)
3 : Receiving (server has started processing the request, server has started sending the response, client has started receiving the response)
4 : Received (server has completely sent the response to the client / client has completely received the response) /Ajax request is done or completed.

*/

console.log(5);

xhr.send();

console.log(6);

/*
REST = REstitutional State Transfer is a protocol to communicate between http servers and http clients, often used with AJAX calls

if a server is said to be RESTified, it is supposed to support AT LEAST the following 4 REST VERBS, also called as REST methods in client side terminology:
1) GET
2) POST
3) PUT
4) DELETE

These 4 verbs correspond to 4 operations of RDBMS, which are CRUD => POST = CREATE, GET = RETRIEVE, PUT = UPDATE, DELETE = DELETE

 (modern day restified servers often support only 2 verbs/methods => only GET & POST. They simulate PUT with POST & DELETE with GET, with special parameters passed additionally. for example, if a normal get method looks like this : 
 GET "/api/abc"
 DELETE is implemented with GET like this : GET "/api/abc?delete=true" or GET "/api/abc?operation=delete"
 &
 if a normal post looks like this : POST "/api/submitApplicationForm" with data : {name : "Jag", age : 23, need_credit_card : true} ... PUT is implemented with POST like this : POST  "/api/submitApplicationForm" with data : { name : "Jagadeesh", operation : "update" }
 )

OPTIONALLY that RESTIFIED server may support additional verbs
5) HEAD -> similar to client TCP/IP ping which is responded by server with TCP/IP ack
6) OPTIONS -> when client sends an OPTIONS REST verb/method to server, server should reply with what other VERBS are available
*/