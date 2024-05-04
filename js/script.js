function agregarTarea(){

    let nuevaTareaText = document.getElementById("nuevaTarea").value;

    if(nuevaTareaText === ""){
        alert("Por Favor, Ingresa una tarea");
        return
    }

    //crear el elemento
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = nuevaTareaText + " ";


    //crear boton de Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar"
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
    }

    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //limpiar el cuador de texto de la tarea
    document.getElementById("nuevaTarea").value = "";
    console.log(nuevaTarea);

}