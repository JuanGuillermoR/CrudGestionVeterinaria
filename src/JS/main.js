let informacionMascotas = [
	{
		nombre: "Max",
		especie: "Perro",
		raza: "Labrador Retriever",
		fechaNacimiento: new Date(2019, 5, 15), // Año, mes (de 0 a 11), día
		peso: 25, // en kilogramos
		estado: "estable",
		nombrePropietario: "Juan Pérez",
		documentoPropietario: "123456789",
		telefonoContacto: "123-456-7890",
		correoPropietario: "juan@example.com"
	},
	{
		nombre: "Luna",
		especie: "Gato",
		raza: "Siamés",
		fechaNacimiento: new Date(2020, 8, 10), // Año, mes (de 0 a 11), día
		peso: 4, // en kilogramos
		estado: "critico",
		nombrePropietario: "María García",
		documentoPropietario: "987654321",
		telefonoContacto: "987-654-3210",
		correoPropietario: "maria@example.com"
	},
	{
		nombre: "Kiwi",
		especie: "Pájaro",
		raza: "Periquito Australiano",
		fechaNacimiento: new Date(2017, 3, 25), // Año, mes (de 0 a 11), día
		peso: 0.05, // en kilogramos
		estado: "estable",
		nombrePropietario: "Pedro Rodríguez",
		documentoPropietario: "135792468",
		telefonoContacto: "321-654-9870",
		correoPropietario: "pedro@example.com"
	},
	{
		nombre: "Bola de Nieve",
		especie: "Conejo",
		raza: "Holandés Enano",
		fechaNacimiento: new Date(2023, 0, 5), // Año, mes (de 0 a 11), día
		peso: 1.2, // en kilogramos
		estado: "estable",
		nombrePropietario: "Laura Martínez",
		documentoPropietario: "246813579",
		telefonoContacto: "456-789-0123",
		correoPropietario: "laura@example.com"
	},
	{
		nombre: "Coco",
		especie: "Hamster",
		raza: "Hamster Sirio",
		fechaNacimiento: new Date(2024, 1, 20), // Año, mes (de 0 a 11), día
		peso: 0.1, // en kilogramos
		estado: "estable",
		nombrePropietario: "Carlos Sánchez",
		documentoPropietario: "369258147",
		telefonoContacto: "789-012-3456",
		correoPropietario: "carlos@example.com"
	},
	{
		nombre: "Speedy",
		especie: "Tortuga",
		raza: "Tortuga de Orejas Rojas",
		fechaNacimiento: new Date(2014, 6, 8), // Año, mes (de 0 a 11), día
		peso: 0.5, // en kilogramos
		estado: "estable",
		nombrePropietario: "Ana López",
		documentoPropietario: "975318642",
		telefonoContacto: "654-321-0987",
		correoPropietario: "ana@example.com"
	},
	{
		nombre: "Nemo",
		especie: "Pez",
		raza: "Pez Payaso",
		fechaNacimiento: new Date(2023, 5, 3), // Año, mes (de 0 a 11), día
		peso: 0.01, // en kilogramos
		estado: "estable",
		nombrePropietario: "Roberto Díaz",
		documentoPropietario: "582461397",
		telefonoContacto: "012-345-6789",
		correoPropietario: "luis@example.com"
	},
	{
		nombre: "Caramelito",
		especie: "Cobaya",
		raza: "Abisinio",
		fechaNacimiento: new Date(2023, 9, 12), // Año, mes (de 0 a 11), día
		peso: 0.5, // en kilogramos
		estado: "estable",
		nombrePropietario: "Elena González",
		documentoPropietario: "741258963",
		telefonoContacto: "234-567-8901",
		correoPropietario: "elena@example.com"
	},
	{
		nombre: "Spike",
		especie: "Iguana",
		raza: "Iguana Verde",
		fechaNacimiento: new Date(2020, 2, 17), // Año, mes (de 0 a 11), día
		peso: 2, // en kilogramos
		estado: "estable",
		nombrePropietario: "Roberto Díaz",
		documentoPropietario: "852369741",
		telefonoContacto: "567-890-1234",
		correoPropietario: "roberto@example.com"
	},
	{
		nombre: "Púas",
		especie: "Erizo",
		raza: "Erizo Pigmeo Africano",
		fechaNacimiento: new Date(2022, 11, 10), // Año, mes (de 0 a 11), día
		peso: 0.3, // en kilogramos
		estado: "estable",
		nombrePropietario: "Sara Ruiz",
		documentoPropietario: "963852741",
		telefonoContacto: "890-123-4567",
		correoPropietario: "sara@example.com"
	}
];
/*
Esta funcion me permite pedir la informacion de una mascota, teniendo la informacion de cada propiedad creo una variable tipo Object "{}" en la cual le asigno el valor a la llave correspondiente

y solo para agregarlo al array utilizo el metodo push 
*/
function addNewPet() {
    nombre = prompt("Ingresa el nombre de la mascota")
    especie =  prompt("Ingresa la especie"),
    raza = prompt("Ingresa la raza"),
    fechaNacimiento = new Date ( prompt("ingresa la fecha de nacimiento YYYY/MM/DD")),
    peso = parseFloat(prompt("ingresa el peso de la mascota")),
    estado = prompt("ingresa el estado de la mascota estable,critico"),
    nombrePropietario = prompt("ingresa el nombre del dueño"),
    documentoPropietario = prompt("ingresa el documento del dueño"),
    telefonoContacto =  prompt("ingresa el numero de contacto del dueño"),
    correoPropietario =  prompt("ingresa el correo del dueño")
    let newPet = {
        nombre: nombre,
        especie: especie,
        raza: raza,
        fechaNacimiento : fechaNacimiento,
        peso : peso,
        estado : estado,
        nombrePropietario: nombrePropietario,
        documentoPropietario: documentoPropietario,
        telefonoContacto: telefonoContacto,
        correoPropietario: correoPropietario
    }
    informacionMascotas.push(newPet)
}

