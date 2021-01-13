document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector('form#create-task-form');
  submit.addEventListener("submit", function(e){
    e.preventDefault();

    const task = document.querySelector('input[type="text"]').value;
    const ulList = document.querySelector('#tasks');
    const liElement = document.createElement('li');
    liElement.textContent = task;
    ulList.append(liElement);
    
    e.target.reset();
  });

  // const taskElem = document.querySelector('li');
  // const ul = document.querySelector('ul#tasks');
  // function deleteTask(task){
  //   const liList = ul.querySelectorAll('li');
  //   liList.remove()
  //   }

  // deleteTask(taskElem);
});
