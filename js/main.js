//check du lieu
document.getElementById("checkTL").onclick = function(){
    document.getElementById("checkTR").checked = false
    document.getElementById("checkBR").checked = false
    document.getElementById("checkBL").checked = false
}
document.getElementById("checkTR").onclick = function(){
    document.getElementById("checkTL").checked = false
    document.getElementById("checkBR").checked = false
    document.getElementById("checkBL").checked = false
}
document.getElementById("checkBL").onclick = function(){
    document.getElementById("checkTR").checked = false
    document.getElementById("checkTL").checked = false
    document.getElementById("checkBR").checked = false
}
document.getElementById("checkBR").onclick = function(){
    document.getElementById("checkTR").checked = false
    document.getElementById("checkTL").checked = false
    document.getElementById("checkBL").checked = false
}


document.getElementById("checklogo2").onclick = function(){
    document.getElementById("checklogo1").checked = false
    document.getElementById("logo__location").style.display ="none"
}

document.getElementById("checklogo1").onclick = function(){
    document.getElementById("checklogo2").checked = false
    if(document.getElementById("checklogo1").checked == true){
        document.getElementById("logo__location").style.display ="block"
    }else{
        document.getElementById("logo__location").style.display ="none"
    }
}
var menu = false
document.getElementById("checkmenu").onclick = function(){
   if(menu==false){
    document.getElementById("menu").style.display = "block"
    menu = true
   }else{
    document.getElementById("menu").style.display = "none"
    menu = false
   }
}
