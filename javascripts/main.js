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
