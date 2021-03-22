//1. Add event handler to checkbook
//2. Modify the correct objects completed property -toggle t odo
//3. Save and rerender

//fetch existing todos from localStorage

const getSavedToDos = () => {
    const toDosJSON = localStorage.getItem('toDos')
    return toDosJSON ? JSON.parse(toDosJSON) : []
}
//Save todos to local Storage
const saveTodos = (notes) =>
    localStorage.setItem('toDos', JSON.stringify(notes))

//toggle
const toggleTodo = (id) => {
    const todo = toDos.find((todo) =>
        todo.id === id
    )
    if (todo) {
        todo.completed = !todo.completed
    }

}
//Render todos

const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#new-help')
    const filteredToDos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch

    })

    todoEl.innerHTML = ''

    const uncompleted = toDos.filter((todo) => !todo.completed)
    document.querySelector('#new-help').appendChild(generateSummaryDOM(uncompleted))

    if (filteredToDos.length > 0) {
        filteredToDos.forEach((todo) => {
            todoEl.appendChild(generateToDos(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

//set up as remove to do function
const removeToDos = (id) => {
    const toDoIndex = toDos.findIndex((todo) =>
        todo.id === id
    )

    if (toDoIndex > -1) {
        toDos.splice(toDoIndex, 1)
    }
}

//get the DOM elements for an individual note
const generateToDos = (todo) => {
    const todoEL = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')


    //set up to do checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(toDos)
        renderTodos(toDos, filter)

    })

    //Set the todo text

    if (todo.text.length > 0) {
        todoText.textContent = todo.text
    } else {
        todoText.textContent = 'you did not write'
    }
    //todoText.setAttribute('href',`/new-todo.html${toDos.id}`)
    containerEl.appendChild(todoText)

    //setup container
    todoEL.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEL.appendChild(containerEl)

    //Set up the remove button
    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    todoEL.appendChild(button)
    button.addEventListener('click', () => {
        removeToDos(todo.id)
        saveTodos(toDos)
        renderTodos(toDos, filter)
    })

    return todoEL
}
//get the DOM elements for list summary
const generateSummaryDOM = (uncompleted) => {
    const summary = document.createElement('h1')
    const plural = uncompleted.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${uncompleted.length} Thing${plural} to Do`
    return summary
}
