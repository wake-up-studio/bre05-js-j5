window.addEventListener("DOMContentLoaded", () => {
    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];
    
    let ul = document.createElement("ul")
    let body = document.querySelector("body")
    
    body.appendChild(ul)
    
    for(let i=0;i<todos.length;i++){
        let li = document.createElement("li")
        let task = document.createTextNode(todos[i])
        li.appendChild(task)
        ul.appendChild(li)
        
        li.addEventListener("click", (event)=>{
            li.style.textDecoration = "line-through"
        })
    }
    
    let li = document.querySelector("li")
    
    
    
});
