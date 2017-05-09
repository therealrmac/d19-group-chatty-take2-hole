console.log("testing load.js");

var Chatty = (function(chat){

	var messages = [];

		chat.loadMessages= function (callBack){
      $.ajax({
        url: "messages.json",
        success: function(messages){
          callBack(messages.message)
        }
      });
    }

	return chat;

})(Chatty || {});