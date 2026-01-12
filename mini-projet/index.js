window.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll("#game-board div")
    
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("click",(event)=>{
            let cross = document.createTextNode("x")
            boxes[i].appendChild(cross)
            
            for(let j=i; j<boxes.length; j++){
                let circle = document.createTextNode("o")
                if(j<=5){
                    while(boxes[j]!==""){
                        j++
                    }
                    boxes[j].appendChild(circle)
                }
            }
        })
    }
});