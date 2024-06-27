const listaTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const cuentaTareas = document.querySelector("#cuentaTareas")
const cuentaRealizadas = document.querySelector("#cuentaRealizadas")

const tareas = [
        {id: 1515, nombre: "Pasear a Bobby", realizada: false},
        {id: 1516, nombre: "Sacar la Basura", realizada: false},
        {id: 1517, nombre: "Hacer el desafio", realizada: false}
]


btnAgregar.addEventListener("click", ()=> {
    let maxId = tareas.reduce((max, tarea) => tarea.id > max ? tarea.id : max, 0);
    const tarea = tareaInput.value
    tareas.push({id: maxId + 1, nombre: tarea, realizada: false})
    tareaInput.value = ""
    
    renderTareas(tareas)
})


function renderTareas(tareas){
    let html = ""
    let realizadas = 0

    for(let tarea of tareas) {
        if (tarea.realizada) {
            realizadas++
        }
        html += `
        <tr class="task-item ${tarea.realizada ? 'tareaRealizada' : 'tareaPendiente'}">
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td> 
            <td><input type="checkbox" ${tarea.realizada ? "checked" : ""} onclick="toggleRealizada(${tarea.id})"></td>
            <td><button onclick="borrar(${tarea.id})">❌</button></td>
        </tr>
        `
    }
    listaTareas.innerHTML = html
    cuentaTareas.innerHTML = tareas.length
    cuentaRealizadas.innerHTML = realizadas
}



function borrar(id) {
    const index = tareas.findIndex((ele)=> ele.id === id)
    tareas.splice(index, 1)
    renderTareas(tareas)
}

function toggleRealizada(id) {
    const tarea = tareas.find((ele) => ele.id === id)
    tarea.realizada = !tarea.realizada
    renderTareas(tareas)
}

renderTareas(tareas)

// // Para permitir el uso de las funciones borrar y toggleRealizada desde el HTML
// window.borrar = borrar;
// window.toggleRealizada = toggleRealizada
