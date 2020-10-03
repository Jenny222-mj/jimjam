var number = 0
function genId() {
    number = number + 1
    return number
}
function list() {
    var name = document.getElementById("name").value;
    document.getElementById("todos").innerHTML +=
     `<li id ="item ${genId()}">
        <input type="checkbox" name="" id="">
        <span>${name}</span>
        <button id = "" onclick ="del('item ${number}')">Delete</button>
    </li>` 
    // var node = document.createElement("Li");
    // var textnode = createTextNode("cooking");
    // node.appendChild(textnode);
    // document.getElementById("myInput").appendChild(node);
}
function del(item){
    document.getElementById(item).innerHTML = ""
}

