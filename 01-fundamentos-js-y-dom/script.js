// base de Datos temporal en memoria

let activos = []

// referencias al DOM

const btnAgregar = documnt.getElementById('btn-agregar');
const filtroCate = document.getElementById('filtro-categoria')
const output = document.getElementById ('output')

// funcion para agregar datos
btnAgregar.addEventListener('click', () =>
    {
        const nombre = document.getElementById('nombre').value;
        const  categoria = document.getElementById('categoria').value;
        const valor = Number(document.getElementById)('valor').value;

// logica de validacion (Integridad de datos)

            if (nombre.trim() === "" || valor <= 0) {
                alert("Error: Por favor ingresa datos validos para el archivo");
                return; 
            }

            
            const nuevoActivo = {
    id: Date.now(), // generamos un activo unico simple
    nombre,
    categoria,
    valor
    };

            activos.push(nuevoActivo);
            console.log("Activo registrado:", nuevoActivo);
            renderizar(activos);

});

