const saludo = (nombre) =>{
    alert(`Hola ${nombre}!`);
}

document.getElementById("btn1").addEventListener("click", () => {
    saludo("Mauro");
})