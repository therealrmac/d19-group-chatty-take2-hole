console.log("testing load.js");

var Chatty = (function(chat){

	var messages = [];

		chat.loadMessages= function (callBack){
			var loader = new XMLHttpRequest();
      		loader.open("GET", "messages.json");
      		loader.send();
      		loader.addEventListener("load", function (){
      			messages = JSON.parse(this.responseText).message;
      			callBack(messages);
      		});
      		loader.addEventListener("error", function(event){
            console.log("Data did not load");
        	});
		}

	return chat;

})(Chatty || {});