/*
Esta funcion me permite recorrer con el forEach ya que es especialmente para los array y me imprime cada objeto que se encuentre en la lista
*/
function MostrarTodaslasMascotas(informacionMascotas) {
    informacionMascotas.forEach(element => {
        console.log(element);
    });
}

/*
Esta funcion me permite recorrer con el forEach ya que es especialmente para los array y me imprime cada objeto que se encuentre en la lista especificandole que solo me traiga el nombre de cada propietario
*/
function todosLosDueños(informacionMascotas) {     
    informacionMascotas.forEach(element => {
        console.log(element.nombrePropietario);
    });
}

/*
Esta funcion con el metodo find me recorre la lista con la condicion de que nombre de la mascota a buscar sea igual al nombre que ya existe en la lista, adicional se le pone tolowercase para evitar de que el nombre tenga que ser exactamente igual
*/
function buscarMascota(informacionMascotas) {
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea buscar:");
        let mascotaTrue = informacionMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
        if (mascotaTrue) {
            console.log("Mascota encontrada:");
            console.log(mascotaTrue);
        } else {
            console.log("La mascota no se encontró en la lista.");
        }
}

/*
Esta funcion con el metodo filter me recorre la lista con la condicion de que nombre del dueño a buscar sea igual al nombre que ya existe en la lista, sin embargo, este metodo me trae el nombre del propietario todo el objeto donde se encuentre el mismo nombre, adicional se le pone tolowercase para evitar de que el nombre tenga que ser exactamente igual
*/
function filtroMascotasConelMismoDueño(informacionMascotas) {
    let nombreDueño = prompt("Ingrese el nombre del dueño que desea Filtrar:");
    let dueño = informacionMascotas.filter(dueño => dueño.nombrePropietario.toLowerCase() === nombreDueño.toLowerCase());
    if (dueño) {
        console.log("El tiene las siguientes mascotas:");
        console.log(dueño);
    } else {
        console.log(`El ${nombreDueño} no un dueño`);
    } 
}

