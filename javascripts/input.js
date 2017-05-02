console.log('input has loaded');

var Chatty= (function(altchatty){
	var messageArr=[];
	var counter=1;
	altchatty.inputChange = function(elementid,message){
			var outputDOM= document.getElementById(elementid);
			outputDOM.innerHTML+= `<div id='newMessage--${counter}'>
				<span>${message}</span>
				<button>Delete</button>
				</div>`;
			var newMessage= document.getElementById("newMessage--"+counter);
			messageArr.push({id: `newMessage--${counter}`,span: message});
			counter++;
			console.log(messageArr);	
		}
	altchatty.privArr= function(argID){
		for(var i=0; i< messageArr.length; i++){
			if(messageArr[i].id=== argID){
				messageArr.splice(i,1);
				break;
				console.log(messageArr[i]);
			}
		}
	}
	return altchatty;
})(Chatty || {});