var placecontainer=document.getElementById("place")
var search=document.getElementById("search")
var placelist =placecontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var eneterdvalue=event.target.value.toUpperCase()

    for(count=0;count<placelist.length;count++){
        var placename= placelist[count].querySelector("button").textContent

        if(placename.toUpperCase().indexOf(eneterdvalue)<0){
            placelist[count].style.display="none"
        }
        else{
            placelist[count].style.display="block"
        }
    }
})