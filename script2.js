function addProject() {
    let projectName = prompt("Project name:");
    let projectLink = prompt("Project link:");

    if (!projectName || !projectLink) {
        alert("Please fill in both fields.");
        return;
    }

    // Get existing projects or start empty array
    let projects = JSON.parse(localStorage.getItem("projectList")) || [];

    // Add new project object
    projects.push({ name: projectName, link: projectLink });

    // Save updated array back to localStorage
    localStorage.setItem("projectList", JSON.stringify(projects));

    // Refresh display
    displayProjects();
}

function displayProjects() {
    const container = document.getElementById("inputAdd");
    container.innerHTML = "";  // Clear old content

    let projects = JSON.parse(localStorage.getItem("projectList")) || [];

    projects.forEach((project, index) => {
        const div1 = document.createElement("div");
    div1.setAttribute("class","project-container");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", projectLink);
    anchor.setAttribute("target", "_blank");
    
    const div2 = document.createElement("div");
    div2.setAttribute("class","box");

    const h2 = document.createElement("h2");
    h2.setAttribute("id","projectName");
    h2.innerHTML=projectName;
   


    
    const container = document.querySelector(".project-container");
    container.insertBefore(div1, container.lastElementChild);
    
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteProject(index);
    // div2.appendChild(h2);
    // // button1.appendChild(button2);
    // anchor.appendChild(div2);
    //     div1.appendChild(anchor);

        div2.appendChild(h2);
        div2.appendChild(deleteBtn);
        anchor.appendChild(div2);
        div1.appendChild(anchor);

        container.appendChild(div1);
    });
}
function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem("projectList")) || [];
    projects.splice(index, 1);  // Remove project at position index
    localStorage.setItem("projectList", JSON.stringify(projects));
    displayProjects();
}
window.onload = displayProjects;
