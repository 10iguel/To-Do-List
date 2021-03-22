let toDos = getSavedToDos()
const filter = {
    searchText: '',
    hideCompleted: false
}
//filteredToDos = filteredToDos.filter(function (todo) {
//return !filter.hideCompleted || !todo.completed} )
//     if (filter.hideCompleted){
//         return !todo.completed
//     }else {
//         return true
//     }
// })
renderTodos(toDos, filter)

document.querySelector('#create-notes').addEventListener('submit', (e) => {
    const text = e.target.elements.todoes.value.trim()
    e.preventDefault()
    if (text.length > 0) {
        toDos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        renderTodos(toDos, filter)
        saveTodos(toDos)
        //location.assign(`/new-todo.html${id}`)
        e.target.elements.todoes.value = ''
    }
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    filter.searchText = e.target.value
    renderTodos(toDos, filter)
})

// document.querySelector('#name-form').addEventListener('submit', (e)=> {
//    e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value=''
// })
document.querySelector('#show-completed').addEventListener('change', (e) => {
        filter.hideCompleted = e.target.checked
        renderTodos(toDos, filter)

    }
)

// document.querySelector('#select-option').addEventListener('change', (e)=> {
//    console.log(e.target.value)
// })


//localStorage.setItem('location',toDos[0] )
//console.log(localStorage.getItem('location'))
//localStorage.removeItem('location')
//localStorage.clear()
// const pet = {
//     name : 'chewbacca', age : 8
// }

// const userJSON = JSON.stringify(pet)
//  console.log(userJSON);
// localStorage.setItem('pet',userJSON)

// const userJSON = localStorage.getItem('pet')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age} years old`)

// Truthy - Values that resolve to true in boolean context
//Falsy - Values that resolve to false in boolean context
// Falsy values - false , 0 ,undefined , null,empty string,NaN
//example

//  const products = []
// const product = products[0]
// if (''){
//     console.log('Product founded')
// } else{
//     console.log('Product not founded')
// }

//type -coercion
const value = true + 12
const type = typeof value
console.log(type)
console.log(value)




