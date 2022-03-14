
let sunicon = document.querySelector('#sun');
let moonIcon = document.querySelector('#moon')

sunicon.addEventListener('click', function(){
    document.body.classList.add('lightMode');
    this.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    moonIcon.classList.add('block');
})

moonIcon.addEventListener('click', function(){
    document.body.classList.remove('lightMode');
    this.classList.add('hidden');
    sunicon.classList.remove('hidden');
    sunicon.classList.add('block');
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
    listItem.push(myInput.value);
    if(localStorage.getItem('Todo') === null){
        localStorage.setItem('Todo', JSON.stringify(listItem))
    }
    else{
        localStorage.setItem('Todo', JSON.stringify(listItem))
    }
    myInput.value = '';
    list.innerHTML = displayTodo()
    icount.innerHTML = todoListCount();
}


// this function display your data from local storage to UI
let displayTodo = ()=>{
     let output = '';
     listItem.forEach((item, index) =>{
         output += `
                <li id="todoContain" class="borderlist flex justify-between items-center gap-6 border-b-[1px] px-[23px] py-[18px]">
                    <div class="group">
                        <input id="${index}" type="checkbox" >
                            
                        <label for="${index}" class="LGB ml-[51px] relative flex-1 text-base font-JosefinSans font-normal capitalize cursor-pointer flex items-center justify-between">
                            ${item}
                        </label>
                    </div>
                    
                    <div class="removeBtn cursor-pointer" onClick="erase(${index})">
                        <img src="./images/icon-cross.svg" alt="">
                    </div>                            
                </li>
             `
     })
     return output;
}

// function to remove item todo
function erase(index){
    listItem.splice(index, 1);
    localStorage.setItem('Todo', JSON.stringify(listItem))
    dataContainer.innerHTML = displayTodo();

}

// count the item in your todo list
let todoListCount = ()=>{
    let count = 0;
    // for(let i = 0; i < listItem.length; i++){
    count = listItem.length;
    
    return count;
}

// function select(index){
//     console.log('hello you click', index)

//     let completed = document.querySelector('#selectCompleted');
//     let check = document.querySelector('input[type="checkbox"]:checked');
//     let lis = document.querySelectorAll('#todoContain')

//     completed.addEventListener('click', function(e){
        
//         console.log('hello', e.target.classList.contains('borderlist'));
        
//         if(check){
            
//         }
        
       
   
//     })
// }


// call the function to display in UI
dataContainer.innerHTML = displayTodo();
itemCount.innerHTML = todoListCount();