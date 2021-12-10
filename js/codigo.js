
const nombresProhibidos = ["Franco", "Ingrid", "Thiago", "Mauro"];

const saludar = name => {
    for(let i of nombresProhibidos){
        if(name === i || name === i.toLowerCase()){
            return "Este nombre no esta permitido en nuestro sistema.";
        }
    }
    return `Hola ${name}!`;
}

document.getElementById("btn").addEventListener("click", () => {
    const name = document.getElementById("input-name").value;
    alert(saludar(name));
    name.value = "";
});
