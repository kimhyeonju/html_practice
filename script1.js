var make_button = document.getElementById("make");
make_button.addEventListener("click",maketable);

var remove_button = document.getElementById("remove");
remove_button.addEventListener("click",removetable);

function maketable(){
    var rowline = document.getElementById("number").value;
    var colline = document.getElementById("number").value;
    
    var element = document.getElementById("settable");
    var table = document.createElement("table");
    table.id = "table1";
    element.appendChild(table);
    for(var i=0;i<rowline;i++){
        var trtag = document.createElement("tr");
        table.appendChild(trtag);
        
        for(var j=0;j<colline;j++){
            var tdtag = document.createElement("td");
            tdtag.id = "td1";
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
    bingo = true;
    input.value = null;
    document.getElementById("line").innerHTML = "총 0 개의 줄이 완성되었습니다.";
    while(element.hasChildNodes){
        element.removeChild(element.firstChild);
    }
    

}
var firstcard = null;

var bingo = true;

function clicktd(e){
    if(bingo){
    var td_click = e.target;
    //var count = 0;
    td_click.style.color= "black";
    var secondcard = null; 
    
    var tr_index = td_click.closest("tr").rowIndex;
    var td_index = td_click.closest("td").cellIndex;

    var table = document.getElementById("table1")
    table.rows[tr_index].cells[td_index].value = 1;
    
    if(firstcard == null){
        firstcard = td_click;
        //console.log("f",firstcard.textContent);
        //console.log(tr_index, td_index);
        //console.log(table.rows[tr_index].cells[td_index].value);
       
    }else{
        secondcard = td_click;
        //console.log("s",secondcard.textContent);
        //console.log(tr_index, td_index);
        //console.log(table.rows[tr_index].cells[td_index].value);
        if(firstcard.textContent !== secondcard.textContent){
            alert("값이 다릅니다.");
            firstcard.style.color = "white"
            secondcard.style.color = "white"
            //console.log(".");
            table.rows[firstcard.closest("tr").rowIndex].cells[firstcard.closest("td").cellIndex].value = null;
            table.rows[secondcard.closest("tr").rowIndex].cells[secondcard.closest("td").cellIndex].value = null;
            //console.log(table.rows[firstcard.closest("tr").rowIndex].cells[firstcard.closest("td").cellIndex].value);
            //console.log(table.rows[secondcard.closest("tr").rowIndex].cells[secondcard.closest("td").cellIndex].value);
            firstcard = null;
            secondcard = null;
            
        }else{
            firstcard = null;
            secondcard = null;
            bingoCheck();

            

        }
    } 
    }
}


function bingoCheck() {
    var colline = document.getElementById("number").value;
    var row = 0;
    var col = 0;
    var cross = 0;
    var right = 0;
    var left = 0;
    var table = document.getElementById("table1");
    //가로
    for(var i=0; i< colline;i++){
        var check = false;
        for(var j=0;j<colline;j++){
            if(table.rows[i].cells[j].value ==1){
                check = true;
            }else{
                check = false;
                break;
            }
        }
        if(check) row++;
        //console.log("row",row);
        
    }
    //세로
    for(var i=0; i< colline;i++){
        var check = false;
        for(var j=0;j<colline;j++){
            if(table.rows[j].cells[i].value ==1){
                check = true;
            }else{
                check = false;
                break;
            }
        }
        if(check) col++;
        //console.log("col",col);

    }
    //대각선_왼쪽에서 오른쪽
    for(var i=0; i< colline;i++){
        if(table.rows[i].cells[i].value ==1){
            right++; 
        }
    }
    if(right==colline){
        cross++;
        //console.log("c1",cross);
    }

    //대각선_오른쪽에서 왼쪽
    for(var i=0; i< colline;i++){
        if(table.rows[i].cells[colline-1-i].value ==1){
            left++;
        }
    }
    if(left==colline){
        cross++;
        //console.log("c2",cross);
    }
            
        
    

    

    if(cross+row+col>=4){
        //console.log("합",cross+row+col);
        alert("BINGO!")
        document.getElementById("line").innerHTML = "총 "+ (cross+row+col) +"개의 줄이 완성되었습니다.";
        bingo = false;
        
    }
    
}