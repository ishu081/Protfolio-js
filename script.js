let projectName= document.getElementById("projectName");
let projectLink= document.getElementById("projectLink");
let inputAdd =document.getElementById("inputAdd");
function addProject(){
    if(projectName.value=="" || projectLink.value=="" ){
        alert("Enter the Name and Link");
    }
    else{
        // let div1 = document.createElement("div");
        // div.innerHTML=projectName.value;
        // inputadd.appendChild()

        // let ancher = document.createElement("a");
        // div.innerHTML=

        const addValue = (inputAdd) => {
            for(let input of inputAdd){
                const container1 = document.createElement("div");
                container1.classList.add("project-container");

                const container2 = document.createElement("a")
                container2.classList.add("ancherlist");
                container2.setAttribute("href","projectLink");

                const container3 = document.createElement("button");
                container3.classList.add("name");
                container3.innerHTML=projectName.value;
                container2.appendChild(container3);
            }
        }
    }
    projectName.value=" ";
    projectLink.value=" ";
    saveData();
}






inputAdd.addEventListener("click", function(e){
   if(e.target.tagName==="DIV"){
        e.target.classlist.toggle("box");
        saveData();
    }
    
},false);

function saveData()
{
    if(inputAdd){
        localStorage.setItem("data",projectName.innerHTML);
    }
}

function getData()
{
    if(inputAdd){
        inputAdd.innerHTML= localStorage.getItem("data");
    }
}
getData();
if (inputBox) { 
    inputBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addProject();
        }
    });
}

