//Seleccionar el formulario
const formulario = document.querySelector("#contacto")

if(formulario){
    formulario.addEventListener("submit",
        (event)=>{
            //Evitar que el formulario se envie
            event.preventDefault();

            //Obtener los valores del formulario
            const nombre=document.getElementById("nombre").value;
            const correo=document.getElementById("correo").value;
            const descripcion=document.getElementById("mensaje").value;

            //Imprimir los valores por consola
            console.log("Nombre:",nombre)
            console.log("Correo:",correo)
            console.log("El mensaje es:",descripcion)

            alert('Hola '+ nombre +'tu correo es '+ correo+ 'y tu mensaje es: '+descripcion)
    })
}
else {
    console.error('No se pudo encontrar el formulario con el ID #contacto')
}