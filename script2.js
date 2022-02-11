var modal = document.getElementById("modal");
var button1 = document.getElementById("enroll");
var button2 = document.getElementById("close");
button1.onclick = function(){
    modal.style.display = "block";
}
button2.onclick = function(){
    modal.style.display = "none";
    document.getElementById("name").value = null;
    document.getElementById("cost").value = null;
    document.getElementById("count").value = null;
    document.getElementById("image").value = null;
}

var save_bnt = document.getElementById("save");
save_bnt.addEventListener("click",save);

function save(){
    //var image = document.getElementById("image")
    var name = document.getElementById("name").value;
    var name_1 = isNaN(name);
    var cost = document.getElementById("cost").value;
    var cost_1 = isNaN(cost);
    var count = document.getElementById("count").value;
    var count_1 = isNaN(count);
    var file = document.getElementById("image").value;
    var cnt = 0;
    //상품 이미지
    var check = file.split(".")[1];
    if(!file){
        alert("상품 이미지를 추가하시오.")
        //console.log("1")
        cnt++
    }else{
        if(check != "jpg"&&check !="png"&&check !="jpeg"){
            alert("이미지 파일이 아닙니다. ‘jpg’, ‘jpeg’ 또는 ‘png’을 확장자로 가진 파일을 추가하시오")
            cnt++
        }
    }
    //상품 이름
    if(name ==""){
        alert("상품 이름을 입력하시오.");
        cnt++
    }else{
        if(name_1 == false){
            alert("문자로 된 상품 이름을 입력하시오.");
            cnt++
        }
    }
    //상품 가격
    if(cost_1 == true){
        alert("상품 가격에 숫자를 입력하시오.");
        cnt++
    }else if(cost == ""){
        alert("상품 가격을 입력하시오.")
        cnt++
    }else{
        if(cost < 100){
            alert("상품 가격을 100원 이상으로 입력하시오.");
            cnt++
        }
    }
    //상품 개수
    if(count_1==true){
        alert("상품 개수에 숫자를 입력하시오.")
        cnt++
    }else if(count == ""){
        alert("상품 개수를 입력하시오.")
        cnt++
    }else{
        if(count > 100){
            alert("최대 100개 이하로 입력하시오.")
            cnt++
        }
    }
    if(cnt == 0){
        modal.style.display = "none";
        enroll_table();
    }
}

function enroll_table(){
    var name = document.getElementById("name").value;
    
    var cost = document.getElementById("cost").value;
    
    var count = document.getElementById("count").value;
    
    var file = document.getElementById("image");

    var settable = document.getElementById("table_enroll");
    var table = document.createElement("table");
    table.className = "table1"
    table.id = "table11";
    settable.appendChild(table);
    var trtag1 = document.createElement("tr");
    trtag1.className = "table1"
    table.appendChild(trtag1);
    var trtag2 = document.createElement("tr");
    trtag2.className = "table1"
    trtag2.id = "trtag22";
    table.appendChild(trtag2);
    var trtag3 = document.createElement("tr");
    trtag3.className = "table1"
    trtag3.id = "trtag33";
    table.appendChild(trtag3);
    var trtag4 = document.createElement("tr");
    trtag4.className = "table1"
    trtag4.id = "trtag44";
    table.appendChild(trtag4);
    var trtag5 = document.createElement("tr");
    trtag5.className = "table1"
    trtag5.id = "trtag55";
    table.appendChild(trtag5);
    var trtag6 = document.createElement("tr");
    trtag6.className = "table1"
    trtag6.id = "trtag66";
    table.appendChild(trtag6);
    var trtag7 = document.createElement("tr");
    trtag7.className = "table1"
    trtag7.id = "trtag77";
    table.appendChild(trtag7);
    var input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.name = "check";
    trtag1.appendChild(input1);
    var image = document.createElement("img");
    image.id = "output";
    const f = file.files;
    if(!f ||f.length ==0){
        alert("return");
       return;
    } 
    const fi = f[0];
    const reader = new FileReader();
    reader.readAsDataURL(fi);
    reader.onload = () => {
        console.log(reader.result);
        image.src = reader.result;
    };
    
    trtag2.appendChild(image);
    //image.src = file;
    //console.log(file);
    //trtag2.appendChild(image);
    trtag3.innerHTML = name;
    trtag4.innerHTML = cost+ "원";
    trtag4.value = cost;
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "input2";

    input2.value = "1";
    
    //input2.innerHTML = 개;
    trtag5.appendChild(input2);

    

    trtag6.innerHTML = "합계 "+ cost*input2.value+ "원";
    trtag7.innerHTML = "총 "+ count+ "개 남음";
    trtag7.value = count;
    //var br = document.createElement("br");
    //settable.appendChild(br);

    var cart_in = document.getElementById("in_cart");
    cart_in.addEventListener("click",cart);
}

