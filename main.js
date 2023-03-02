let input = document.querySelector("input")
let button = document.querySelectorAll(".num")
let equal = document.querySelector(".equal")

input.value=0
button.forEach((button)=>{
    button.addEventListener("click",()=>{
        input.value += button.innerHTML
    })
})

equal.addEventListener("click",evalute);
function evalute(){
    input.value=eval(input.value)
}


function allClear(){
    input.value = "";
}

function del(){
    input.value = input.value.slice(0,-1)
}