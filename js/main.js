//btn=button  li=list item

//Access new-item button.
var btn = document.querySelector("button");

//Access unordered list.
var list = document.getElementById("list");

//Declare variable list-item.
var li;  

function removeItem(ev) {
    
    list.removeChild(ev.target);    
}
function addItem() {
li= document.createElement("li");
li.innerHTML = prompt("Enter a new item for to-do list:");

    if(li != ""){
       
      list.appendChild(li); 
        li.addEventListener("click", removeItem, false);    
    }
}
btn.addEventListener("click", addItem, false);


