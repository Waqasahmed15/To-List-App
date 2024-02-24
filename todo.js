// function addTodo() {
//   var userText = document.querySelector("#useText").value;
//   var list = document.querySelector(".list");
//   var li = document.createElement("li");
//   var check = list.appendChild(li);
//   var liText = check.append(userText);
//   var editbtn = document.createElement("button");
//   var editbtnText = document.createTextNode("Edit");
//   var deletebtn = document.createElement("button");
//   var deletebtnText = document.createTextNode("Delete");
//   list.appendChild(editbtn);
//   list.appendChild(deletebtn);

//   editbtn.appendChild(editbtnText);

//   deletebtn.appendChild(deletebtnText);

//   deletebtn.addEventListener("click", () => {
//     list.innerHTML = "";
//   });
// }

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
  // dabba.style.height = "50px";
}
