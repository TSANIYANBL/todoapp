// elements
const clear = document.querySelector(".clear");
const input = document.getElementById("input");
const list = document.getElementById("list");
    
// classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// variable
let LIST = []
, id = 0;

// add function
function addToDo(toDo, id, done, trash){

    if(trash){return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = '<li class="item"> <i class="fa ${DONE} co" job="complete" id="${id}"></i> <p class="text ${LINE} ">${toDo}</p> <i class="fa fa-trash-o de" job="delete" id="${id}"></i> </li>';
    const position = "afterbegin";

    list.insertAdjacentHTML(position, item);
}

// add an item to the list user enter key
document.addEventListener("keyup",function(even){
    if(event.keycode == 13){
        const toDo = input.value;

        // if the input isnt empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
});

        }
        input.value = "";
    }
    });

    // complete to do
    function completeToDo(element){
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

        LIST[element.id].done = LIST[element.id].done ? false : true;
    }

    // remove to do
    functuon removeToDo(element){
        element.parentNode.parentNode.removeChild(element.parentNode);

        LIST[element.id].trash = true;

    }

    //target teh items 
    list.addEventListener("click", function(event){
        const element = event.target; 
        const elementJob = element.attributes.job.value;

        if(elementJob == "complete"){

        }else if(elementJob == "remove");{
         removeToDo(element);
    }
});

 

