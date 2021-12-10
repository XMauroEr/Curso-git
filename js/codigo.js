const saludar = name => alert(`Hola ${name}!`);

document.getElementById("btn").addEventListener("click", () => {
    saludar("Mauro");
});