
const saludar = name => alert(`Hola ${name}!`);

document.getElementById("btn").addEventListener("click", () => {
    const name = document.getElementById("input-name");
    saludar(name.value);
    name.value = "";
});