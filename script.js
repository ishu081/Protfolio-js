// let projectName = document.getElementById("projectName");
// let projectLink = document.getElementById("projectLink");

// let inputAdd = document. getElementById("inputAdd");



function addProject(){
    let projectName = ["TO-Do list", "Wall Clock","Digital Clock","Calculator","Rock Paper Scissors","Language Translator"]
    let projectLink = ["https://github.com/ishu081/TO-DO-List", "https://github.com/ishu081/Clock", "https://github.com/ishu081/Digital-Clock","https://github.com/ishu081/Calculator","https://github.com/ishu081/RockPaperScissors","https://github.com/ishu081/Language-Translator-react-js"];

    for(let i=0; i<projectName.length;i++){

    const div1 = document.createElement("div");
    div1.setAttribute("class","project-container");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", projectLink[i]);
    anchor.setAttribute("target", "_blank");
    
    const div2 = document.createElement("div");
    div2.setAttribute("class","box");

    const h2 = document.createElement("h2");
    h2.setAttribute("id","projectName");
    h2.innerHTML=projectName[i];
   

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
     
    

 
}
}

addProject();


function deleteButton(){
    let projectContainer = document.querySelector(".project-container");
    projectContainer.removeChild();
    saveData();
}