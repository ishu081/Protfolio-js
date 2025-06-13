let projectName = document.getElementById("projectName");
let projectLink = document.getElementById("projectLink");

function addProject(){
    const div1 = document.createElement("div");
    div1.setAttribute("class","project-container");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", projectLink.value);
    anchor.setAttribute("target", "_blank");
    
    const button1 = document.createElement("button");
    button1.setAttribute("class","box");

    const h2 = document.createElement("h2");
    h2.setAttribute("class","name");
    h2.innerHTML=projectName.value;
    
    const button2 = document.createElement("button");
    button.setAttribute("class","delete");
    button.setAttribute("onclick","deleteButton()");
    button.innerHTML = "Delete";

    button1.appendChild(h2);
    button1.appendChild(button2);
    anchor.appendChild(button1);
    div1.appendChild(anchor);
}