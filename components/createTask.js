import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {

  evento.preventDefault();


  const input = document.querySelector('[data-form-input]');
  const value = input.value;


  if (value.trim() === '') {
    swal('Error', 'Por favor, ingrese una tarea antes de agregarla.', 'error');
    return;
  }

  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');

  task.classList.add('card');
  input.value = '';

  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');

  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);



  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);
