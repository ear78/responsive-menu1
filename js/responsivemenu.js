



var open = function(){
	modal.style.display = "block"; //open the modal window
}

var close = function(){
	modal.style.display = "none"; //close the modal window
}

// Close modal when user clicks outside of the modal window
window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}

// Variables for Modal Function
var modal = document.getElementById('myModal'); //get the modal to show or hide

var modalBtn = document.getElementById('active');//trigger the open button with the id active
modalBtn.onclick = open;

var closeBtn = document.getElementsByClassName('close')[0];//trigger the close button with the id closeBtn
closeBtn.onclick = close;