/*
Esta funcion con el metodo find me recorre la lista con la condicion de que nombre de la mascota a buscar sea igual al nombre que ya existe en la lista, adicional se le pone tolowercase para evitar de que el nombre tenga que ser exactamente igual

teniendo el objeto simplemete vuelvo a nombrar variables con los valores que quiero que se vayan a actualizar y solo accedo a cada valor y se le asigna un nuevo valor que previamente ya habiamos pedido
*/
function actualizarMascota(informacionMascotas) {
    let nombre = prompt("Ingrese el nombre de la mascota a actualizar:");
	// Buscar la mascota en la lista
    let mascotaEncontrada = informacionMascotas.find(mascota => mascota.nombre === nombre);
    
	if (mascotaEncontrada) {
    // Solicitar al usuario las nuevas propiedades de la mascota
    let nuevoNombre = prompt("Ingresa el nombre de la mascota")
    let nuevoEspecie =  prompt("Ingresa la especie")
    let nuevoRaza = prompt("Ingresa la raza")
    let nuevoFechaNacimiento = new Date ( prompt("ingresa la fecha de nacimiento YYYY/MM/DD"))
    let nuevoPeso = parseFloat(prompt("ingresa el peso de la mascota"))
    let nuevoEstado = prompt("ingresa el estado de la mascota estable,critico")
    let nuevoNombrePropietario = prompt("ingresa el nombre del dueño")
    let nuevodocumentoPropietario = prompt("ingresa el documento del dueño")
    let nuevotelefonoContacto =  prompt("ingresa el numero de contacto del dueño")
    let nuevocorreoPropietario =  prompt("ingresa el correo del dueño")

    // Actualizar las propiedades de la mascota encontrada
    mascotaEncontrada.nombre = nuevoNombre;
    mascotaEncontrada.especie = nuevoEspecie;
	mascotaEncontrada.raza = nuevoRaza;
	mascotaEncontrada.fechaNacimiento = nuevoFechaNacimiento;
	mascotaEncontrada.peso = nuevoPeso;
	mascotaEncontrada.estado = nuevoEstado;
	mascotaEncontrada.nombrePropietario = nuevoNombrePropietario;
	mascotaEncontrada.documentoPropietario = nuevodocumentoPropietario;
	mascotaEncontrada.telefonoContacto = nuevotelefonoContacto;
	mascotaEncontrada.correoPropietario = nuevocorreoPropietario;

    console.log("Mascota actualizada con éxito:", mascotaEncontrada);
} else {
    console.log("No se encontró ninguna mascota con ese nombre.");
}
}

/*
Esta funcion con el metodo findIndex me trae el indice donde el nombre de la mascota haya coincidido, para luego con el metodo splice eliminar su posicion 
*/
function eliminarMascota(informacionMascotas) {
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea Eliminar:");
    let eliminarMascota = informacionMascotas.findIndex(mascota => mascota.nombre === nombreMascota);
	

    if (eliminarMascota) {
		informacionMascotas.splice(eliminarMascota, 1);
        console.log("la mascota con el nombre",nombreMascota,"se ha eliminado");
    } else {
        console.log(`El ${nombreDueño} no un dueño`);
    } 
}

//se crea una funcion que se imprima el menu donde lo requiera adicional se pone el return para que la opcion que se eliga la pueda extrear por fuera de su scope
let opcion
function menu() {
    opcion = prompt(`---------Bienvenidos a la veterinaria---------
    1. Registrar una nueva mascota
    2. Ver toda la lista de mascotas
    3. Ver una lista de todos los dueños
    4. Buscar una mascota por el nombre
    5. Mis mascotas
    6. Actualizar la información de una mascota existente.
    7. Eliminar una mascota del array
    8. salir
    `)
    return opcion
}
menu()

//Utilizamos el la estructura de control while que me muestre el menu hasta no ingresar la opcion "8"
while (opcion != 8) {
    if (opcion == "1") {
		//Sin argumentos porque no necesitamos nada de la informacion del array
        addNewPet()
        menu()
    } else if (opcion == "2") {
        MostrarTodaslasMascotas(informacionMascotas)
        menu()
    }else if (opcion == "3") {
        todosLosDueños(informacionMascotas)
        menu()
    }else if (opcion == "4") {
        buscarMascota(informacionMascotas)
        menu();
    }else if (opcion == "5") {
        filtroMascotasConelMismoDueño(informacionMascotas)
        menu()
    }else if (opcion == "6") {
        actualizarMascota(informacionMascotas)
        menu()
    }else if (opcion == "7") {
		eliminarMascota(informacionMascotas)
		menu()
	}else{
		console.log("opcion no valida")
        menu()
	}
}