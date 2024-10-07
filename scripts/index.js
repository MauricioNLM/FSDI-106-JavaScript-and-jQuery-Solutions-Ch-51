function save(){
    let title = $('#txtTitle').val()
    let description = $('#txtDescription').val()
    let colo = $('#txtColor').val()
    let standarDate = $('#txtStandarDate').val()
    let status = $('#txtStatus').val()
    let budget = $('#txtBudget').val()

    let task = new Task (title, description, colo, standarDate, status, budget)


    console.log(task)

    $.ajax({
        url: "http://fsdiapi.azurewebsites.net/api/tasks/", //the nURL to sent the request to
        type:'POST',//the type of request (GET,POST,PUT,DELETE,PARTCH)
        data:JSON.stringify(task),//conver Objet to JSON
        contentType:'application/json',
        success:function(response){
            console.log(response);
        },
        error:function(response){
            console.log(response);
        }
    })

    displayTask(task)
}


function displayTask(task){
    let sintax = `
    <div id="task-${task.title}" class="task-container" style="border-color:${task.color}">
        <div class="task">
        <span onclick="deleteFunction('${task.title}')" id="delete-${task.title}" class="delete-item">X</span>
        <div class="info">
            <h5>${task.title} </h5>
            <p>${task.description}</p>
        </div>
            <div class="status">
            ${task.status}
        </div>
        <div class="date-budget">
            <span>${task.date}</span>
            <span>${task.budget}</span>
        </div>

        </div>
        
    </div>
    
    `;

    $('#list').append(sintax)
}

function LoadTask(){
    console.log('LoadTaks')

    $.ajax({
        url: "http://fsdiapi.azurewebsites.net/api/tasks/", //the nURL to sent the request to
        type:'GET',//the type of request (GET,POST,PUT,DELETE,PARTCH)
        success:function(response){
            let data = JSON.parse(response);

            for(let i=0;i<data.length;i++){
                let task = data[i];
                if(task.name === 'Mauricio'){
                    displayTask(task);
                }
            }

            console.log(response);
        },
        error:function(response){
            console.log(response);
        }
    })
}

function deleteFunction(taskId){
debugger
    idcontainer = `task-${taskId}`
    const taskContainer = document.getElementById(idcontainer);
    taskContainer.remove();
    debugger
}

function init(){
    $('#btnSave').click(save);
    LoadTask();
}



window.onloadstart = init()