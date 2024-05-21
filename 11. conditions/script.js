var item = document.getElementById("item")
var addItem = document.getElementById("addItem")
var box = document.getElementById("box")
addItem.addEventListener("click", function(){
    console.log(item.value)
    var paragraph =document.createElement("p")
    paragraph.innerText = item.value
    box.appendChild(paragraph)
})