function cart(){ 
    var name = document.getElementById("name").value;
    
    var cost = document.getElementById("cost").value;
    
    var count = document.getElementById("count").value;
    
    var file = document.getElementById("image").value;

    var input2 = document.getElementById("input2").value;
    
    var trtag7 = document.getElementById("trtag77");
    var trtag2 = document.getElementById("trtag22");
    var trtag3 = document.getElementById("trtag33");
    var trtag4 = document.getElementById("trtag44");
    var trtag5 = document.getElementById("trtag55");
    var trtag6 = document.getElementById("trtag66");
    var total = document.getElementById("total");

    total.innerHTML = null;
    

    var check_cnt = document.getElementsByName("check").length;
    var table1 = document.getElementById("table11");
    var table2 = document.getElementById("table22");
    for(var i=0;i<check_cnt;i++){
        
        //var newCell1 = newRow.insertCell(0);
        //var newCell2 = newRow.insertCell(1);
        //var newCell3 = newRow.insertCell(2);
        //var newCell4 = newRow.insertCell(3);
        //var newCell5 = newRow.insertCell(4);
        //var newCell6 = newRow.insertCell(5);
        var ck = document.getElementsByName("check")[i];
        console.log("2222");
        console.log(ck.checked);
        if(ck.checked == true){
            var newRow = table2.insertRow(table2.rows.length-1);
            var newCell1 = newRow.insertCell(0);
            var newCell2 = newRow.insertCell(1);
            var newCell3 = newRow.insertCell(2);
            var newCell4 = newRow.insertCell(3);
            var newCell5 = newRow.insertCell(4);
            var newCell6 = newRow.insertCell(5);
            console.log("3333");
            //table1.rows[i+1]
            var tag1 = document.createElement("input");
            tag1.type = "checkbox";
            //tag1.attribute = "checked";
            tag1.name = "check2";
            newCell1.appendChild(tag1);
            console.log("444");
            var tt = ck.parentNode.parentNode;
            console.log(tt);
            newCell2.innerHTML = tt.rows[1].innerHTML;
            newCell3.innerHTML = tt.rows[2].innerHTML;
            newCell4.innerHTML = tt.rows[3].value;
            var tag2 = document.createElement("input");
            tag2.type = "text";
            tag2.value = tt.rows[4].firstChild.value;
            tag2.id = "tag22";
            var tag3 = document.createElement("button");
            tag3.innerHTML = "변경";
            tag3.name = "change";
            tag3.addEventListener("click",change1);
            newCell5.appendChild(tag2);
            newCell5.appendChild(tag3);
            //newCell5.innerHTML = table1.rows[4].innerText;
            console.log(tt.rows[4].firstChild.value);
            newCell6.innerHTML = tt.rows[3].value*tag2.value;
            
            tt.rows[6].innerHTML = "총 "+ (tt.rows[6].value-tag2.value) + "개 남음";
            console.log(tt.rows[6].innerHTML);

            total.innerHTML = Number(newCell6.innerHTML) + Number(total.innerHTML);
        }
        
        
    }
    
}
//var change = document.getElementsByName("change");
//change.addEventListener("click",change1);

function change1(e){
    var ch_click = e.target;
    var table2 = document.getElementById("table22");
    //var tag = document.getElementById("tag22");
    
    //선택한 행의 순서
    
    var costRow = ch_click.closest("tr").rowIndex;
    var ch_cnt = table2.rows[costRow].cells[4].firstChild.value;
    console.log(table2.rows[costRow].cells[3].innerHTML);
    var costCell = table2.rows[costRow].cells[3].innerHTML*ch_cnt;
    console.log(costCell);
    table2.rows[costRow].cells[5].innerHTML = costCell;
    total.innerHTML = null;
    var tag = table2.rows[costRow].cells[4].firstChild.value;
    //trtag7.innerHTML = "총 "+ (count-tag2.value) + "개 남음";
    console.log(tag);
    console.log(ch_click.parentNode.parentNode);
    console.log(costRow);
    console.log(ch_click.parentNode.parentNode.closest("tr").rowIndex);
    //var check_cnt = document.getElementsByName("check").length;
    //for(var i=0;i<check_cnt;i++){
    //var jj = document.getElementsByName("check").checked[i]
    
    //    var kk = jj[costRow-1].parentNode.parentNode;
     //   var reCount = kk.rows[6];
    
//}
    //console.log(reCount.value);
    var reCount = document.getElementsByName("check")[costRow-1].parentNode.parentNode.rows[6];
    reCount.innerHTML = "총 "+ (reCount.value-tag) + "개 남음";
    for(var i=1; i<=table2.rows.length-2;i++){
    total.innerHTML = Number(table2.rows[i].cells[5].innerHTML) + Number(total.innerHTML);
    }
    //trtag7.innerHTML = "총 "+ (count-tag2.value) + "개 남음";
        //newCell6.innerHTML = cost*tag2.value;
        //total.innerHTML =null;
        //total.innerHTML += newCell6.innerHTML
        
}
