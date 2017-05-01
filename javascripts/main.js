console.log("testing main.js");

var clearAll= document.getElementById('clear');
var output1= document.getElementById('output');
var output2= document.getElementById('output2');
var input=document.getElementById('input');

clearAll.addEventListener('click', function(event){
	console.log('clear button responding');
	if(output1.innerHTML== 0 || output2.innerHTML == 0){
		output1.innerHTML="";
		output2.innerHTML="";
		console.log('is this working?');
	}
	if(output1.innerHTML!= !0 || output2.innerHTML!= !0){
		event.stopPropagation(clearAll);
		console.log('how about this one');
	}
});

output1.innerHTML= "<p>" +"hello this is a test"+"</p>";


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


////testing out some stuf TL
//var holdClickedDiv;
//
//
//funcName.methodName();
//
//var clickedDeleteButton = document.getElementsByClassName("whateverClassNameis").addEventListener("click", deleteOutput);
//
//
//function deleteOutput () {
//    holdClickedDiv.event.currentTarget;
//    var removeButton =
//    for (var d = 0; 0 < holdMyVar.length; d++) {
//        holdMyVar
//    }
//}
//
//    CarLot.addStyle(holyCrapOnAStick, "red");
//
//function changeText () {
//    var holdMyCrap = holyCrapOnAStick.getElementsByTagName("p")[3];
//    console.log("what is this", holdMyCrap);
//    holdMyCrap.innerHTML = inputField.value;
