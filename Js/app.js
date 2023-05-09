let listaEmpleados = [];

const objempleado = {
    id:'',
    rut: '',
    cargo: '',
    nombre: '',
    email: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const rutInput = document.querySelector('#rut');
const cargoInput = document.querySelector('#cargo');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(rutInput.values === '' || puestoInput.values === ''){
        alert('Todos los campos son obligatorios.');
        return;
    }
    
    if(editando) {
        //aditarEmpleado();
        editando = false;
    } else {
        objempleado.id = Date.now();
        objempleado.rut = rutInput.values;
        objempleado.cargo = cargoInput.values;
        objempleado.nombre = nombreInput.values;
        objempleado.email = emailInput.values;

        agregarEmpleado();
    }
}

function agregarEmpleado() {
    listaEmpleados.push({...objempleado});

    mostrarEmpleados();
}

function mostrarEmpleados(){
    const divEmpleados = document.querySelector('.div-empleados');

    listaEmpleados.forEach( empleado => {
        const {id, rut, cargo, nombre, email} = empleado;
        
        const parrafo = document.createElement('p');
        parrafo.textContent = '${id} - ${rut} - ${cargo} - ${nombre} - ${email} - ';
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });

}