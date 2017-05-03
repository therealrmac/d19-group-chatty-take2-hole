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

        //This is what Ryan was originally doing. ........
        //had to make some change because there was some definite unexpected behavior when messages were deleted. Instead, grabbed all the div tags which return an array, then said if the length of that array becomes greater than 20 remove the first index.
            var messageCount = output.getElementsByTagName("div");
            if (messageCount.length > 20) {
                output.removeChild(messageCount[0]);
            }
//                var firstChildDIV;
//                output.removeChild(firstChildDIV);

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
