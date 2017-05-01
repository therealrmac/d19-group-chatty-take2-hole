console.log('input has loaded');

var Chatty= (function(altchatty){
	var messageArr=[];

	altchatty.inputChange = function(input,message){
			var output1= document.getElementById('output');
			var input=document.getElementById('input');
			input.addEventListener("keyup", function(event){
		var key = event.keyCode;
		if (key === 13) {
			// console.log("input.value",input.value);
		output1.innerHTML += input.value + "<button class='delete'>" + 'Delete' + "</button>" + "<br>";
		input.value = "";
		}
	});
}
	return altchatty;
}(Chatty || {}));