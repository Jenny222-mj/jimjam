function list() {
    var name = document.getElementById("name").value;
    document.getElementById("myInput").innerHTML = name;
    var node = document.createElement("Li");
    var textnode = createTextNode("cooking");
    node.appendChild(textnode);
    document.getElementById("myInput").appendChild(node);
}

