var make_button = document.getElementById("make");
make_button.addEventListener("click",maketable);

var remove_button = document.getElementById("remove");
remove_button.addEventListener("click",removetable);

function maketable(){
    var rowline = document.getElementById("number").value;
    var colline = document.getElementById("number").value;
    
    var element = document.getElementById("settable");
    var table = document.createElement("table");
    element.appendChild(table);
    for(var i=0;i<rowline;i++){
        var trtag = document.createElement("tr");
        table.appendChild(trtag);
        for(var j=0;j<colline;j++){
            var tdtag = document.createElement("td");
            var num = Math.random()<0.5?0:1;
            tdtag.innerHTML = num;
            trtag.appendChild(tdtag);
            tdtag.addEventListener("click",clicktd)
            
        }
    }
    
}
function removetable(){
    var element = document.getElementById("settable");
    var input = document.getElementById("number");
    input.value = null;
    while(element.hasChildNodes){
        element.removeChild(element.firstChild);
    }
    

}
var firstcard = null;

function clicktd(e){
    var td_click = e.target;
    var con = td_click.textContent;
    td_click.style.color= "black";
    var secondcard = null; 

    if(firstcard == null){
        firstcard = td_click.textContent;
        console.log("f",firstcard);
    }else{
        secondcard = td_click.textContent;
        console.log("s",secondcard);
        if(firstcard !== secondcard){
            alert("값이 다릅니다.");
            td_click.style.color = "red"
            console.log(".");
            firstcard = null;
            secondcard = null;
        }else{
            firstcard = null;
            secondcard = null;
        }
    
    } 
   
    
    
}