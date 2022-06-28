
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')


todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteAndCheck)



function addTodo(event) {
    event.preventDefault()
    console.log('clicou')
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value
    todoInput.value = ''
    todoDiv.appendChild(todoLi)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class= "fa fa-check"> </i>'
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class= "fa fa-trash"> </i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}
function deleteAndCheck(e) {


    const item = e.target

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement

        todo.classList.add('fall')
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }
    if (item.classList[0] === 'completed-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}
