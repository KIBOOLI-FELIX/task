
const elTask=document.querySelector('.tasks');
const loadingText=document.querySelector('.loading-text');
const elForm=document.querySelector('.task-form');
const elInput=document.querySelector('.taskInput');
const elAlert = document.querySelector('.form-alert');
const elEditName=document.querySelector('.taskName');
const elComplete=document.querySelector('.taskComplete');
const updateBtn=document.querySelector('.updateBtn');

var myModal = new bootstrap.Modal(document.getElementById('editModel'), {
  keyboard: true
})


//getting tasks from the database
const getTasks=async()=>{
  try {
  
    await axios.get('/api/v1/tasks')
    .then((response)=>{
      // console.log(response)
      const allTasks=response.data.map((tasks)=>{
        return `<div class='container'>
        <div class='row'>
          <div class='col-6'>
            <h5><span>${tasks.name}</span></h5>
          </div>
          <div class='col-6 d-flex justify-content-end'>
            <button class='btn btn-success btn-sm edit-btn' id='${tasks.id}'>Edit</button>
            <button type='button' class='btn btn-danger btn-sm delete-btn' id='${tasks.id}'>Delete</a>
          </div>
        </div>
        </div>`
      })

      elTask.innerHTML=allTasks;
      loadingText.style.visibility='hidden';

    })
    .catch((error)=>console.log(error))
  } catch (error) {
    console.log(error)
  }

}

getTasks();

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

//deleting task and updating
elTask.addEventListener('click',(event)=>{
  event.stopImmediatePropagation();
  if(event.target.classList.contains('delete-btn')){
    console.log("delete")
    const id=event.target.id;
    axios.delete(`/api/v1/tasks/${id}`)
    .then((response)=>console.log(response.data.success))
    .catch((error)=>console.log(error));
    getTasks(); 
  }

  if(event.target.classList.contains('edit-btn')){
    const id=event.target.id;
    console.log(id)
    axios.get(`/api/v1/tasks/${id}`)
         .then((response)=>{
          updateInfo(...response.data);
         })
  }
})

// //editing task
const updateInfo=(data)=>{
  console.log(data)
  elEditName.value=data.name;
  (data.completed==='false')?
  elComplete.checked=false:elComplete.checked=true;
  myModal.show();
  updateBtn.addEventListener('click',function(event){
    event.stopImmediatePropagation();
    //getting updated info
    const name=elEditName.value;
    if(elComplete.checked){
      elComplete.value='true'
    }else{
      elComplete.value='false'
    }
    // console.log(`${data.id} and ${name} and ${elComplete.value}`)
    console.log(data.id);
    // return
    axios.patch(`/api/v1/tasks/${data.id}`,{
      name:name,
      completed:elComplete.value
    })
    .then((response)=>console.log(response.data.success))
    .catch((error)=>console.log(error))
    location.reload();
    myModal.hide();
  })
}




