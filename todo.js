function addTodo() {
  var userText = document.querySelector("#useText");
  var list = document.querySelector(".list");
  var li = document.createElement("li");
  var check = list.appendChild(li);
  var liText = check.append(userText.value);
  var editbtn = document.createElement("button");
  var editbtnText = document.createTextNode("Edit");
  var deletebtn = document.createElement("button");
  var deletebtnText = document.createTextNode("Delete");
  li.appendChild(editbtn);
  li.appendChild(deletebtn);

  editbtn.appendChild(editbtnText);

  deletebtn.appendChild(deletebtnText);
  deletebtn.setAttribute("onclick", "deletbtn()");
  editbtn.setAttribute("onclick", "editbtn()");
  userText.value = "";
}
function deletbtn() {
  event.target.parentNode.remove();
}
function editbtn() {
  var oldText = event.target.parentNode.firstChild.nodeValue;

  var editText = prompt("Enter Your Update Value", oldText);
  event.target.parentNode.firstChild.nodeValue = editText;
}
// get and set attributte//
// var div = document.querySelector("div");
// div.classList.add("xyz");
// div.classList.add("main");
// div.classList.remove("xyz");
// div.style.background = "cyan";
// console.log();

var btn = document.createElement("button");
btn.innerText = "click me";
document.body.appendChild(btn);
var setAtt = btn.setAttribute("onclick", "adddabba()");

function adddabba() {
  var dabba = document.createElement("div");
  document.body.appendChild(dabba);
  dabba.style.border = "2px solid red";
  dabba.style.width = "100px";
  dabba.style.height = "100px";
}
