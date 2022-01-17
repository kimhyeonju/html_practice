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
            //tdtag.value = num;
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
var colline = document.getElementById("number").value;
var col = new Array(colline); 

for(var i=0;i<col.length;i++){
    col[i] = new Array(colline);
}

function clicktd(e){
    var td_click = e.target;
    var count = 0;
    td_click.style.color= "black";
    var secondcard = null; 
    
    let tr_index = td_click.closest("tr").rowIndex;
    let td_index = td_click.closest("td").cellIndex;

    
    col[tr_index][td_index] = 1;

    if(firstcard == null){
        firstcard = td_click;
        console.log("f",firstcard.textContent);
        console.log(tr_index, td_index);
        //console.log(col[tr_index][td_index]);
       
    }else{
        secondcard = td_click;
        console.log("s",secondcard.textContent);
        console.log(tr_index, td_index);
        //console.log(col[tr_index][td_index]);
        if(firstcard.textContent !== secondcard.textContent){
            alert("값이 다릅니다.");
            firstcard.style.color = "red"
            secondcard.style.color = "red"
            console.log(".");
            firstcard = null;
            secondcard = null;
            
        }else{
            firstcard = null;
            secondcard = null;
            
        }
    } 

    
    
}
