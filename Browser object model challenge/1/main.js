//let tasks = [];
document.addEventListener("DOMContentLoaded", function(event) {
    let inputfield = document.querySelector('input.input');
    let tasks_div = document.querySelector('.tasks');
    let btnadd = document.querySelector('input.add');

    btnadd.addEventListener('click', () =>{
        if (inputfield.value != "") {
            let obj = {
                "id": localStorage.getItem('index'),
                'text': inputfield.value
            };
            insertTask(obj);
            localStorage.setItem('index', parseInt(localStorage.getItem('index')) + 1);

            showTasks();
            inputfield.value = '';
        }

    });
    if (localStorage.getItem('index') == null){
        localStorage.setItem('index', 1);
        showTasks();
    }
});


/**
 * gets the tasks as json object
 * 
 */
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks'));
}

/**
 * displays the tasks
 *
 */
function showTasks() {
    let tasks = getTasks() ?? [];
    console.log(tasks);

    if (tasks.length > 0) {
        getTasksContainer().innerHTML = '';

        tasks.forEach(e => {
            renderTask(e);
        })
    }
    else{
        console.log("emptyyyyyy");
        getTasksContainer().innerHTML='';
    }
  
}

function getTasksContainer(){
    return document.querySelector('.tasks');
}

function insertTask(task) {
    let tasks = getTasks() ?? [];
    tasks.push(task);
    localStorage.setItem(`tasks`, JSON.stringify(tasks));

    tasks.forEach((t)=>{
        renderTask(t);
    })    
}

function renderTask(task){
    let element = document.createElement('div');
    let textelement = document.createTextNode(task.text);
    let btndelete = document.createElement('button');
    btndelete.classList.add('btndelete');
    btndelete.textContent = 'Delete';
    btndelete.addEventListener('click', function() {
        removetask(task.id);
        showTasks();
    });
    btndelete.setAttribute('attr-id', task.id);
    element.append(textelement);
    element.append(btndelete);
    getTasksContainer().appendChild(element);
}

function removetask(taskId) {
    console.log(`deleted ${taskId}`);
    let tasks = getTasks() ?? [];
    if (tasks.length > 0) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === taskId) {
                tasks.splice(i, 1);
                let currentindex = localStorage.getItem('index');
                localStorage.clear();
                localStorage.setItem('index', currentindex);
                localStorage.setItem(`tasks`, JSON.stringify(tasks));

            }
        }
    }
}




//localStorage.clear();




// function addTask(task) {
//     let tasks = getTasks() ?? [];
//     tasks.push(task);
//     insertTask(task);
//     localStorage.setItem(`tasks`, JSON.stringify(tasks));
//     return JSON.parse(localStorage.getItem('tasks'));
// }

//let btndelete = document.querySelectorAll('.btndelete');


// btndelete.forEach(function(element){
//     element.addEventListener('click',function(){
//         console.log(element.id);
//         let n = removetask(element);
//         showTasks(n);


//     });
// });



//console.log(tasks);

//return JSON.parse(localStorage.getItem('tasks'));