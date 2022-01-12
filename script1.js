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
            tdtag.id = "click";
            tdtag.onclick="Mouseevent()"
            trtag.appendChild(tdtag);
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