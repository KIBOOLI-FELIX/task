const elTask=document.querySelector('.tasks');
const loadingText=document.querySelector('.loading-text');
const elForm=document.querySelector('.task-form');
const elInput=document.querySelector('.taskInput');
const elAlert = document.querySelector('.form-alert');

//getting tasks from the database
const getTasks=async()=>{
  try {
    await axios.get('/api/v1/tasks')
    .then((response)=>{
      // console.log(response)
      listTasks(response.data)
    })
    .catch((error)=>console.log(error))
  } catch (error) {
    console.log(error)
  }
}

getTasks();

//function to list tasks
const listTasks=(data)=>{
  console.log(data);
  const allTasks=data.map((tasks)=>{
    console.log(tasks);
    return `<div class='container'>
    <div class='row'>
      <div class='col-6'>
        <h5><span>${tasks.name}</span></h5>
      </div>
      <div class='col-6 d-flex justify-content-end'>
        <a href='' class='btn btn-success btn-sm' role='button'>Edit</a>
        <button type='button' class='btn btn-danger btn-sm'>Delete</a>
      </div>
    </div>
    </div>`
  })

  elTask.innerHTML=allTasks;
  loadingText.style.visibility='hidden';
}

//adding task
elForm.addEventListener('submit',async(event)=>{
  event.preventDefault();
  const name=elInput.value;
  try {
    await axios.post('api/v1/tasks',{name})
    getTasks()
    elInput.value = ''
    elAlert.style.display = 'block'
    elAlert.textContent = `success, task added`
    elAlert.classList.add('text-success')

  } catch (error) {
    elAlert.style.display = 'block'
    elAlert.innerHTML = `error, please try again`
    console.log(error);
  }

  setTimeout(() => {
    elAlert.style.display = 'none'
    elAlert.classList.remove('text-success')
  }, 3000)

})

