var number = 0
function genId() {
    number = number + 1
    return number
}
function list() {
    var name = document.getElementById("name").value;
    if(name)
    document.getElementById("todos").innerHTML +=
     `<li id ="item ${genId()}">
        <input type= "checkbox" id="check ${number}" onclick ="underline('item ${number}', 'check  ${number})">
        <span id='checkbox ${number}'> ${name}</span>
        <button id = "" class = "two" onclick ="del('item ${number}')">Delete</button>
    </li>` 
    // var node = document.createElement("Li");
    // var textnode = createTextNode("cooking");
    // node.appendChild(textnode);
    // document.getElementById("myInput").appendChild(node);
}
function del(item){
    document.getElementById(item).innerHTML = ""
}
function underline(checkbox, check) {
    let thisBox = document.getElementById(check)
    if (thisBox.checked == true) {
        document.getElementById(checkbox).style.textDecoration = "line-through"
    }
    else
    {
    document.getElementById(checkbox).style.textDecoration = "none"
}

