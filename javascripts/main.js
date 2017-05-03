console.log("testing main.js");

var clearAll= document.getElementById('clear');
var output= document.getElementById('output');
var input=document.getElementById('input');

//global var to hold span element once we click edit
var span;


output.addEventListener('click', function(event){
    if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Delete") {
        Chatty.deleteFromDom(event);
    }else if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Edit") {
        input.focus();
        console.log("testing event", event.target);
        editBTN = event.target.parentElement.firstChild.innerHTML;
        input.value = editBTN;
        span = event.target.parentElement.firstChild;

    }

});



//makes delete and edit button work like a mofo asshole
input.addEventListener("keyup", function(event){
	var key = event.keyCode;

    if (key === 13 && span == null) {
        Chatty.inputChange('output', input.value);
        input.value="";
    }else if (key === 13 && span != null) {
        span.innerHTML = input.value;
        span = null;
        input.value="";
    }
});



clearAll.addEventListener('click', function(event){
	console.log('clear button responding');
	if(output.innerHTML== 0 || output2.innerHTML == 0){
		output.innerHTML="";
		console.log('is this working?');
	}

	console.log(output.innerHTML);
});


//**** AR - When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.

var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

var bodyStyle = document.getElementById("ar-bodyStyle");
var messageArea = document.getElementById("messageArea");

darkTheme.addEventListener("click", function() {
	var themeVal = darkTheme.value;
	if (themeVal == 1) {
		event.target.closest("body").classList.toggle("ar-bodyStyle");
	}
})

largeText.addEventListener("click", function() {
	var textVal = largeText.value;
	if (textVal == 2) {
		messageArea.classList.toggle("ar-fontSize");
	}
})

//**** AR


///adds message from input to output2 Div

function jsonMessage (messages){
	var divContent;
	var text= messages;
	for(var i=0; i< text.length; i++){
		divContent= "<div>"+"<span>"+ text[i].text+"</span>"+ "<button class='delete'>" + 'Delete' + "</button>" + "<button>Edit</button>" +"<br>"+"</div>";
		output.innerHTML+= divContent;
		console.log(divContent);
	}
}
Chatty.loadMessages(jsonMessage);

