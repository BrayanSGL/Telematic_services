var db;

var cajaContactos = document.getElementById("contactos");

function iniciarDB() {
    var btnGuardar = document.getElementById("guardar");

    btnGuardar.addEventListener("click", function(event) {
        event.preventDefault();
        AlmacenarContacto();
    });

    var solicitud = indexedDB.open("miDB");
    solicitud.addEventListener("error", mostarError); // Si hay un error
    solicitud.addEventListener("success", iniciar); // Si todo va bien
    solicitud.addEventListener("upgradeneeded", crearDB); // Si se crea la DB
}

function mostarError(evento) {
    alert("Error: " + evento.target.errorCode);
}

function iniciar(evento) {
    db = evento.target.result;
    mostrarLista();
    console.log("DB iniciada");
}

function crearDB(evento) {
    db = evento.target.result;
    var almacen = db.createObjectStore("usuarios", { keyPath: "id" });
    almacen.createIndex("indiceNombre", "nombre", { unique: false });
    console.log("DB creada");
}

function AlmacenarContacto() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var id = document.getElementById("id").value;

    var transaccion = db.transaction(["usuarios"], "readwrite"); // Iniciamos la transacción
    var almacen = transaccion.objectStore("usuarios"); // Seleccionamos el almacen

    var agregar = almacen.add({ nombre: nombre, edad: edad, id: id }); // Agregamos el objeto

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("id").value = "";
}

function MostrarContactos() {
    cajaContactos.innerHTML = "";

    var transaccion = db.transaction(["usuarios"], "readonly");
    var almacen = transaccion.objectStore("usuarios");
    
    var cursor = almacen.openCursor();

    cursor.addEventListener("success", mostrarLista);
}

function mostrarLista(evento) {
    var cursor = evento.target.result;

    if (cursor) {
        cajaContactos.innerHTML += "<p>" + cursor.value.id + " - " + cursor.value.nombre + " - " + cursor.value.edad + "</p>";
        cursor.continue();
    }
}



window.addEventListener("load", iniciarDB, false); // Cuando se cargue la página, iniciamos la DB
