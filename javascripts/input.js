console.log('input has loaded');

var Chatty= (function(altchatty){
	var messageArr=[];
	var counter=1;
	altchatty.inputChange = function(elementid,message){
			var outputDOM= document.getElementById(elementid);
			outputDOM.innerHTML+= `<div id='newMessage--${counter}' class='tl-style-div'>
				<span>${message}</span>
                <br>
				<button>Delete</button>
				<button>Edit</button>
				</div>`;
        //this adds darkTheme toggle to new meassage buttons
        var themeDiv = document.getElementById('newMessage--' + counter);
            if (darkTheme.checked) {
                var newMessageButt = themeDiv.getElementsByTagName("button");
                newMessageButt[0].classList.toggle("tl-button");
                newMessageButt[1].classList.toggle("tl-button");
            }

        //grabbed all the div tags which return an array, then said if the length of that array becomes greater than 20 remove the first index.
            var messageCount = output.getElementsByTagName("div");
            if (messageCount.length > 20) {
                output.removeChild(messageCount[0]);
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
