const nombre = document.getElementById("nombre");
const raza = document.getElementById("raza");
const servicio = document.getElementById("servicio");
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const fecha = document.getElementById("fecha");
const usuarios = JSON.parse (localStorage.getItem("usuarios")) || [];

const cuerpoTabla=document.getElementById("cuerpoTabla")
const agregarUsuario = () => {
    const usuario = {
        id: crypto.randomUUID(),
        nombre: nombre.value,
        raza: raza.value,
        servicio: servicio.value,
        propietario: propietario.value,
        telefono: telefono.value,
        fecha:fecha.value,
    };

    
    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarUsuario();
};

const mostrarUsuario = () => {
    cuerpoTabla.innerHTML="";
    // console.log(usuario);
    usuarios.forEach(usuario => {
       cuerpoTabla.innerHTML += `<tr>
       <th scope="row">${usuario.id}</th>
       <td>${usuario.nombre}</td>
       <td>${usuario.raza}</td>
       <td>${usuario.servicio}</td>
       <td>${usuario.propietario}</td>
       <td>${usuario.telefono}</td>
       <td>${usuario.fecha}</td>
      <td>
      <button
      type="button"
      class="btn btn-danger"
      onclick="eliminarUsuario('${usuario.id}')"
      >
      Eliminar
      </button><td>
    </tr>`;
});
};   