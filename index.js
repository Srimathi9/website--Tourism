var sidenav = document.querySelector(".side-navbar")

function shownavbar(){
    sidenav.style.left="0"
}

function closenavbar(){
    sidenav.style.left="-60%"
}

var div1 = document.getElementById("con1")
var div2 = document.getElementById("con2")
var div3 = document.getElementById("con3")
var display1 = document.getElementById("dis1")
var display2 =document.getElementById("dis2")
var display3 =document.getElementById("dis3")

display1.addEventListener("click",function(){
    div2.style.display="none"
    div3.style.display="none"
    div1.style.display = "block";
    
})

display2.addEventListener("click", function() {
    div1.style.display = "none";
    div3.style.display = "none";
    div2.style.display = "block";
});
display3.addEventListener("click", function() {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
});