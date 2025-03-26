document.getElementById("cargarUsuarios").addEventListener("click", async () => {
    const response = await fetch("/api/usuarios");
    const usuarios = await response.json();

    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = usuario.nombre;
        lista.appendChild(li);
    });
});
