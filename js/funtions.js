function validar(){
var name = document.getElementById("name").value;
var pass = document.getElementById("pass").value;
if (name=="Abraham" && pass=="123") {
    alert("correct")
    window.location.href="html/main.html";
}else{
    alert("incorrect")
}

}