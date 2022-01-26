var modal = document.getElementById("modal");
var button1 = document.getElementById("enroll");
var button2 = document.getElementById("close");
button1.onclick = function(){
    modal.style.display = "block";
}
button2.onclick = function(){
    modal.style.display = "none";
}