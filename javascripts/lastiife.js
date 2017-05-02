console.log('last iife loaded');
var Chatty= (function(blah){

	blah.deleteFromDom= function(event){
		var findId= event.target.closest('div');
		console.log("testing 123",findId);
		//var message= document.getElementById(parentID);
		output.removeChild(findId);
	}

return blah;
})(Chatty || {});