//define UI vars;

const forms = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load all event listener

loadEventListeners();

function loadEventListeners(){
    //  Add task form 
    forms.addEventListener('submit',addTask);
    //Remove task event
    taskList.addEventListener('click',removeTask);
    //clear Task
    clearBtn.addEventListener('click',clearTasks);
    //filter task event
    filter.addEventListener('keyup', filterTasks);
}

// Add task

function addTask(e){
    if(taskInput.value == ''){
        alert('Add Task');
    }
    // create li elements 

    const li = document.createElement('li');

    li.className = 'collection-item';
    // create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to l
    li.appendChild(link);
    taskList.appendChild(li);

    //store in local storage
    
    console.log(li);
    e.preventDefault();
}



//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
       if(confirm('Are you sure')){
         e.target.parentElement.parentElement.remove();
       }
    }
}

// Clear tasks
function clearTasks() {
// taskList.innerHTML=''; 
//faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}


//to filter task

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }
            else{
                task.style.display = 'none';
            }
    });

}