document.getElementById("tinhTong").onclick=function(event){
    event.preventDefault();
    var objPrint=document.getElementById("printHere");
    var txtA=document.getElementById("txtA").value;
    var txtB=document.getElementById("txtB").value;

    if(txtA==""){
        alert("Nhập dữ liệu A vào");
        document.getElementById("txtA").focus();
    }
    else if(txtB==""){
        alert("Nhập dữ liệu B vào");
        document.getElementById("txtB").focus();
    }
    else{
        if(txtA!=parseInt(txtA)) {
            alert("A phải là số");
            document.getElementById("txtA").focus();
            document.getElementById("txtA").value="";
        }   
        if(txtB!=parseInt(txtB)) {
            alert("B phải là số");
            document.getElementById("txtB").focus();
            document.getElementById("txtB").value="";
        }
    }
    var res = document.createElement("div");
    res.innerHTML=tinhTong(parseFloat(txtA),parseFloat(txtB));
    objPrint.appendChild(res);
}

function tinhTong(a,b){
    return a+b;
}