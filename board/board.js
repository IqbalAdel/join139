function showTask(title, description, date, id, category, prio, users, names) {
    document.getElementById('tasks').style.display = 'flex';
   let taskPopUp = document.getElementById('taskPopUp')
   taskPopUp.style.display = 'flex';
    
    let popUpElements = document.getElementsByClassName('pop-up');
    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].style.transition = 'transform 400ms';
        (function(index) {
            setTimeout(function() {
                popUpElements[index].style.transform = 'translateX(0)';
            }, 100);
        })(i);
    }
    renderTasksPopUp(title, description, date, id, category, prio, users, names)
    assignCategoryColour();
    assigntaskUserColour(names, id);
}


function hideTask() {
    document.getElementById('tasks').style.display = 'none';
    document.getElementById('taskPopUp').style.display = 'none';
    
    let popUpElements = document.getElementsByClassName('pop-up');
    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].style.transition = 'transform 400ms';
        (function(index) {
            setTimeout(function() {
                popUpElements[index].style.transform = 'translateX(200%)';
            }, 100);
        })(i);
    }
}

function showAddTask(section = 'todo') {
    document.getElementById('addTaskSection').style.display = 'flex';
    document.getElementById('addTaskFullScreen').style.display = 'flex';
    
    let popUpElements = document.getElementsByClassName('add-task-card');
    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].style.transition = 'transform 400ms';
        (function(index) {
            setTimeout(function() {
                popUpElements[index].style.transform = 'translateX(0)';
            }, 100);
        })(i);
    }

    document.getElementById('boardAddTaskBtns').innerHTML = /*html*/`
        <button class="btn-white">Clear <img src="../assets/img/icons/x.png" alt=""></button>
        <button onclick="addTaskBoard('${section}')" class="btn-dark">Create Task <img src="../assets/img/icons/check_icon.png" alt=""></button>  
    `
}

function showEditTask(){
    document.getElementById('editTaskSection').style.display = 'flex';
    document.getElementById('editTaskFullScreen').style.display = 'flex';
    
    let popUpElements = document.getElementsByClassName('add-task-card');
    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].style.transition = 'transform 400ms';
        (function(index) {
            setTimeout(function() {
                popUpElements[index].style.transform = 'translateX(0)';
            }, 100);
        })(i);
    }
}

function hideAddTask() {
    document.getElementById('addTaskSection').style.display = 'none';
    document.getElementById('addTaskFullScreen').style.display = 'none';
    
    let popUpElements = document.getElementsByClassName('add-task-card');
    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].style.transition = 'transform 400ms';
        (function(index) {
            setTimeout(function() {
                popUpElements[index].style.transform = 'translateX(275%)';
            }, 100);
        })(i);
    }
}
function hideEditTask() {
    document.getElementById('editTaskSection').style.display = 'none';
    document.getElementById('editTaskFullScreen').style.display = 'none';
    
    let popUpElements = document.getElementsByClassName('add-task-card');
    for (let i = 0; i < popUpElements.length; i++) {
        popUpElements[i].style.transition = 'transform 400ms';
        (function(index) {
            setTimeout(function() {
                popUpElements[index].style.transform = 'translateX(275%)';
            }, 100);
        })(i);
    }
}


function addTaskToSectionButton(section){
    showAddTask(section)
}


function addTaskInProgress() {
    window.location.href = 'https://www.iqbal-adel.developerakademie.net/join9/add_task/add_task.html';

    window.addEventListener('DOMContentLoaded', function() {
            let buttonAdd = document.getElementById('buttonAdd');
            if (buttonAdd) {
                buttonAdd.onclick = function() {
                    addTask('inprogress');
                };
            }
    });
}

function doNotClose(event){
    event.stopPropagation();
}

function addTaskBoard(workMode = 'todo') {
    let title = document.getElementById('titleBoard');
    let description = document.getElementById('descriptionBoard');
    let date = document.getElementById('dateBoard');
    let category = document.getElementById('categoryBoard');
    let subTask = document.getElementById('subTaskBoard');
    let contactIDs = [];
    if (titleField.value.trim() === '' && categoryField.value.trim() === '' && dateField.value.trim() === '') {
        console.log("Alle Felder sind leer. Es wird nichts ausgeführt.");
    }else {
        let task = {
            'id': allTasks.length + 1,
            'title': title.value,
            'description': description.value,
            'assignedTo': selectedContacts,
            'colors': colors,
            'date': date.value,
            'prio': prio,
            'category': category.value,
            'subTask': subTask.value,
            createdAt: new Date().getDate(),
            'workMode': workMode,
        };
        console.log(colors);
        console.log(allTasks);
        allTasks.push(task);
        console.log(allTasks);
        updateTasksHTML();
        hideAddTask();  
    }
}

async function filterTask() {
    let searchInput = document.getElementById("site-search").value.trim().toLowerCase();

    if(document.getElementById("site-search").value.length < 1) {
        await loadAllTasks();
        updateTasksHTML();
    } else {
    let foundTasks = [];

    allTasks.forEach(task => {
        if (
            task.title.toLowerCase().includes(searchInput) ||
            (task.description && task.description.toLowerCase().includes(searchInput))
        ) {
            foundTasks.push(task);
        }
    });

    allTasks = foundTasks;

    updateTasksHTML();
}
}

