function saveStorage(id){
	var target = document.getElementById(id);
	var str = target.value;
	sessionStorage.setItem("message",str);
	}
	
function loadStroage(id){
	var target = document.getElementById(id);
	var msg = sessionStorage.getItem("message");
	alert(msg)
	target.innerHML = msg;
	}