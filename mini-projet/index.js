let boxes = document.querySelectorAll("#game-board div")

function computer(boxes){
        let j=5
        let circle = document.createTextNode("o")
        if(j<=5){
            while(boxes[j].textContent.trim()!==""){
                j++
            }
            boxes[j].appendChild(circle)
        }
        if(j>6){
            while(boxes[j].textContent.trim()!==""){
                j--
            }
            boxes[j].appendChild(circle)
        }
}

function winCond(boxes){
    const winConds= [[boxes[0], boxes[1], boxes[2]], [boxes[3], boxes[4],
    boxes[5]], [boxes[6], boxes[7], boxes[8]], [boxes[0], boxes[3], boxes[6]], [boxes[1], boxes[4], boxes[7]],
    [boxes[2], boxes[5], boxes[8]], [boxes[0], boxes[4], boxes[8]], [boxes[2], boxes[4], boxes[6]]]
    
    for(let winCond of winConds){
        
        console.log(winCond[0].textContent);
        
        if(winCond[0].textContent.trim==="x" && winCond[1].textContent==="x" && winCond[2].textContent==="x"){
            window.alert("C'est gagné")
        }
        else if(winCond[0].textContent.trim==="o" && winCond[1].textContent==="o" && winCond[2].textContent==="o"){
            window.alert("C'est perdu")
        }
    }
}

function draw(boxes){
    let x = 0
    for(let i=0; i<boxes.length; i++){
        if(boxes[i].textContent==="x" || boxes[i].textContent==="o"){
            x++
        }
        else if(boxes[i].textContent===""){
            break
        }
    }
    if(x===9){
        window.alert("Draw")
    }
}

function player(boxes){
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("click",(event)=>{
            let cross = document.createTextNode("x")
            boxes[i].appendChild(cross)
            computer(boxes)
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
        player(boxes)
        winCond(boxes)
        draw(boxes)
});

