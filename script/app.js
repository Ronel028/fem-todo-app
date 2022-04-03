
let sunicon = document.querySelector('#sun');
let moonIcon = document.querySelector('#moon')
let toggleTheme = document.querySelector('.toggle');
let complete = document.querySelector('#selectCompleted');
let saveTheme = localStorage.getItem('theme');
let saveComplete = localStorage.getItem('complete');
// let iconSave = localStorage.getItem('icon');

document.body.classList.add(saveTheme);
complete.classList.add(saveComplete);

if(!complete.classList.contains(saveComplete)){
    complete.classList.add(saveComplete)
}

toggleTheme.addEventListener('click', (e)=>{

    if(e.target.id === 'sun'){
        document.body.classList.add('lightMode');
        sunicon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        
    
        localStorage.setItem('theme', 'lightMode');
    }
    else if(e.target.id === 'moon'){
        document.body.classList.remove('lightMode');
        sunicon.classList.remove('hidden')
        moonIcon.classList.add('hidden')

        localStorage.removeItem('theme');

    }
})


// functions

let input = document.querySelector('#myInput');
let dataContainer = document.querySelector('ul');
let itemCount = document.querySelector('#item-count');

if(dataContainer.innerHTML.length > 4){
    dataContainer.style.overflowY = 'scroll';
}

let listItem = JSON.parse(localStorage.getItem('Todo')) || [];

input.addEventListener("keyup", (event)=> {
    if (event.keyCode === 13) {
        event.preventDefault();                  
        saveInput(input, dataContainer, itemCount);
        }
});


// this function save input to local storage
let saveInput = (myInput, list, icount)=>{
    if(myInput.value === ""){
        return
    }
    listItem.push(myInput.value.trim());
    if(localStorage.getItem('Todo') === null){
        localStorage.setItem('Todo', JSON.stringify(listItem))
    }
    else{
        localStorage.setItem('Todo', JSON.stringify(listItem))
    }
    myInput.value = '';
    displayTodo(list)
    icount.innerHTML = todoListCount();
}


// this function display your data from local storage to UI
let displayTodo = (list)=>{
     let output = '';
     listItem.forEach((item, index) =>{
         output += `
                <li class="borderlist flex justify-between items-center gap-6 border-b-[1px] px-[23px] py-[18px]">
                    <div class="group">
                        <input id="${index}" type="checkbox" >
                            
                        <label for="${index}" onClick="check(${index})" class="label LGB ml-[51px] relative flex-1 text-base font-JosefinSans font-normal capitalize cursor-pointer flex items-center justify-between">
                            ${item}
                        </label>
                    </div>
                    
                    <div class="removeBtn cursor-pointer" onClick="erase(${index})">
                        <img src="./images/icon-cross.svg" alt="">
                    </div>                            
                </li>
             `
                
     })
     list.innerHTML = output;
}



// function to remove item todo
function erase(index){
    listItem.splice(index, 1);
    localStorage.setItem('Todo', JSON.stringify(listItem))
    displayTodo(dataContainer);

}

// count the item in your todo list
let todoListCount = ()=>{
    let count = 0;
    // for(let i = 0; i < listItem.length; i++){
    count = listItem.length;
    
    return count;
}

function check(index){

    let labe = document.querySelectorAll('.label');
    let listTodo = document.querySelectorAll('.borderlist');
    let allTask = document.querySelector('#selectAll');
    let activeTask = document.querySelector('#selectActive');
    let clearComplete = document.querySelector('.clear-completed');


    listTodo[index].classList.add('activate');
    labe[index].classList.toggle('label-line');
    
    // function for list all the complete task
    complete.addEventListener('click', ()=>{
        
        complete.classList.add('activeColor');
        activeTask.classList.remove('activeColor');
        allTask.classList.remove('activeColor')

        listTodo.forEach(a=>{
            if(!a.classList.contains('activate')){
                a.style.display = 'none';
            }
            else if(a.classList.contains('activate')){
                a.style.display = 'flex';
            }
        })

        localStorage.setItem('complete', 'completed')

    }) 
    //------------------------------------------------------
    
    //function to list all task
    allTask.addEventListener('click', ()=>{
        complete.classList.remove('activeColor');
        activeTask.classList.remove('activeColor');
        allTask.classList.add('activeColor')
        listTodo.forEach(listTask=>{
             listTask.style.display = 'flex'
        })
    })
    //-------------------------------------------------

    // function for list all the incomplete task
    activeTask.addEventListener('click', ()=>{
        complete.classList.remove('activeColor');
        activeTask.classList.add('activeColor');
        allTask.classList.remove('activeColor')
        listTodo.forEach(a=>{
            if(a.classList.contains('activate')){
                a.style.display = 'none';
            }
            else if(!a.classList.contains('activate')){
                a.style.display = 'flex';
            }
            
        })
    })
    //----------------------------------------------------------
    clearComplete.addEventListener('click', ()=>{
        
        activeTask.classList.remove('activeColor');
        allTask.classList.remove('activeColor');
        complete.classList.remove('activeColor');
            
        listTodo.forEach(a=>{
            if(a.classList.contains('activate')){
                a.style.display = 'none';
            }
        })      
    })
}

// call the function to display in UI
displayTodo(dataContainer);
itemCount.innerHTML = todoListCount();