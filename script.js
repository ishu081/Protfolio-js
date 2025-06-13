// let projectName = document.getElementById("projectName");
// let projectLink = document.getElementById("projectLink");

let inputAdd = document.getElementsById("inputAdd");



function addProject(){
    let projectName = prompt("name");
    let projectLink = prompt("link");

    if (projectName.value === "" || projectLink.value === "") {
        alert("Please fill in both fields.");
    }


    else{
    const div1 = document.createElement("div");
    div1.setAttribute("class","project-container");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", projectLink);
    anchor.setAttribute("target", "_blank");
    
    const button1 = document.createElement("button");
    button1.setAttribute("class","box");

    const h2 = document.createElement("h2");
    h2.setAttribute("class","name");
    h2.innerHTML=projectName;
    
    const button2 = document.createElement("button");
    button2.setAttribute("class","delete");
    button2.setAttribute("onclick","deleteButton(this)");
    button2.innerHTML = "Delete";

    button1.appendChild(h2);
    button1.appendChild(button2);
    anchor.appendChild(button1);
    div1.appendChild(anchor);

    const container = document.querySelector(".project-container");
    container.insertBefore(div1, container.lastElementChild);
     
    saveData();

    // projectName.value = "";
    // projectLink.value = "";
}
}

function saveData()
{
    if(h2 || projectLink){
localStorage.setItem("data",h2);
localStorage.setItem("data",projectLink);

}}
function getData()
{
    if(h2 || projectLink){
    h2.innerHTML=localStorage.getItem("data");
    // projectLink.innerHTML=localStorage.getItem("data");

}}
getData();