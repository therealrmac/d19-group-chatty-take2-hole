console.log('input has loaded');

var Chatty= (function(altchatty){
	var messageArr=[];
	var counter=1;
	altchatty.inputChange = function(elementid,message){
			var outputDOM= document.getElementById(elementid);
			outputDOM.innerHTML+= `<div id='newMessage--${counter}'>
				<span>${message}</span>
				<button>Delete</button>
				<button>Edit</button>
				</div>`;

        //This is what Ryan was originally doing. so when the counter variable reaches 15 the output element removes it's first child...which is a div...this way only 20 messages will show on the screen
            if (counter >= 15 ) {
                var firstChildDIV = output.firstElementChild;
                output.removeChild(firstChildDIV);
            }
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
