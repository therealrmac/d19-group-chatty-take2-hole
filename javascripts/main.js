console.log("testing main.js");

var clearAll= $("#clear");
var output= $("#output");
var input= $("#input");

//global var to hold span element once we click edit
var span;


output.on('click', function(event){
    if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Delete") {
        Chatty.deleteFromDom(event);
    }else if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Edit") {
        input.focus();
        var editBTN = event.target.parentElement.firstElementChild.innerText;
        input.val(editBTN);
        span = event.target.parentElement.firstElementChild;

    }

});


//makes delete and edit button work like a mofo asshole
input.on("keyup", function(event){
	var key = event.keyCode;

    if (key === 13 && span == null) {
        Chatty.inputChange('output', input.val());
        input.val("");
    }else if (key === 13 && span != null) {
        $(span).text(input.val());
        span = null;
        input.val("");
    }
});



clearAll.on('click', function(event){
	console.log('clear button responding');
	if(output.html()== 0 || output2.innerHTML == 0){
		output.text("");
		console.log('is this working?');
	}

	//console.log(output.innerHTML);
});


//**** AR - When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.

var darkTheme = $("#darkTheme");
var largeText = $("#largeText");

var bodyStyle = $("#ar-bodyStyle");
var messageArea = $("#messageArea");

darkTheme.on("click", function() {
	var themeVal = darkTheme.val();
    var butts = $("#button");

	if (themeVal == 1) {
        event.target.closest("body").classList.toggle("ar-bodyStyle");
        //adding background color, border,  and font color to clear Message BTN
        var messageButt = $(".tl-message-btn");
        messageButt[0].classList.toggle("tl-message-btn-toggle");

        //adding background color, border,  and font color to clear input field, toggling same class as before
        input.toggleClass("tl-message-btn-toggle");

        //adding background color, border,  and font color to all BTNs starting at index 1, toggling same class as before
        for (var p = 1; p < butts.length; p++) {
            butts[p].toggleClass("tl-button");
        }
        // event.target.getTagName("input").classList.toggle("buttonStyle");
	}
})

largeText.on("click", function() {
	var textVal = largeText.val();
	if (textVal == 2) {
		messageArea.toggleClass("ar-fontSize");
	}
})

//**** AR


///adds message from input to output2 Div

function jsonMessage (messages){
	var divContent="";
	var text= messages;
	for(var i=0; i< text.length; i++){
		divContent+= "<div class='tl-style-div'>"+"<span>"+ text[i].text+"</span>"+"<br>"+ "<button>" + 'Delete' + "</button>" + "<button>"+'Edit'+"</button>" +"<br>"+"</div>";
		output.html(divContent);
		//console.log(divContent);
	}
}
Chatty.loadMessages(jsonMessage);

