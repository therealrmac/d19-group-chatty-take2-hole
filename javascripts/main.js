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