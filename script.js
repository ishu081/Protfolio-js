// let projectName = document.getElementById("projectName");
// let projectLink = document.getElementById("projectLink");

let inputAdd = document. getElementById("inputAdd");



function addProject(){
    let projectName = prompt("name");
    let projectLink = prompt("link");

    if (projectName === "" || projectLink=== "") {
        alert("Please fill in both fields.");
    }


    else{
    const div1 = document.createElement("div");
    div1.setAttribute("class","project-container");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", projectLink);
    anchor.setAttribute("target", "_blank");
    
    const div2 = document.createElement("div");
    div2.setAttribute("class","box");

    const h2 = document.createElement("h2");
    h2.setAttribute("class","name");
    h2.innerHTML=projectName;
    // inputAdd=h2.innerHTML;
    
    // const button2 = document.createElement("button");
    // button2.setAttribute("class","delete");
    // button2.setAttribute("onclick","deleteButton()");
    // button2.innerHTML = "Delete";

    div2.appendChild(h2);
    // button1.appendChild(button2);
    anchor.appendChild(div2);
    div1.appendChild(anchor);

    const container = document.querySelector(".project-container");
    container.insertBefore(div1, container.lastElementChild);
     
    saveData();

    // projectName.value = "";
    // projectLink.value = "";
}
}

// function saveData()
// {
//     if(h2 || projectLink){
// localStorage.setItem("data",h2);
// localStorage.setItem("data",projectLink);

// }}
// function getData()
// {
//     if(h2 || projectLink){
//     h2.innerHTML=localStorage.getItem("data");
//     // projectLink.innerHTML=localStorage.getItem("data");

// }}
// getData();
function saveData() {
    localStorage.setItem("projectList", inputAdd.innerHTML);
}

function getData() {
    inputAdd.innerHTML = localStorage.getItem("projectList");
}

getData(); 


function deleteButton(){
    let projectContainer = document.querySelector(".project-container");
    projectContainer.removeChild();
    saveData();
}