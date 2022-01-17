$(document).ready(iniciarProyecto);

function iniciarProyecto() {
    ocultarTodo();
    preCargaDatosDePacientes();
    preCargarDatosDeMedicos();
    preCargarDatosDeConsultas();
    marcarAlgunasConsultasComoPagaFinalizadas();
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
    $("#imagenPaciente").click(leerFotoPaciente);
    $("#leerArchivoFoto").hide();
    $("#leerArchivoFoto").change(tomarImagenNuevaPaciente);
    $("#liMarcarConsulta").click(mostrarTablaMedicosEnPacienteMarcarConsulta);
    $("#liModificarDatos").click(mostrarModificarDatosPaciente);
    $("#liVerConsultasNoFinalizadas").click(mostrarConsultasNoFinalizadas);
    $("#btnModificarDatos").click(modificarDatosPaciente);
    $("#aIdMedicoMarcarConsulta").click(elegirMedicoParaCrearConsulta);
    $("#btnPacienteConfirmaConsulta").click(mostrarCrearConsultaEnPacienteMarcarConsulta);
    $("#liVerConsultaFinalizada").click(mostrarTablaPacienteHistorialDeConsultas);
    $("#btnLogin").click(procesarLogin);
    $("#aLogOut").click(procesarCerrarSesion);
    $("#liMedicoRealizarConsulta").click(mostrarMedicoRealizarConsulta);
    $("#aNombrePacienteRealizarConsulta").click(elegirConsultaParaAtender);
    $("#btnMedicoVolverATablaConsultasNoFinalizadas").click(noMarcarConsultaComoFinalizadaEnRealizarConsultaYVolverMostrarTabla);
    $("#btnMarcarConsultaComoCerradaEnRealizarConsulta").click(marcarConsultaComoFinalizadaEnRealizarConsulta);
    $("#btnMarcarConsultaComoPagaEnRealizarConsulta").click(marcarConsultaComoPagaEnRealizarConsulta);
    $("#btnMarcarConsultaComoNoPagaEnRealizarConsulta").click(noMarcarConsultaComoPagaEnRealizarConsulta);
    $("#btnAsignarPesoYAltura").click(asignarPesoAlturaDelPacienteYMostrar);
    $("#btnCalcularImcPaciente").click(calcularImcDePacienteYMostrar);
    $("#btnAgregarDescripcionaConsulta").click(agregarDescripcionEnConsultaActualyMostrar);
    $("#selPacienteConsultasImpagas").html(crearComboPacientes());
    $("#btnMedicoVerConsultasImpagasUnPaciente").click(mostrartablaMedicoConsultasImpagasUnPaciente);
    $("#liMedicoConsultasImpagas").click(mostrarMedicoConsultasImpagas);
    $("#btnMedicoVerConsultasImpagasTodosLosPacientes").click(mostrarMedicoConsultasImpagas);
    $("#aCodigoConsultaParaPagar").click(elegirConsultaParaPagar);
    $("#btnMarcarConsultaComoPagaEnConsultasImpagas").click(marcarConsultaComoPagaEnConsultasImpagasYMostrar);
    $("#btnNoMarcarConsultaComoPagaEnConsultasImpagas").click(noMarcarConsultaComoPagaEnConsultasImpagas);
    $("#liMedicoHabilitarDeshabilitar").click(mostrarMedicoHabilitaDeshabilita);
    $("#aCodigoPacienteHabilitarDeshabilitar").click(elegirPacienteParaHabilitarDeshabilitar);
    $("#btnMarcarPacienteComoHabilitado").click(marcarPacienteComoHabilitado);
    $("#btnMarcarPacienteComoDeshabilitado").click(marcarPacienteComoDeshabilitado);
    $("#liMedicoVerConsultas").click(mostrarMedicoVerTodasSusConsultas);
    $("#btnMedicoVerHistoricoConsultasTodosLosPacientes").click(mostrarMedicoVerTodasSusConsultas);
    $("#btnMedicoVerHistoricoConsultasUnPaciente").click(mostrarMedicoVerTodasLasConsultasUnPaciente);
    $("#selPacienteHistoricoConsultas").html(crearComboPacientes());
    $("#aCodigoConsultaVerConsultasMedico").click(elegirConsultaParaVerSusDatos);

}

/* --------- Region Crear Datos y Precarga ---------*/

//arrays para guardar pacientes,medicos,login, consultas
var pacientes = new Array();
var medicos = new Array();
var login = new Array();
var consultas = new Array();

//contador para codigo de pacientes, medicos y consultas
var codigoPaciente = 0;
var codigoMedico = 0;
var codigoConsulta = 0;

//recibe datos de paciente por parametro, genera un codigo de paciente, agrega al array pacientes, y al array login le agrega tipo y cedula
//antes de agregar, valida que todos los datos sean correctos
function agregarPacientes(pCedula, pNombre, pApellido, pFoto, pContraseña, pEstado, pPesoMax, pPesoMin, pIMC) {
    codigoPaciente++;
    var datosPacientes = {"Identificador": codigoPaciente, "Cedula": pCedula, "Nombre": pNombre, "Apellido": pApellido, "Foto": pFoto, "Contraseña": pContraseña, "Estado": pEstado, "PesoMax": pPesoMax, "PesoMin": pPesoMin, "IMC": pIMC};
    if (validarAgregarPaciente(codigoPaciente, pCedula, pNombre, pApellido, pContraseña, pEstado)) {
        pacientes.push(datosPacientes);
        login.push({"Tipo": "paciente", "Cedula": pCedula});
    }
}

//llama a funcion de agregar pacientes y precarga los datos
function preCargaDatosDePacientes() {

    agregarPacientes(11111111, "Luis", "Suarez", "1.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111112, "Edinson", "Cavani", "2.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111113, "Diego", "Godin", "3.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111114, "Alvaro", "Gonzalez", "4.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111115, "Jose", "Gimenez", "5.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111116, "Fernando", "Muslera", "6.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111117, "Martin", "Caceres", "7.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111118, "Matias", "Vecino", "8.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111119, "Diego", "Polenta", "9.png", "12345", true, 80, 70, 23);
    agregarPacientes(11111120, "Esteban", "Conde", "10.png", "12345", false, 80, 70, 23);
    agregarPacientes(11111121, "Rodrigo", "Aguirre", "11.png", "12345", false, 80, 70, 23);
    agregarPacientes(11111122, "Martin", "Liguera", "12.png", "12345", false, 80, 70, 23);
}

//recibe datos de medico por parametro, genera un codigo de medico, agrega al array medicos, y al array login le agrega tipo y cedula
//antes de agregar, valida que todos los datos sean correctos
function agregarMedicos(pCedula, pNombre, pApellido, pEspecialidad, pContraseña) {
    codigoMedico++;
    var datosMedicos = {"Identificador": codigoMedico, "Cedula": pCedula, "Nombre": pNombre, "Apellido": pApellido, "Especialidad": pEspecialidad, "Contraseña": pContraseña};
    if (validarAgregarMedico(codigoMedico, pCedula, pNombre, pApellido, pEspecialidad, pContraseña)) {
        medicos.push(datosMedicos);
        login.push({"Tipo": "medico", "Cedula": pCedula});
    }
}

//llama a funcion de agregar medicos y precarga los datos
function preCargarDatosDeMedicos() {

    agregarMedicos(22222221, "Alberto", "Fernandez", "Anestesiologia", "54321");
    agregarMedicos(22222222, "Rodrigo", "Rodriguez", "Cardiologia", "54321");
    agregarMedicos(22222223, "Mauricio", "Villar", "Fonoaudiologo", "54321");
    agregarMedicos(22222224, "Ricardo", "Gonzalez", "Odontologia", "54321");
    agregarMedicos(22222225, "Richard", "Oliva", "Psiquiatria", "54321");
    agregarMedicos(22222226, "Matias", "Goldaracena", "Radiologia", "54321");
    agregarMedicos(22222227, "Ana", "Paz", "Pediatria", "54321");
    agregarMedicos(22222228, "Maria", "Gentile", "Dermatologia", "54321");
    agregarMedicos(22222229, "Camila", "Franco", "Nutricionista", "54321");
    agregarMedicos(22222230, "Nara", "Fagundez", "Endocrinologia", "54321");
    agregarMedicos(22222231, "Jose", "Ubal", "Kinesiologia", "54321");
    agregarMedicos(22222232, "Bruno", "Imobile", "Cirugia", "54321");
    agregarMedicos(22222233, "Felipe", "Caicedo", "Psiquiatria", "54321");
    agregarMedicos(22222234, "Sebastian", "Rodriguez", "Radiologia", "54321");
    agregarMedicos(22222235, "Manotas", "Mejia", "Odontologia", "54321");
}

//recibe un id de medico, recorre array de consultas
//a cada consulta del medico aumenta el contador, al final lo devuelve
function devolverCantidadConsultasMedico(pIdMedico) {
    var cantidadConsultas = 0;
    pIdMedico = parseInt(pIdMedico);
    if (!isNaN(pIdMedico)) {
        for (var i = 0; i < consultas.length; i++) {
            var unaConsulta = consultas[i];
            if (pIdMedico === unaConsulta.IdMedico && unaConsulta.Finalizada) {
                cantidadConsultas++;
            }
        }
    }
    return cantidadConsultas;
}

//recibe datos por parametro, llama a funcion de generar clave de consulta, agrega la consulta al array de consultas
//antes de agregar, valida que todos los datos sean correctos
function agregarConsultas(pClaveMedico, pClavePaciente, pFinalizada, pPaga, pDescripcion, pNombreMedico, pApellidoMedico, pPesoPaciente, pAlturaPaciente) {
    var claveDeConsultaGenerada = generarClaveDeConsultas(pNombreMedico, pApellidoMedico);

    var datosConsultas = {"Codigo": claveDeConsultaGenerada, "IdMedico": pClaveMedico, "IdPaciente": pClavePaciente, "Finalizada": pFinalizada, "Paga": pPaga, "Descripcion": pDescripcion, "PesoPaciente": pPesoPaciente, "AlturaPaciente": pAlturaPaciente};
    if (validarAgregarConsulta(claveDeConsultaGenerada, pClaveMedico, pClavePaciente, pFinalizada, pPaga)) {
        consultas.push(datosConsultas);
    }
}

//llama a funcion agregarConsultas y precarga los datos
//se generan consultas varias, repitiendo el medico, el paciente, con descripcion vacia
//no pagas y pagas, no finalizadas y finalizadas
function preCargarDatosDeConsultas() {
    agregarConsultas(1, 2, false, false, "poner curita", "Alberto", "Fernandez", 75, "1.80");
    agregarConsultas(2, 3, false, false, "", "Rodrigo", "Rodriguez", "", "");
    agregarConsultas(3, 4, false, false, "poner curita", "Mauricio", "Villar", "", "");
    agregarConsultas(4, 5, false, false, "poner curita", "Ricardo", "Gonzalez");
    agregarConsultas(5, 6, false, false, "", "Richard", "Oliva", "", "");
    agregarConsultas(6, 7, false, false, "poner curita", "Matias", "Goldaracena", "", "");
    agregarConsultas(7, 8, false, false, "poner curita", "Ana", "Paz", "", "");
    agregarConsultas(8, 9, false, false, "poner curita", "Maria", "Gentile", "", "");
    agregarConsultas(9, 10, false, false, "poner curita", "Camila", "Franco", "", "");
    agregarConsultas(10, 11, false, false, "", "Nara", "Fagundez", "", "");
    agregarConsultas(11, 12, false, false, "", "Jose", "Ubal", "", "");
    agregarConsultas(12, 1, false, false, "poner curita", "Bruno", "Imobile", "", "");
    agregarConsultas(12, 1, false, false, "", "Bruno", "Imobile", "", "");
    agregarConsultas(12, 1, false, false, "", "Bruno", "Imobile", "", "");
    agregarConsultas(12, 1, false, false, "", "Bruno", "Imobile", "", "");
    agregarConsultas(13, 1, false, false, "poner curita", "Felipe", "Caicedo", "", "");
    agregarConsultas(14, 3, false, false, "poner curita", "Sebastian", "Rodriguez", "", "");
    agregarConsultas(15, 3, false, false, "poner curita", "Manotas", "Mejia", "", "");
    agregarConsultas(1, 3, false, false, "poner curita", "Alberto", "Fernandez", 75, "1.80");
    agregarConsultas(1, 1, false, false, "poner curita", "Alberto", "Fernandez", 75, "1.80");
    agregarConsultas(1, 7, false, false, "poner curita", "Alberto", "Fernandez", "", "");
    agregarConsultas(2, 8, false, false, "", "Rodrigo", "Rodriguez", "", "");
    agregarConsultas(3, 9, false, false, "poner curita", "Mauricio", "Villar", "", "");
    agregarConsultas(4, 11, false, false, "", "Ricardo", "Gonzalez", "", "");
    agregarConsultas(5, 12, false, false, "poner curita", "Richard", "Oliva", 75, "1.80");
    agregarConsultas(5, 3, false, false, "", "Richard", "Oliva", "", "");
    agregarConsultas(5, 12, false, false, "", "Richard", "Oliva", "", "");
    agregarConsultas(5, 10, false, false, "", "Richard", "Oliva", "", "");
    agregarConsultas(5, 8, false, false, "se puso desc", "Richard", "Oliva", "", "");
    agregarConsultas(5, 10, false, false, "se puso desc", "Richard", "Oliva", "", "");
    agregarConsultas(5, 7, false, false, "se puso desc", "Richard", "Oliva", "", "");
    agregarConsultas(5, 3, false, false, "se puso desc", "Richard", "Oliva", "", "");
    agregarConsultas(5, 3, false, false, "se puso desc", "Richard", "Oliva", "", "");
    agregarConsultas(6, 1, false, false, "poner curita", "Matias", "Goldaracena", "", "");
    agregarConsultas(13, 2, false, false, "poner curita", "Felipe", "Caicedo", "", "");
    agregarConsultas(14, 6, false, false, "poner curita", "Sebastian", "Rodriguez", "", "");
    agregarConsultas(15, 9, false, false, "poner curita", "Manotas", "Mejia", "", "");
    agregarConsultas(13, 5, false, false, "se puso desc", "Felipe", "Caicedo", "", "");
    agregarConsultas(14, 4, false, false, "se puso desc", "Sebastian", "Rodriguez", "", "");
    agregarConsultas(15, 10, false, false, "", "Manotas", "Mejia", "", "");
}

//recorre array de consultas, marca algunas consultas como pagas
//y otras como finalizadas, para tener variedad en los datos, antes de finalizarlas, valida que tenga descripcion
function marcarAlgunasConsultasComoPagaFinalizadas() {
    for (var i = 0; i < consultas.length; i++) {
        if (consultas[i].Codigo === "AFER1" || consultas[i].Codigo === "FCAI38" || consultas[i].Codigo === "MGEN8" || consultas[i].Codigo === "ROLI5" || consultas[i].Codigo === "ROLI29" || consultas[i].Codigo === "ROLI27") {
            consultas[i].Paga = true;
        }
        if (consultas[i].Codigo === "AFER20" && validarSiSePuedeCerrarConsulta("AFER20") || consultas[i].Codigo === "AFER21" && validarSiSePuedeCerrarConsulta("AFER21") || consultas[i].Codigo === "BIMO12" && validarSiSePuedeCerrarConsulta("BIMO12") || consultas[i].Codigo === "MMEJ18" && validarSiSePuedeCerrarConsulta("MMEJ18") || consultas[i].Codigo === "ROLI30" && validarSiSePuedeCerrarConsulta("ROLI30") || consultas[i].Codigo === "ROLI32" && validarSiSePuedeCerrarConsulta("ROLI32") || consultas[i].Codigo === "FCAI38" && validarSiSePuedeCerrarConsulta("FCAI38") || consultas[i].Codigo === "SROD39" && validarSiSePuedeCerrarConsulta("SROD39")) {
            consultas[i].Finalizada = true;
        }
    }
}

//recibe id de medico, recorre array de medicos y llama a funcion para generar
//clave de consulta, retorna -1 o la clave
function generarClaveConIdMedicoParaAgregarNuevaConsulta(pIdMedico) {
    pIdMedico = parseInt(pIdMedico);
    var encontreMedico = false;
    var claveNuevaConsulta = -1;
    for (var i = 0; i < medicos.length && !encontreMedico; i++) {
        var unMedico = medicos[i];

        if (pIdMedico === unMedico.Identificador) {
            var nombreMedico = unMedico.Nombre;
            var apellidoMedico = unMedico.Apellido;
            encontreMedico = true;
        }
    }
    claveNuevaConsulta = generarClaveDeConsultas(nombreMedico, apellidoMedico);
    return claveNuevaConsulta;
}
//recibe un codigo de consulta, recorre array consultas
//si ya existe el codigo, retorna true, si no, retorna false
function validarSiExisteCodigoConsulta(pCodigoConsulta) {
    var existe = false;
    for (var i = 0; i < consultas.length && !existe; i++) {
        var unaConsulta = consultas[i];
        if (pCodigoConsulta === unaConsulta.Codigo) {
            existe = true;
        }
    }
    return existe;
}

//recibe id de medico y paciente, si es finalizada y si es paga
//valida que no sean vacios, que sean numeros en caso de los ID
//que el largo sea 5 o mayor
//que no exista ya el codigo de consulta
//si pasa todas las validaciones, devuelve true, si no, false
function validarAgregarConsulta(pCodigoConsulta, pIdMedico, pIdPaciente, pFinalizada, pPaga) {

    var valido = true;
    if (validarSiExisteCodigoConsulta(pCodigoConsulta))
        valido = false;
    if (isNaN(pIdMedico))
        valido = false;
    if (isNaN(pIdPaciente))
        valido = false;
    if (pCodigoConsulta.length < 5)
        valido = false;
    if (pFinalizada)
        valido = false;
    if (pPaga)
        valido = false;
    return valido;
}
//recibe una cedula de paciente, recorre array pacientes
//si ya existe la cedula, retorna true, si no, retorna false
function validarSiExisteCiPaciente(pCi) {
    pCi = parseInt(pCi);
    var existe = false;
    for (var i = 0; i < pacientes.length && !existe; i++) {
        var unPaciente = pacientes[i];
        if (pCi === unPaciente.Cedula) {
            existe = true;
        }
    }
    return existe;
}

//recibe id de paciente, cedula, nombre, apellido, contraseña y estado
//valida numericos y que texto no sea vacio, que no exista la CI
//retorna true si valida, si no, false
function validarAgregarPaciente(pIdPaciente, pCedula, pNombre, pApellido, pContraseña, pEstado) {
    var valido = true;
    if (validarSiExisteCiPaciente(pCedula))
        valido = false;
    if (isNaN(pIdPaciente))
        valido = false;
    if (pNombre === "")
        valido = false;
    if (pApellido === "")
        valido = false;
    if (isNaN(pCedula))
        valido = false;
    if (pContraseña === "")
        valido = false;
    if (pEstado === "")
        valido = false;
    return valido;
}

//recibe una cedula de medico, recorre array medicos
//si ya existe la cedula, retorna true, si no, retorna false
function validarSiExisteCiMedico(pCi) {
    pCi = parseInt(pCi);
    var existe = false;
    for (var i = 0; i < medicos.length && !existe; i++) {
        var unMedico = medicos[i];
        if (pCi === unMedico.Cedula) {
            existe = true;
        }
    }
    return existe;
}

//recibe id de medico, cedula, nombre, apellido, contraseña y especialidad
//valida numericos y que texto no sea vacio, que no exista la CI
//retorna true si valida, si no, false
function validarAgregarMedico(pIdMedico, pCedula, pNombre, pApellido, pEspecialidad, pContraseña) {
    var valido = true;
    if (validarSiExisteCiMedico(pCedula))
        valido = false;
    if (isNaN(pIdMedico))
        valido = false;
    if (pNombre === "")
        valido = false;
    if (pApellido === "")
        valido = false;
    if (isNaN(pCedula))
        valido = false;
    if (pContraseña === "")
        valido = false;
    if (pEspecialidad === "")
        valido = false;
    return valido;
}

//recibe nombre y apellido del medico, tiene contador para el ID
//con ambos arma la clave de la consulta y la retorna
function generarClaveDeConsultas(pNombre, pApellido) {
    codigoConsulta++;
    var claveConsulta;

    if (pNombre !== "" && pApellido !== "") {
        pNombre = pNombre.toUpperCase();
        pApellido = pApellido.toUpperCase();
        claveConsulta = pNombre.charAt(0);
        var ite = 0;
        while (ite <= 2) {
            claveConsulta += pApellido.charAt(ite);
            ite++;
        }
        claveConsulta += codigoConsulta;
    }
    return claveConsulta;
}

//oculta divs de paciente, medico y logout, deja visible div para login
function ocultarTodo() {
    $("#divPaciente").hide();
    $("#divMedico").hide();
    $("#divLogOut").hide();
}

/* ------- Region LogIn LogOut ------- */

//oculta y muestra divs cuando se loguea un paciente
function ocultarMostrarCuandoSeLogueaPaciente() {
    $("#divPaciente").show();
    $("#divCabezalLogin").hide();
    $("#divMarcarConsultaPaciente").hide();
    $("#divPacienteConsultasPendientes").hide();
    $("#divModificarDatos").hide();
    $("#divLogOut").show();
    $("#divPacienteHistorialDeConsultas").hide();
}

//oculta y muestra divs cuando se loguea un medico
function ocultarMostrarCuandoSeLogueaMedico() {
    $("#divMedico").show();
    $("#divCabezalLogin").hide();
    $("#divMedicoRealizarConsulta").hide();
    $("#divMedicoConsultasImpagas").hide();
    $("#divMedicoVerConsultas").hide();
    $("#divMedicoHabilitarDeshabilitar").hide();
    $("#divLogOut").show();
}


//variable global que se le asigna el nombre del usuario logueado
var usuarioLogueado = "";
//variable global que se le asigna la CI del usuario logueado
var ciLogueada = "";

//toma CI y clave ingresados por usuario, valida que no sean vacios
//llama a funcion que busca al usuario y valida la contraseña
//llama a funciones para mostrar y ocultar divs, muestra errores si corresponde
function procesarLogin() {
    var cedula = parseInt($("#txtLogin").val());
    var contraseña = $("#txtContraseña").val();
    var mensaje = "";

    if (contraseña !== "" && cedula !== "") {

        if (verificarUsuarioEnLogin(cedula, contraseña) && buscarTipoEnLogin(cedula) === "paciente" && usuarioLogueado !== "" && ciLogueada !== "") {
            ocultarMostrarCuandoSeLogueaPaciente();
            $("#lblUsuarioLogueado").html("(" + usuarioLogueado + ")");
            pacienteDeshabilitadoSoloModificaDatos(ciLogueada);
        } else if (verificarUsuarioEnLogin(cedula, contraseña) && buscarTipoEnLogin(cedula) === "medico" && usuarioLogueado !== "" && ciLogueada !== "") {
            ocultarMostrarCuandoSeLogueaMedico();
            $("#lblUsuarioLogueado").html("(" + usuarioLogueado + ")");

        } else {
            mensaje = "Datos no coinciden <BR>";
            mensaje += "Intente nuevamente";
            $("#lblErrorEnLogin").html(mensaje);
        }
    } else {
        mensaje = "La CI y la Clave no pueden ser vacios";
        $("#lblErrorEnLogin").html(mensaje);
    }
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//llama a buscarTipoEnLogin que recibe una CI por parametro
//segun el tipo de retorno que reciba, busca el usuario
function verificarUsuarioEnLogin(pCedula, pContraseña) {
    var comparoClaveConCI = false;

    if (buscarTipoEnLogin(pCedula) === "paciente") {
        var ite = 0;
        while (ite < pacientes.length && !comparoClaveConCI) {
            var aux = pacientes[ite];
            if (pCedula === aux.Cedula && pContraseña === aux.Contraseña) {
                comparoClaveConCI = true;
                usuarioLogueado = aux.Nombre;
                ciLogueada = parseInt(aux.Cedula);
            }
            ite++;
        }
    }

    if (buscarTipoEnLogin(pCedula) === "medico") {
        var ite = 0;
        while (ite < medicos.length && !comparoClaveConCI) {
            var aux = medicos[ite];
            if (pCedula === aux.Cedula && pContraseña === aux.Contraseña) {
                comparoClaveConCI = true;
                usuarioLogueado = aux.Nombre;
                ciLogueada = parseInt(aux.Cedula);
            }
            ite++;
        }
    }
    return comparoClaveConCI;
}

//busca el tipo de la CI ingresada para el login y lo retorna
function buscarTipoEnLogin(pCedula) {
    var encontre = false;
    var ite = 0;
    var tipo = "";
    //buscar el tipo desde la cedula ingresada
    while (!encontre && ite < login.length) {
        var unTipo = login[ite];

        if (pCedula === unTipo.Cedula) {
            encontre = true;
            tipo = unTipo.Tipo;
        }
        ite++;
    }
    return tipo;
}

//oculta divs de paciente y medico, vuelve a mostrar div de login y deja vacia
// a las variables que llevan el nombre del usuario logueadoy la CI,
//deja vacios a los input txtLogin y txtContraseña
function procesarCerrarSesion() {
    $("#divPaciente").hide();
    $("#divMedico").hide();
    $("#divCabezalLogin").show();
    $("#divLogOut").hide();
    usuarioLogueado = "";
    ciLogueada = "";
    $("#txtLogin").val("");
    $("#txtContraseña").val("");
    $("#lblErrorEnLogin").empty();
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//funcion que le quita el valor a las variables globales
//para evitar arrastrarlo y tener errores
function dejarVariablesGlobalesSinValor() {
    codigoConsultaARealizar = "";
    idPacienteHabilitarDeshabilitar = "";
    codigoConsultaParaPagar = "";
    codigoConsultaParaVerSusDatos = "";
    idMedicoCrearConsulta = "";
}

/* ---------------------- Seccion Medico ---------------------- */

/* ------- Region Medico Realizar Consulta ------- */

//recibe un Peso, valida que sea numerico y lo compara con el peso minimo del paciente
//true si menor, false si no lo es
function validoSiEsPesoMinimoDelPaciente(pIdPaciente, pPeso) {
    var esMinimo = false;
    var nuevoPeso = parseFloat(pPeso);
    var idPaciente = parseInt(pIdPaciente);

    if (!isNaN(nuevoPeso) && !isNaN(idPaciente)) {
        for (var i = 0; i < pacientes.length && !esMinimo; i++) {
            var unPaciente = pacientes[i];

            if (unPaciente.Identificador === idPaciente && nuevoPeso < unPaciente.PesoMin) {
                esMinimo = true;
            }
        }
    }
    return esMinimo;
}

//recibe un Peso, valida que sea numerico y lo compara con el peso maximo del paciente
//true si mayor, false si no lo es
function validoSiEsPesoMaximoDelPaciente(pIdPaciente, pPeso) {
    var esMaximo = false;
    var nuevoPeso = parseFloat(pPeso);
    var idPaciente = parseInt(pIdPaciente);

    if (!isNaN(nuevoPeso) && !isNaN(idPaciente)) {
        for (var i = 0; i < pacientes.length && !esMaximo; i++) {
            var unPaciente = pacientes[i];

            if (unPaciente.Identificador === idPaciente && nuevoPeso > unPaciente.PesoMax) {
                esMaximo = true;
            }
        }
    }
    return esMaximo;
}

//oculta y muestra divs a entrar en Medico Realizar Consulta
function ocultarYMostrarEnMedicoRealizarConsulta() {
    $("#divMedicoRealizarConsulta").show();
    $("#divPesoYAlturaDePaciente").hide();
    $("#divMarcarConsultaComoCerradaoNo").hide();
    $("#divMarcarConsultaComoPagaONoEnRealizarConsulta").hide();
    $("#divMedicoConsultasImpagas").hide();
    $("#divMedicoVerConsultas").hide();
    $("#divMedicoHabilitarDeshabilitar").hide();
}

//llama a funcion para ocultar y mostrar divs
//muestra tabla de consultas sin finalizar
//deja vacias a variables globales para no arrastrar su valor
function mostrarMedicoRealizarConsulta() {
    dejarVariablesGlobalesSinValor();
    consultas.sort(criterioOrdenConsultasPorCodigoAsc);
    ocultarYMostrarEnMedicoRealizarConsulta();
    $("#divTablaMedicoRealizarConsulta").show();
    $("#divTablaMedicoRealizarConsulta").html(tablaMedicoRealizarConsulta() + "<BR>");
    $(".seleccionarPacienteParaConsulta").click(elegirConsultaParaAtender);
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//busca en array de medicos segun la CI que se le pase y devuelve el medico
function devolverMedicoSegunCedula(pCedula) {
    var unMedico = "";
    var encontreMedico = false;
    var iterador = 0;

    while (iterador < medicos.length && !encontreMedico) {
        var unaCedula = parseInt(medicos[iterador].Cedula);

        if (pCedula === unaCedula) {
            unMedico = medicos[iterador];
            encontreMedico = true;
        }
        iterador++;
    }
    return unMedico;
}

//recibe un codigo de consulta, valida que no sea vacio
//recorre array de consultas, si la encuentra retorna el Id del paciente asociado
function devolverIdPacienteSegunConsulta(pIdConsulta) {
    var idPaciente = 0;
    var encontreIdPaciente = false;

    if (pIdConsulta !== "") {
        var iterador = 0;
        while (iterador < consultas.length && !encontreIdPaciente) {
            var unIdDeConsulta = consultas[iterador].Codigo;

            if (pIdConsulta === unIdDeConsulta) {
                idPaciente = parseInt(consultas[iterador].IdPaciente);
                encontreIdPaciente = true;
            }
            iterador++;
        }
    }
    return idPaciente;
}

//pido ID del Medico,creo tabla, recorro array consultas
//filtro que consulta no sea finalizada y trabajar con la CI logueada
//recorro array de pacientes para sacar la CI y el nombre
//codigo de consulta es un link, al hacer click habilita un div para atender al paciente de dicha consulta
function tablaMedicoRealizarConsulta() {
    var medicoLogueado = devolverMedicoSegunCedula(ciLogueada);
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H1>Consultas no finalizadas</H1><H4>Seleccione una</H4></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>ID Consulta</div><div class='Cell'>Cedula</div><div class='Cell'>Nombre</div><div class='Cell'>Apellido</div><div class='Cell'>Codigo Medico</div><div class='Cell'>Descrpicion de Consulta</div> ";
    tabla += "</div>";
    for (var i = 0; i < consultas.length; i++) {
        if (!consultas[i].Finalizada && medicoLogueado.Identificador === consultas[i].IdMedico) {
            var encontre = false;
            for (var ite = 0; ite < pacientes.length && !encontre; ite++) {
                var unPaciente = pacientes[ite];
                if (consultas[i].IdPaciente === unPaciente.Identificador) {
                    var nombrePaciente = unPaciente.Nombre;
                    var apellidoPaciente = unPaciente.Apellido;
                    var cedulaPaciente = unPaciente.Cedula;
                    encontre = true;
                }
            }
            tabla += "<div class='Row'>";
            tabla += "<div class='Cell'><a href='#nombrePaciente' id='aNombrePacienteRealizarConsulta' class='seleccionarPacienteParaConsulta'> " + consultas[i].Codigo + "</a></div>";
            tabla += "<div class='Cell'>" + cedulaPaciente + "</div>";
            tabla += "<div class='Cell'>" + nombrePaciente + "</div>";
            tabla += "<div class='Cell'>" + apellidoPaciente + "</div>";
            tabla += "<div class='Cell'>" + consultas[i].IdMedico + "</div>";
            tabla += "<div class='Cell'>" + consultas[i].Descripcion + "</div>";

            tabla += "</div>";
        }
    }
    return tabla;
}

//variable global para poder usarla desde otras funciones
//y que la funcion elegirConsultaParaAtender() no maneje logica
var codigoConsultaARealizar = "";

//elige de la tabla de consultas no finalizadas
//llama a funcion para saber id de paciente, despues llama a funcion para tener todos los datos del paciente
//guarda el codigo de consulta que se hizo click,y el nombre del paciente, muestra div para atender al paciente
function elegirConsultaParaAtender() {
    codigoConsultaARealizar = $(this).html().trim();
    $("#lblConsultaASerRealizada").val(codigoConsultaARealizar);
    $("#lblConsultaASerRealizada").prop("disabled", true);
    $("#divPesoYAlturaDePaciente").show();
    $("#divMarcarConsultaComoPagaONoEnRealizarConsulta").show();
    $("#divMarcarConsultaComoCerradaoNo").show();
    dejarCamposVaciosEnRealizarConsulta();
    $("#divTablaMedicoRealizarConsulta").hide();
    var idUnPaciente = devolverIdPacienteSegunConsulta(codigoConsultaARealizar);
    var unPaciente = devolverPacienteSegunID(idUnPaciente);
    $("#lblNombrePacienteEnRealizarConsulta").val(unPaciente.Nombre + " " + unPaciente.Apellido);
    $("#lblNombrePacienteEnRealizarConsulta").prop("disabled", true);
}

//recibe un id de paciente, recorre array pacientes hasta encontrarlo
//devuelve un ascociativo con los datos del paciente
function devolverPacienteSegunID(pIdPaciente) {
    var unPaciente = "";
    var encontrePaciente = false;
    for (var i = 0; i < pacientes.length && !encontrePaciente; i++) {
        var pacienteActual = pacientes[i];
        if (pacienteActual.Identificador === pIdPaciente) {
            unPaciente = pacienteActual;
            encontrePaciente = true;
        }
    }
    return unPaciente;
}

//al seleccionar una consulta,deja los campos de texto vacios
//si se marca cerrar o no la consulta, tambien deja campos de texto vacios
function dejarCamposVaciosEnRealizarConsulta() {
    $("#txtPesoPaciente").val("");
    $("#txtAlturaPaciente").val("");
    $("#divAvisarSiAsignoPesoAltura").empty();
    $("#divAvisarPesoMaxOMin").empty();
    $("#divMostrarImcPaciente").empty();
    $("#txtAreaIngresarDescripcionaConsulta").val("");
    $("#divAvisarSiSeAgregoDescripcionaConsulta").empty();
    $("#divAvisarSiSeCerroConsultaEnRealizarConsulta").empty();
    $("#divAvisarSiSePagoConsultaEnRealizarConsulta").empty();
}

//si el medico no finaliza consulta, escondo divs
//dejo campos de texto vacios y dejo tabla de consultas no finalizadas
//vuelvo a mostrar la tabla para que se actualice si se modifica algo
function noMarcarConsultaComoFinalizadaEnRealizarConsultaYVolverMostrarTabla() {
    $("#divPesoYAlturaDePaciente").hide();
    $("#divMarcarConsultaComoPagaONoEnRealizarConsulta").hide();
    $("#divMarcarConsultaComoCerradaoNo").hide();
    dejarCamposVaciosEnRealizarConsulta();
    $("#divTablaMedicoRealizarConsulta").show();
    $("#divTablaMedicoRealizarConsulta").html(tablaMedicoRealizarConsulta());
    $(".seleccionarPacienteParaConsulta").click(elegirConsultaParaAtender);

}

//recibe un codigo de consulta y una descripcion, valida que el largo dela descripcion
//sea mayor a 5 , recorre array de consultas
//si encuentra la consulta y no esta finalizada, agrega la descripcion y retorna true
//de lo contrario false
function validarSiAgregoDescripcionaConsulta(pIdConsulta, pDescripcion) {
    var agrego = false;
    if (pDescripcion.length > 5 && pIdConsulta !== "") {
        for (var i = 0; i < consultas.length && !agrego; i++) {
            var unaConsulta = consultas[i];

            if (pIdConsulta === unaConsulta.Codigo && !unaConsulta.Finalizada) {
                unaConsulta.Descripcion = pDescripcion;
                agrego = true;
            }
        }
    }
    return agrego;
}

//recibe codigo de consulta, peso y altura, parse y valida que codigo no sea vacio
//recorre array consultas, si encuentra la consulta le agrega el peso y altura
//retorna true si agrega, si no, false
function agregarPesoYAlturaAConsulta(pIdConsulta, pPeso, pAltura) {
    var agrego = false;
    pPeso = parseFloat(pPeso);
    pAltura = parseFloat(pAltura);

    if (!isNaN(pPeso) && !isNaN(pAltura) && pIdConsulta !== "") {

        for (var i = 0; i < consultas.length && !agrego; i++) {
            var unaConsulta = consultas[i];

            if (pIdConsulta === unaConsulta.Codigo) {
                unaConsulta.PesoPaciente = pPeso;
                unaConsulta.AlturaPaciente = pAltura;
                agrego = true;
            }
        }
    }
    return agrego;
}

//recibe codigo de consulta, recorre array de consultas
//si la encuentra y la descripcion no es vacia, la marca como finalizada
//retorna true o false para saber si lo hizo o no desde otra funcion
function validarSiSePuedeCerrarConsulta(pIdConsulta) {
    var sePuede = false;
    if (pIdConsulta !== "") {
        for (var i = 0; i < consultas.length && !sePuede; i++) {
            var unaConsulta = consultas[i];

            if (unaConsulta.Codigo === pIdConsulta && unaConsulta.Descripcion !== "") {
                sePuede = true;
            }
        }
    }
    return sePuede;
}

//recibe un id de consulta, recorre array de consultas
//si encuentra la consulta, llama a funcion para validar si se puede cerrar
//retorna true o false para saber desde otra funcion si se cerro o no
function marcarConsultaComoFinalizada(pIdConsulta) {
    var finalizo = false;
    for (var i = 0; i < consultas.length && !finalizo; i++) {
        var unaConsulta = consultas[i];

        if (pIdConsulta === unaConsulta.Codigo) {

            if (validarSiSePuedeCerrarConsulta(pIdConsulta)) {
                finalizo = true;
                unaConsulta.Finalizada = true;
            }
        }
    }
    return finalizo;
}

//recibe codigo de consulta, la busca y si la encuentra llama a calcularIMC
//pasandole datos de la consulta y devuelve un imc
function calcularIMCenConsulta(pIdConsulta) {
    var imc = -1;
    if (pIdConsulta !== "") {
        var encontreConsulta = false;
        for (var i = 0; i < consultas.length && !encontreConsulta; i++) {
            var unaConsulta = consultas[i];
            if (unaConsulta.Codigo === pIdConsulta) {
                var unPeso = unaConsulta.PesoPaciente;
                var unaAltura = unaConsulta.AlturaPaciente;
                imc = calcularIMC(unPeso, unaAltura);
                encontreConsulta = true;
            }
        }
    }
    return imc;
}

//recibe peso y altura, calcula el IMC y lo devuelve
function calcularIMC(pPeso, pAltura) {
    var imc = -1;
    pPeso = parseFloat(pPeso);
    pAltura = parseFloat(pAltura);
    if (!isNaN(pPeso) && !isNaN(pAltura)) {
        imc = parseFloat(pPeso / (Math.pow(pAltura, 2)));
    }
    return imc;
}

//recibe codigo de consulta y paciente, recorre array de pacientes
//y toma el imc del paciente, calcula imc de la consulta actual
//compara si es 10% mayor o menor al ultimo imc, devuelve true o false
function calcularVariacionDeIMCsegunUltimaConsulta(pIdConsulta, pIdPaciente) {
    var variacionIMC = false;
    pIdPaciente = parseInt(pIdPaciente);
    if (!isNaN(pIdPaciente) && pIdConsulta !== "") {
        var encontrePaciente = false;
        for (var i = 0; i < pacientes.length && !encontrePaciente; i++) {
            var unPaciente = pacientes[i];
            if (pIdPaciente === unPaciente.Identificador) {
                var imcViejo = parseFloat(unPaciente.IMC);
                encontrePaciente = true;
            }
        }
        var imcActual = calcularIMCenConsulta(pIdConsulta);

        if (imcActual !== -1 && imcViejo !== -1) {
            var diezPorcientoImcViejo = parseFloat((imcViejo * 10) / 100);
            if (imcActual > imcViejo + diezPorcientoImcViejo || imcActual < imcViejo - diezPorcientoImcViejo) {
                variacionIMC = true;
            }
        }
    }
    return variacionIMC;
}

//recibe un id de paciente y un peso, los parsea, recorre array de pacientes
//si encuentra el paciente y el peso es mayor al max, le asigna el nuevo peso
//Devuelve true si agrega, si no encuentra el paciente, o si no es mayor al peso maximo, devuelve false
function agregarNuevoPesoMaxAlPaciente(pIdPaciente, pPeso) {
    var agrego = false;
    pIdPaciente = parseInt(pIdPaciente);
    pPeso = parseFloat(pPeso);
    if (!isNaN(pIdPaciente) && !isNaN(pPeso)) {
        for (var i = 0; i < pacientes.length && !agrego; i++) {
            var unPaciente = pacientes[i];
            if (pIdPaciente === unPaciente.Identificador && pPeso > unPaciente.PesoMax) {
                unPaciente.PesoMax = pPeso;
                agrego = true;
            }
        }
    }
    return agrego;
}

//recibe un id de paciente y un peso, los parse, recorre array de pacientes
//si encuentra el paciente y el peso es menor al min, le asigna el nuevo peso
function agregarNuevoPesoMinAlPaciente(pIdPaciente, pPeso) {
    var agrego = false;
    pIdPaciente = parseInt(pIdPaciente);
    pPeso = parseFloat(pPeso);
    if (!isNaN(pIdPaciente) && !isNaN(pPeso)) {
        for (var i = 0; i < pacientes.length && !agrego; i++) {
            var unPaciente = pacientes[i];
            if (pIdPaciente === unPaciente.Identificador && pPeso < unPaciente.PesoMin) {
                unPaciente.PesoMin = pPeso;
                agrego = true;
            }
        }
    }
    return agrego;
}

//toma datos del html, llama a funcion para saber id de paciente
//como se pide que altura se ingrese en metros, valida que sea menor a 3 metros
//llama a funcion para eliminar espacios al agregar peso y altura
//llama a funcion para agregar datos a la consulta y avisa si agrega o no
//llama a funcion para saber si peso max o min y avisa
//si es max o min, agrega el nuevo peso al paciente
function asignarPesoAlturaDelPacienteYMostrar() {
    $("#divMostrarImcPaciente").empty();
    $("#divAvisarSiSeAgregoDescripcionaConsulta").empty();
    var peso = parseFloat(eliminarEspacios($("#txtPesoPaciente").val()));
    var altura = parseFloat(eliminarEspacios($("#txtAlturaPaciente").val()));
    var pacienteActual = devolverIdPacienteSegunConsulta(codigoConsultaARealizar);
    var mensajeAgregoPesoAltura = "";
    var mensajeAlturaPesoMaxOMin = "";
    if (!isNaN(peso) && !isNaN(altura)) {
        if (altura > 0 && altura < 3) {
            if (agregarPesoYAlturaAConsulta(codigoConsultaARealizar, peso, altura)) {
                mensajeAgregoPesoAltura = "Se agrego el peso y la altura correctamente.";
            } else {
                mensajeAgregoPesoAltura = "No se pudo agregar, valide los datos.";
            }
            if (validoSiEsPesoMaximoDelPaciente(pacienteActual, peso)) {
                mensajeAlturaPesoMaxOMin = "ATENCION!<BR>";
                mensajeAlturaPesoMaxOMin += "Es el peso maximo historico del paciente.";
                agregarNuevoPesoMaxAlPaciente(pacienteActual, peso);
            }
            if (validoSiEsPesoMinimoDelPaciente(pacienteActual, peso)) {
                mensajeAlturaPesoMaxOMin = "ATENCION!<BR>";
                mensajeAlturaPesoMaxOMin += "Es el peso minimo historico del paciente.";
                agregarNuevoPesoMinAlPaciente(pacienteActual, peso);
            }
        } else
            mensajeAgregoPesoAltura = "Altura debe estar en metros, verifique sus datos.";
    } else
        mensajeAgregoPesoAltura = "Peso y altura deben ser numericos.";

    $("#divAvisarSiAsignoPesoAltura").html(mensajeAgregoPesoAltura);
    $("#divAvisarPesoMaxOMin").html(mensajeAlturaPesoMaxOMin);
}

//valida que peso y altura no sean vacios, llama a funcion para saber id de paciente
//llama a funcion para calcular imc actual, valida que sea mayor a -1
//llama a funcion para calcular la variacion del ultimo imc
//despues de calcular y cargar las variables de mensajes, actualiza el imc del paciente
//en el array de pacientes
function calcularImcDePacienteYMostrar() {
    $("#divMostrarImcPaciente").empty();
    $("#divAvisarSiSeAgregoDescripcionaConsulta").empty();
    var pesoDePaciente = parseFloat($("#txtPesoPaciente").val());
    var alturaPaciente = parseFloat($("#txtAlturaPaciente").val());

    if (!isNaN(pesoDePaciente) && !isNaN(alturaPaciente)) {
        var pacienteActual = devolverIdPacienteSegunConsulta(codigoConsultaARealizar);
        var imcEnEstaConsulta = calcularIMCenConsulta(codigoConsultaARealizar);
        if (imcEnEstaConsulta >= 0) {
            var mensajeIMC = "El IMC del paciente es: " + imcEnEstaConsulta + ".<BR>";
            if (calcularVariacionDeIMCsegunUltimaConsulta(codigoConsultaARealizar, pacienteActual)) {
                mensajeIMC += "ATENCION!!<BR>";
                mensajeIMC += "El IMC del paciente tuvo una variacion mayor a 10% desde su ultima consulta.";
            }
        } else {
            mensajeIMC = "No se pudo calcular el IMC del paciente.";
        }
        actualizarIMCdelPacienteEnConsulta(imcEnEstaConsulta, pacienteActual);
    } else
        mensajeIMC = "Debe ingresar peso y altura del paciente.";
    $("#divMostrarImcPaciente").html(mensajeIMC);
}

//recibe un imc de la consulta actual e Id paciente, busca el paciente
//si lo encuentra actualiza el imc 
function actualizarIMCdelPacienteEnConsulta(pIMC, pIdPaciente) {
    var actualizo = false;
    pIMC = parseFloat(pIMC);
    pIdPaciente = parseInt(pIdPaciente);
    for (var i = 0; i < pacientes.length && !actualizo; i++) {
        var unPaciente = pacientes[i];
        if (pIdPaciente === unPaciente.Identificador) {
            unPaciente.IMC = pIMC;
            actualizo = true;
        }
    }
}

//toma la descripcion del html, llama a funcion para borrar espacios
//no significativos, llama a funcion para validar y agregar la descripcion
//a la consulta, avisa al usuario si agrega o no, limpia la caja de texto
//vuelvo a mostrar la tabla para que se actualice
function agregarDescripcionEnConsultaActualyMostrar() {
    var descripcion = limpiarEspaciosNoSignificativos($("#txtAreaIngresarDescripcionaConsulta").val().trim());
    var mensajeDescripcion = "";
    if (validarSiAgregoDescripcionaConsulta(codigoConsultaARealizar, descripcion)) {
        mensajeDescripcion = "Se agrego la descripcion correctamente.";
    } else {
        mensajeDescripcion = "No se agrego la descripcion, verifique y vuelva a intentar.";
    }
    $("#divAvisarSiSeAgregoDescripcionaConsulta").html(mensajeDescripcion);
    $("#txtAreaIngresarDescripcionaConsulta").val("");
    $("#divTablaMedicoRealizarConsulta").html(tablaMedicoRealizarConsulta());
    $(".seleccionarPacienteParaConsulta").click(elegirConsultaParaAtender);
}

//recibe un texto, arma un nuevo texto borrando los espacios no significativos
//y lo devuelve
function limpiarEspaciosNoSignificativos(pTexto) {
    var textoLimpio = "";
    for (var i = 0; i < pTexto.length; i++) {
        var unCaracter = pTexto.charAt(i);
        if (pTexto.charAt(i) !== " " || (unCaracter === " " && pTexto.charAt(i + 1) !== " ")) {
            textoLimpio += unCaracter;
        }
    }
    return textoLimpio;
}
//recibe un texto y elimina todos los espacios, retorna el nuevo texto
function eliminarEspacios(pTexto) {
    var texto = "";
    for (var i = 0; i < pTexto.length; i++) {
        var caracter = pTexto.charAt(i);
        if (caracter !== " ")
            texto += caracter;
    }
    return texto;
}

//llama a funcion para limpiar pantalla, valida que la consulta no este finalizada
//llama a funcion para finalizarla, avisa si la finaliza o no
//si ya estaba finalizada tambien avisa
//vuelve a llamar a tabla de consultas no finalizadas y asignar la funcion
//a la clase para poder volver a usar el html, esto si se finaliza la consulta
function marcarConsultaComoFinalizadaEnRealizarConsulta() {
    limpiarDatosAlFinalizarConsulta();
    var mensajeCerrarConsulta = "";

    if (!devolverSiConsultaEsFinalizadaONo(codigoConsultaARealizar)) {
        if (marcarConsultaComoFinalizada(codigoConsultaARealizar)) {
            mensajeCerrarConsulta = "La consulta se marco como finalizada.";
            $("#divTablaMedicoRealizarConsulta").html(tablaMedicoRealizarConsulta());
            $(".seleccionarPacienteParaConsulta").click(elegirConsultaParaAtender);
            $("#lblConsultaASerRealizada").val("");
            $("#lblNombrePacienteEnRealizarConsulta").val("");
            dejarVariablesGlobalesSinValor();
        } else {
            mensajeCerrarConsulta = "No se puede finalizar la consulta.<BR>";
            mensajeCerrarConsulta += "Verifique los datos e intente nuevamente.";
        }
    } else {
        mensajeCerrarConsulta = "La consulta ya esta finalizada.";
    }
    $("#divAvisarSiSeCerroConsultaEnRealizarConsulta").html(mensajeCerrarConsulta);
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//limpia divs y cajas de texto al cerrar la consulta en Realizar Consulta
function limpiarDatosAlFinalizarConsulta() {
    $("#divAvisarSiSeCerroConsultaEnRealizarConsulta").empty();
    $("#divMostrarImcPaciente").empty();
    $("#divAvisarSiSeAgregoDescripcionaConsulta").empty();
    $("#divAvisarSiAsignoPesoAltura").empty();
    $("#divAvisarPesoMaxOMin").empty();
    $("#divAvisarSiSePagoConsultaEnRealizarConsulta").empty();
    $("#txtPesoPaciente").val("");
    $("#txtAlturaPaciente").val("");
    $("#txtAreaIngresarDescripcionaConsulta").val("");
}

//recibe id de consulta, recorre array de consultas hasta encontrarla
//retorna true si esta finalizada, si no, false
function devolverSiConsultaEsFinalizadaONo(pIdConsulta) {
    var finalizada = false;
    if (pIdConsulta !== "") {
        var encontre = false;
        for (var i = 0; i < consultas.length && !encontre; i++) {
            var unaConsulta = consultas[i];
            if (pIdConsulta === unaConsulta.Codigo) {
                encontre = true;
                if (unaConsulta.Finalizada) {
                    finalizada = true;
                }
            }
        }
    }
    return finalizada;
}

//llama a funcion para saber si consulta es paga o no, si no es paga,llama a funcion
//para marcarla como paga, avisa al usuario si se marco como paga o si ya estaba paga
function marcarConsultaComoPagaEnRealizarConsulta() {
    $("#divAvisarSiSePagoConsultaEnRealizarConsulta").empty();
    var mensajeConsultaPaga = "";
    if (!devolverSiConsultaEsPagaONo(codigoConsultaARealizar)) {
        if (marcarConsultaComoPaga(codigoConsultaARealizar)) {
            mensajeConsultaPaga = "Se marco la consulta como paga.";
        } else {
            mensajeConsultaPaga = "No se puede pagar la consulta.<BR>";
            mensajeConsultaPaga += "Verifique los datos e intente nuevamente.";
        }
    } else {
        mensajeConsultaPaga = "La consulta ya esta paga.";
    }
    $("#divAvisarSiSePagoConsultaEnRealizarConsulta").html(mensajeConsultaPaga);
}
//llama a funcion para saber si consulta esta paga o no
//avisa al usuario si queda pendiente o si ya estaba paga
function noMarcarConsultaComoPagaEnRealizarConsulta() {
    if (!devolverSiConsultaEsPagaONo(codigoConsultaARealizar)) {
        $("#divAvisarSiSePagoConsultaEnRealizarConsulta").html("Consulta pendiente de facturar.");
    } else {
        $("#divAvisarSiSePagoConsultaEnRealizarConsulta").html("La consulta ya fue paga.");
    }
}

/* --------- Region Consultas Impagas ---------*/

//oculta y muestra divs al entrar en Consultas impagas
function ocultarYMostrarEnMedicoConsultasImpagas() {
    $("#divMedicoConsultasImpagas").show();
    $("#divMarcarConsultaComoPagaONo").hide();
    $("#divMedicoRealizarConsulta").hide();
    $("#divMedicoVerConsultas").hide();
    $("#divMedicoHabilitarDeshabilitar").hide();
}

//crea un select mostrando cedula y apellido del paciente
//primer valor es cero, luego se le agrega el valor del id de paciente
//se carga al iniciar el programa
function crearComboPacientes() {
    var opcionSelect = "";
    opcionSelect += "<option value='" + 0 + "'>" + "Seleccionar" + "</option>";
    for (var i = 0; i < pacientes.length; i++) {
        opcionSelect += "<option value='" + pacientes[i].Identificador + "'>" + pacientes[i].Cedula + " - " + pacientes[i].Apellido + "</option>";
    }
    return opcionSelect;
}

//llama a funcion de ocultar divs, muestra tabla de consultas impagas
//deja vacias a variables globales para no arrastrar su valor
//le asigna valor 0 a select de pacientes para que se carguen todas las consultas
function mostrarMedicoConsultasImpagas() {
    dejarVariablesGlobalesSinValor();
    ocultarYMostrarEnMedicoConsultasImpagas();
    consultas.sort(criterioOrdenConsultasPorCodigoAsc);
    $("#selPacienteConsultasImpagas").val(0);
    $("#divTablaMedicoConsultasImpagas").html(tablaMedicoConsultasImpagasUnPaciente(0));
    $(".seleccionarConsultaParaPagar").click(elegirConsultaParaPagar);
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//toma valor del select de pacientes y muestra tabla de consultas impagas
//segun el paciente que se haya seleccionado
function mostrartablaMedicoConsultasImpagasUnPaciente() {
    var selIdPaciente = parseInt($("#selPacienteConsultasImpagas").val());
    $("#divTablaMedicoConsultasImpagas").html(tablaMedicoConsultasImpagasUnPaciente(selIdPaciente));
    $(".seleccionarConsultaParaPagar").click(elegirConsultaParaPagar);
    $("#divAvisarSiSePagoConsultaEnConsultasImpagas").empty();
    $("#divMarcarConsultaComoPagaONo").hide();
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//recorre array de consultas, recibe por parametro el valor del select de pacientes
//arma tabla filtrando que consulta no sea paga y segun el id del select que reciba
//recorre array de pacientes y medicos para tener datos, retorna la tabla
function tablaMedicoConsultasImpagasUnPaciente(pSelId) {
    pSelId = parseInt(pSelId);
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H2>Consultas</H2><H4>Seleccione una</H4></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>ID Consulta</div><div class='Cell'>Cedula del paciente</div><div class='Cell'>Nombre</div><div class='Cell'>Apellido</div><div class='Cell'>Codigo Medico</div><div class='Cell'>Apellido Medico</div> ";
    tabla += "</div>";
    for (var i = 0; i < consultas.length; i++) {
        if (!consultas[i].Paga && pSelId === consultas[i].IdPaciente || !consultas[i].Paga && pSelId === 0) {
            var encontrePaciente = false;
            for (var ite = 0; ite < pacientes.length && !encontrePaciente; ite++) {
                var unPaciente = pacientes[ite];
                if (consultas[i].IdPaciente === unPaciente.Identificador) {
                    var nombrePaciente = unPaciente.Nombre;
                    var apellidoPaciente = unPaciente.Apellido;
                    var cedulaPaciente = unPaciente.Cedula;
                    encontrePaciente = true;
                }
            }
            var encontreMedico = false;
            for (var x = 0; x < medicos.length && !encontreMedico; x++) {
                if (consultas[i].IdMedico === medicos[x].Identificador) {
                    var apellidoMedico = medicos[x].Apellido;
                    encontreMedico = true;
                }
            }
            tabla += "<div class='Row'>";
            tabla += "<div class='Cell'><a href='#codigoDeConsultaUnPaciente' id='aCodigoConsultaParaPagarUnPaciente' class='seleccionarConsultaParaPagar'> " + consultas[i].Codigo + "</a></div>";
            tabla += "<div class='Cell'>" + cedulaPaciente + "</div>";
            tabla += "<div class='Cell'>" + nombrePaciente + "</div>";
            tabla += "<div class='Cell'>" + apellidoPaciente + "</div>";
            tabla += "<div class='Cell'>" + consultas[i].IdMedico + "</div>";
            tabla += "<div class='Cell'>" + apellidoMedico + "</div>";

            tabla += "</div>";
        }
    }
    return tabla;
}

//variable global que carga el codigo de la consulta que el medico selecciona
var codigoConsultaParaPagar = "";
//se le asigna el valor a variable global con codigo de consulta
//muestra div y label, label deshabilitado y con el valor del codigo de la consulta
//seleccionada, limpia divs al seleccionar una consulta
function elegirConsultaParaPagar() {
    codigoConsultaParaPagar = $(this).html().trim();
    $("#divMarcarConsultaComoPagaONo").show();
    $("#lblConsultaMarcarComoPaga").val(codigoConsultaParaPagar);
    $("#lblConsultaMarcarComoPaga").prop("disabled", true);
    $("#divAvisarSiSePagoConsultaEnConsultasImpagas").empty();
}

//recibe un id de consulta, recorre array de consultas hasta encontrarla
//si la consulta no estaba paga, la marca como paga
//retorna true si la pago, si no, false
function marcarConsultaComoPaga(pIdConsulta) {
    var sePago = false;
    if (pIdConsulta !== "") {
        var encontreConsulta = false;
        for (var i = 0; i < consultas.length && !encontreConsulta; i++) {
            unaConsulta = consultas[i];
            if (pIdConsulta === unaConsulta.Codigo) {
                encontreConsulta = true;
                if (!unaConsulta.Paga) {
                    unaConsulta.Paga = true;
                    sePago = true;
                }
            }
        }
    }
    return sePago;
}

//llama a funcion para validar que la consulta no este paga
//llama a funcion para marcar como paga a la consulta
//avisa si se pago, o si ya estaba paga
//vuelve a llamar a tabla de consultas impagas con el valor 
//del paciente seleccionado y asignar la funcion
//a la clase para poder volver a usar el html
function marcarConsultaComoPagaEnConsultasImpagasYMostrar() {
    var selIdPaciente = parseInt($("#selPacienteConsultasImpagas").val());
    $("#divAvisarSiSePagoConsultaEnConsultasImpagas").empty();
    var mensajeConsultaPaga = "";
    if (!devolverSiConsultaEsPagaONo(codigoConsultaParaPagar)) {
        if (marcarConsultaComoPaga(codigoConsultaParaPagar)) {
            mensajeConsultaPaga = "Se marco la consulta como paga.";
        } else {
            mensajeConsultaPaga = "No se puede pagar la consulta.<BR>";
            mensajeConsultaPaga += "Verifique los datos e intente nuevamente.";
        }
    } else {
        mensajeConsultaPaga = "La consulta ya esta paga.";
    }
    $("#divAvisarSiSePagoConsultaEnConsultasImpagas").html(mensajeConsultaPaga);
    $("#divTablaMedicoConsultasImpagas").html(tablaMedicoConsultasImpagasUnPaciente(selIdPaciente));
    $(".seleccionarConsultaParaPagar").click(elegirConsultaParaPagar);
    $("#lblConsultaMarcarComoPaga").val("");
    dejarVariablesGlobalesSinValor();
}

//esconde divs cuando el medico elige no pagar la consulta
function noMarcarConsultaComoPagaEnConsultasImpagas() {
    $("#divAvisarSiSePagoConsultaEnConsultasImpagas").empty();
    $("#divMarcarConsultaComoPagaONo").hide();
}

//recibe id de consulta, recorre array de consultas hasta encontrarla
//retorna true si esta paga, si no, false
function devolverSiConsultaEsPagaONo(pIdConsulta) {
    var paga = false;
    if (pIdConsulta !== "") {
        var encontre = false;
        for (var i = 0; i < consultas.length && !encontre; i++) {
            var unaConsulta = consultas[i];
            if (pIdConsulta === unaConsulta.Codigo) {
                encontre = true;
                if (unaConsulta.Paga) {
                    paga = true;
                }
            }
        }
    }
    return paga;
}

/* --------- Region Medico Habilita Deshabilita ---------*/

//oculta y muestra divs al entrar en Habilitar Deshabilitar Pacientes
function ocultarYMostrarEnMedicoHabilitaDeshabilita() {
    $("#divMedicoHabilitarDeshabilitar").show();
    $("#divMedicoPreguntarSiHabilitaDeshabilita").hide();
    $("#divMedicoConsultasImpagas").hide();
    $("#divMedicoRealizarConsulta").hide();
    $("#divMedicoVerConsultas").hide();
    $("#divAvisarSiHabilitoDeshabilito").empty();
}

//deja vacias a variables globales para no arrastrar su valor
//llama a funcion para ocultar y mostrar divs
//muestra tabla de pacientes
function mostrarMedicoHabilitaDeshabilita() {
    ocultarYMostrarEnMedicoHabilitaDeshabilita();
    dejarVariablesGlobalesSinValor();
    $("#divTablaMedicoHabilitarDeshabilitarPacientes").html(tablaMedicoHabilitarDeshabilitarPacientes());
    $(".seleccionarPacienteHabilitarDeshabilitar").click(elegirPacienteParaHabilitarDeshabilitar);
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//variable global que carga id de paciente para llamarla desde otra funcion
var idPacienteHabilitarDeshabilitar = "";
//carga id de paciente en variable global, muestra y deja vacio a divs
//label deshabilitado solo lleva valor de id de paciente
function elegirPacienteParaHabilitarDeshabilitar() {
    idPacienteHabilitarDeshabilitar = parseInt($(this).html());
    $("#divMedicoPreguntarSiHabilitaDeshabilita").show();
    $("#lblElegirPacienteHabilitarDeshabilitar").val(idPacienteHabilitarDeshabilitar);
    $("#lblElegirPacienteHabilitarDeshabilitar").prop("disabled", true);
    $("#divAvisarSiHabilitoDeshabilito").empty();
}

//tabla que muestra todos los pacientes y sus datos
//id de paciente es un link, se le asocia una clase para poder tomar su valor
//desde otra funcion, haciendole click
function tablaMedicoHabilitarDeshabilitarPacientes() {
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H1>Datos de los Pacientes</H1><H4>Seleccione uno para Habilitar/Deshabilitar</H4></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>ID Paciente</div><div class='Cell'>Cedula del paciente</div><div class='Cell'>Nombre</div><div class='Cell'>Apellido</div><div class='Cell'>Estado</div> ";
    tabla += "</div>";
    for (var i = 0; i < pacientes.length; i++) {
        var unPaciente = pacientes[i];
        tabla += "<div class='Row'>";
        tabla += "<div class='Cell'><a href='#codigoDePacienteHabilitar' id='aCodigoPacienteHabilitarDeshabilitar' class='seleccionarPacienteHabilitarDeshabilitar'> " + pacientes[i].Identificador + "</a></div>";
        tabla += "<div class='Cell'>" + unPaciente.Cedula + "</div>";
        tabla += "<div class='Cell'>" + unPaciente.Nombre + "</div>";
        tabla += "<div class='Cell'>" + unPaciente.Apellido + "</div>";
        if (!unPaciente.Estado) {
            tabla += "<div class='Cell'>" + "Deshabilitado" + "</div>";
        }
        if (unPaciente.Estado) {
            tabla += "<div class='Cell'>" + "Habilitado" + "</div>";
        }
        tabla += "</div>";
    }
    return tabla;
}

//recorre array de pacientes hasta enocntrar el paciente
//cuando lo encuentra, marca como habilitado
//retorna true si lo encuentra, si no, false
function habilitarPaciente(pIdPaciente) {
    var habilitado = false;
    pIdPaciente = parseInt(pIdPaciente);
    if (!isNaN(pIdPaciente)) {
        var encontrePaciente = false;
        for (var i = 0; i < pacientes.length && !encontrePaciente; i++) {
            var unPaciente = pacientes[i];
            if (pIdPaciente === unPaciente.Identificador) {
                encontrePaciente = true;
                unPaciente.Estado = true;
                habilitado = true;
            }
        }
    }
    return habilitado;
}

//recorre array de pacientes hasta enocntrar el paciente
//cuando lo encuentra, marca como deshabilitado
//retorna true si lo encuentra, si no, false
function deshabilitarPaciente(pIdPaciente) {
    var deshabilitado = false;
    pIdPaciente = parseInt(pIdPaciente);
    if (!isNaN(pIdPaciente)) {
        var encontrePaciente = false;
        for (var i = 0; i < pacientes.length && !encontrePaciente; i++) {
            var unPaciente = pacientes[i];
            if (pIdPaciente === unPaciente.Identificador) {
                encontrePaciente = true;
                unPaciente.Estado = false;
                deshabilitado = true;
            }
        }
    }
    return deshabilitado;
}

//recorre array de pacientes hasta encontrar al paciente
//devuelve true si esta habilitado, si no, false
function devolverEstadoPacienteSegunId(pIdPaciente) {
    var estado = false;
    pIdPaciente = parseInt(pIdPaciente);
    if (!isNaN(pIdPaciente)) {
        var encontrePaciente = false;
        for (var i = 0; i < pacientes.length && !encontrePaciente; i++) {
            var unPaciente = pacientes[i];
            if (pIdPaciente === unPaciente.Identificador) {
                encontrePaciente = true;
                if (unPaciente.Estado) {
                    estado = true;
                }
            }
        }
    }
    return estado;
}

//limpia div,llama a funcion para saber estado de paciente
//segun el id de paciente seleccionado en la variable global
//si no esta habilitado, entra al if y llama a funcion para habilitarlo
//si ya esta habilitado, no entra al if
//muestra mensaje en cualquier caso
function marcarPacienteComoHabilitado() {
    $("#divAvisarSiHabilitoDeshabilito").empty();
    var mensaje = "";
    if (!devolverEstadoPacienteSegunId(idPacienteHabilitarDeshabilitar)) {
        if (habilitarPaciente(idPacienteHabilitarDeshabilitar)) {
            mensaje = "Se habilito al paciente.";
        } else
            mensaje = "No se habilito al paciente.";
    } else {
        mensaje = "El paciente ya esta habilitado.";
    }
    $("#divAvisarSiHabilitoDeshabilito").html(mensaje);
    $("#divTablaMedicoHabilitarDeshabilitarPacientes").html(tablaMedicoHabilitarDeshabilitarPacientes());
    $(".seleccionarPacienteHabilitarDeshabilitar").click(elegirPacienteParaHabilitarDeshabilitar);
}

//limpia div,llama a funcion para saber estado de paciente
//segun el id de paciente seleccionado en la variable global
//si esta habilitado, entra al if y llama a funcion para deshabilitarlo
//si no esta habilitado, no entra al if
//muestra mensaje en cualquier caso
function marcarPacienteComoDeshabilitado() {
    $("#divAvisarSiHabilitoDeshabilito").empty();
    var mensaje = "";
    if (devolverEstadoPacienteSegunId(idPacienteHabilitarDeshabilitar)) {
        if (deshabilitarPaciente(idPacienteHabilitarDeshabilitar)) {
            mensaje = "Se deshabilito al paciente.";
        } else
            mensaje = "No se pudo deshabulitar al paciente.";
    } else {
        mensaje = "El paciente ya esta deshabilitado.";
    }
    $("#divAvisarSiHabilitoDeshabilito").html(mensaje);
    $("#divTablaMedicoHabilitarDeshabilitarPacientes").html(tablaMedicoHabilitarDeshabilitarPacientes());
    $(".seleccionarPacienteHabilitarDeshabilitar").click(elegirPacienteParaHabilitarDeshabilitar);
}

/* --------- Region Ver Historial de Consultas ---------*/

//oculta y muestra divs al entrar en Habilitar Deshabilitar Pacientes
function ocultarYMostrarEnMedicoVerTodasSusConsultas() {
    $("#divMedicoVerConsultas").show();
    $("#divMedicoVerDatosDeUnaConsulta").hide();
    $("#divMedicoHabilitarDeshabilitar").hide();
    $("#divMedicoConsultasImpagas").hide();
    $("#divMedicoRealizarConsulta").hide();
}

//deja vacias a variables globales para no arrastrar su valor
//llama a funcion para ocultar y mostrar divs
//muestra tabla con todas las consultas
function mostrarMedicoVerTodasSusConsultas() {
    ocultarYMostrarEnMedicoVerTodasSusConsultas();
    dejarVariablesGlobalesSinValor();
    consultas.sort(criterioOrdenConsultasPorCodigoAsc);
    $("#selPacienteHistoricoConsultas").val(0);
    $("#divTablaMedicoVerTodasLasConsultas").html(tablaMedicoVerTodasLasConsultas(0));
    $(".seleccionarConsultaParaVerDatos").click(elegirConsultaParaVerSusDatos);
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//toma valor del select de pacientes y lo parsea,limpia valor de variables globales
//muestra tabla de historico de consultas filtrando por el paciente seleccionado
function mostrarMedicoVerTodasLasConsultasUnPaciente() {
    var selIdPaciente = parseInt($("#selPacienteHistoricoConsultas").val());
    dejarVariablesGlobalesSinValor();
    consultas.sort(criterioOrdenConsultasPorCodigoAsc);
    $("#divTablaMedicoVerTodasLasConsultas").html(tablaMedicoVerTodasLasConsultas(selIdPaciente));
    $(".seleccionarConsultaParaVerDatos").click(elegirConsultaParaVerSusDatos);
    $("#divMedicoVerDatosDeUnaConsulta").hide();
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//deshabilita labels en seccion ver todas las consultas
function deshabilitarCamposEnMedicoVerTodasSusConsultas() {
    $("#lblConsultaParaVerDatos").prop("disabled", true);
    $("#lblConsultaParaVerDatosPeso").prop("disabled", true);
    $("#lblConsultaParaVerDatosAltura").prop("disabled", true);
    $("#lblConsultaParaVerDatosIMC").prop("disabled", true);
    $("#txtConsultaParaVerDatosDescripcion").prop("disabled", true);
}

//variable global que carga id de consulta para llamarla desde otra funcion
var codigoConsultaParaVerSusDatos = "";
//muestra div al seleccionar una consulta, le asigna id de consulta
//a variable global, recorre array de consultas y asigna el valor 
//correspondiente a nuevas variables, para luego mostrar los datos
//de la consulta seleccionada en los labels que estan deshabilitados
function elegirConsultaParaVerSusDatos() {
    $("#divMedicoVerDatosDeUnaConsulta").show();
    deshabilitarCamposEnMedicoVerTodasSusConsultas();
    codigoConsultaParaVerSusDatos = $(this).html().trim();
    var encontre = false;
    for (var i = 0; i < consultas.length && !encontre; i++) {
        var unaConsulta = consultas[i];
        if (codigoConsultaParaVerSusDatos === unaConsulta.Codigo) {
            encontre = true;
            var pesoPaciente = unaConsulta.PesoPaciente;
            var alturaPaciente = unaConsulta.AlturaPaciente;
            var imcActual = parseFloat(calcularIMCenConsulta(codigoConsultaParaVerSusDatos));
            var descripcion = unaConsulta.Descripcion;
        }
    }
    $("#lblConsultaParaVerDatos").val(codigoConsultaParaVerSusDatos);
    $("#lblConsultaParaVerDatosPeso").val(pesoPaciente);
    $("#lblConsultaParaVerDatosAltura").val(alturaPaciente);
    if (imcActual === -1) {
        $("#lblConsultaParaVerDatosIMC").val("");
    } else {
        $("#lblConsultaParaVerDatosIMC").val(imcActual);
    }
    $("#txtConsultaParaVerDatosDescripcion").val(descripcion);
}

//tabla que muestra todas las consultas, finalizadas o no
//recorre array de consultas,medicos y de pacientes, carga valores en nuevas variables
//para armar la tabla luego, si consultas son pagas o no, finalizadas o no
//muestra un texto para evitar mostrar al medico true o false
function tablaMedicoVerTodasLasConsultas(pSelId) {
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H2>Consultas</H2><H4>Seleccione una para ver sus datos</H4></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>ID Consulta</div><div class='Cell'>Cedula del paciente</div><div class='Cell'>Nombre</div><div class='Cell'>Apellido</div><div class='Cell'>Estado</div><div class='Cell'>Paga o no</div><div class='Cell'>ID Medico</div><div class='Cell'>Apellido Medico</div> ";
    tabla += "</div>";
    for (var i = 0; i < consultas.length; i++) {
        var encontrePaciente = false;
        if (pSelId === consultas[i].IdPaciente || pSelId === 0) {
            for (var ite = 0; ite < pacientes.length && !encontrePaciente; ite++) {
                var unPaciente = pacientes[ite];
                if (consultas[i].IdPaciente === unPaciente.Identificador) {
                    var nombrePaciente = unPaciente.Nombre;
                    var apellidoPaciente = unPaciente.Apellido;
                    var cedulaPaciente = unPaciente.Cedula;
                    encontrePaciente = true;
                }
            }
            var encontreMedico = false;
            for (var x = 0; x < medicos.length && !encontreMedico; x++) {
                if (consultas[i].IdMedico === medicos[x].Identificador) {
                    var apellidoMedico = medicos[x].Apellido;
                    encontreMedico = true;
                }
            }
            tabla += "<div class='Row'>";
            tabla += "<div class='Cell'><a href='#codigoDeConsultaVerConsultasMedico' id='aCodigoConsultaVerConsultasMedico' class='seleccionarConsultaParaVerDatos'> " + consultas[i].Codigo + "</a></div>";
            tabla += "<div class='Cell'>" + cedulaPaciente + "</div>";
            tabla += "<div class='Cell'>" + nombrePaciente + "</div>";
            tabla += "<div class='Cell'>" + apellidoPaciente + "</div>";
            if (!consultas[i].Finalizada) {
                tabla += "<div class='Cell'>" + "No finalizada" + "</div>";
            }
            if (consultas[i].Finalizada) {
                tabla += "<div class='Cell'>" + "Finalizada" + "</div>";
            }
            if (!consultas[i].Paga) {
                tabla += "<div class='Cell'>" + "No paga" + "</div>";
            }
            if (consultas[i].Paga) {
                tabla += "<div class='Cell'>" + "Paga" + "</div>";
            }
            tabla += "<div class='Cell'>" + consultas[i].IdMedico + "</div>";
            tabla += "<div class='Cell'>" + apellidoMedico + "</div>";

            tabla += "</div>";
        }
    }
    return tabla;
}

/* -------- Region Logica de Sorts ------- */
//ordena array de medicos ascendentemente por el identificador
function criterioIdMedicosAscendente(pId1, pId2) {
    var orden = 0;
    if (pId1.Identificador > pId2.Identificador) {
        orden = 1;
    }
    if (pId1.Identificador < pId2.Identificador) {
        orden = -1;
    }
    return orden;
}

//ordena array de consultas ascendentemente segun el codigo
function criterioOrdenConsultasPorCodigoAsc(pC1, pC2) {
    var orden = 0;
    if (pC1.Codigo > pC2.Codigo) {
        orden = 1;
    }
    if (pC1.Codigo < pC2.Codigo) {
        orden = -1;
    }
    return orden;
}

//ordena array de medicos ascendentemente por especialidad y descendentemente
//segun cantidad de consultas tenga, llama a funcion que devuelve cantidad de consultas
function criterioOrdenMedicosPorEspecialidadAscYConsultasDesc(pC1, pC2) {
    var orden = 0;
    if (pC1.Especialidad > pC2.Especialidad) {
        orden = 1;
    }
    if (pC1.Especialidad < pC2.Especialidad) {
        orden = -1;
    }
    if (pC1.Especialidad === pC2.Especialidad) {
        if (devolverCantidadConsultasMedico(pC1.Identificador) > devolverCantidadConsultasMedico(pC2.Identificador)) {
            orden = -1;
        }
        if (devolverCantidadConsultasMedico(pC1.Identificador) < devolverCantidadConsultasMedico(pC2.Identificador)) {
            orden = 1;
        }
    }
    return orden;
}

/* -------- Region Tabla Medicos con Sort ------- */

//arma tabla de medicos recorriendo array medicos
//muestra especialidad, nombre, apellido, llama a funcion que devuelve cant de consultas del medico
//agrega una cell con la cantidad de consultas de cada medico
function tablaMedicoNombreEspecialidadConsultas() {
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H1>Listado de Medicos</H1></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>Especialidad</div><div class='Cell'>Nombre</div><div class='Cell'>Apellido</div><div class='Cell'>Cantidad de Consultas</div>";
    tabla += "</div>";
    for (var i = 0; i < medicos.length; i++) {
        tabla += "<div class='Row'>";
        tabla += "<div class='Cell'>" + medicos[i].Especialidad + "</div>";
        tabla += "<div class='Cell'>" + medicos[i].Nombre + "</div>";
        tabla += "<div class='Cell'>" + medicos[i].Apellido + "</div>";
        var cantConsultasMedico = devolverCantidadConsultasMedico(medicos[i].Identificador);
        tabla += "<div class='Cell'>" + cantConsultasMedico + "</div>";
        tabla += "</div>";
    }
    return tabla;
}




/* ---------------------- Seccion Paciente ---------------------- */

/* ------- Region Paciente Marca Consulta  ------- */

//oculta y muestra divs en Marcar Consulta del Paciente
function ocultarYMostrarEnPacienteMarcarConsulta() {
    $("#divMarcarConsultaPaciente").show();
    $("#divPacienteConfirmaConsulta").hide();
    $("#divAvisarSiConfirmaCrearConsulta").empty();
    $("#divModificarDatos").hide();
    $("#divPacienteConsultasPendientes").hide();
    $("#divPacienteHistorialDeConsultas").hide();
}

//llama a funcion para ocultar y mostrar divs en Paciente Marcar Consulta
//muestra tabla de medicos
function mostrarTablaMedicosEnPacienteMarcarConsulta() {
    ocultarYMostrarEnPacienteMarcarConsulta();
    medicos.sort(criterioIdMedicosAscendente);
    $("#divTablaDeMedicosMarcarConsulta").html(tablaMedicosEnPacienteMarcarConsulta);
    $(".seleccionarIdMedicoMarcarConsulta").click(elegirMedicoParaCrearConsulta);
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//recorre array de medicos, crea tabla con nombre, apellido y especialidad del medico
//el id de medico es un link que guarda ese valor si se hizo click, para crear la 
//consulta desde otra funcion
function tablaMedicosEnPacienteMarcarConsulta() {
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H1>Seleccione el médico para marcar la consulta</H1></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>Id Medico</div><div class='Cell'>Nombre</div><div class='Cell'>Apellido</div><div class='Cell'>Especialidad</div>";
    tabla += "</div>";
    for (var i = 0; i < medicos.length; i++) {
        tabla += "<div class='Row'>";
        tabla += "<div class='Cell'><a href='#codigoMedico' id='aIdMedicoMarcarConsulta' class='seleccionarIdMedicoMarcarConsulta'> " + medicos[i].Identificador + "</a></div>";
        tabla += "<div class='Cell'>" + medicos[i].Nombre + "</div>";
        tabla += "<div class='Cell'>" + medicos[i].Apellido + "</div>";
        tabla += "<div class='Cell'>" + medicos[i].Especialidad + "</div>";
        tabla += "</div>";
    }
    return tabla;
}

//variable global que carga el id del medico que se selecciono en la tabla
//se utiliza en otra funcion para crear la consulta
var idMedicoCrearConsulta = "";
//elige de la tabla de medicos para crear la consulta
//guarda el codigo de medico que se hizo click, muestra div para confirmar la consulta
//limpia div que avisa si se confirmo o no
function elegirMedicoParaCrearConsulta() {
    $("#divPacienteConfirmaConsulta").show();
    idMedicoCrearConsulta = parseInt($(this).html());
    $("#lblElegirMedicoParaCrearConsulta").val(idMedicoCrearConsulta);
    $("#lblElegirMedicoParaCrearConsulta").prop("disabled", true);
    $("#divAvisarSiConfirmaCrearConsulta").empty();
}

//llama a funcion para crear consulta y pasa el id de medico seleccionado
//si crea la consulta avisa al usuario y llama a funcion para actualizar
//la cantidad de consultas del medico
//si no la crea, avisa al usuario que da error, deja vacio el valor del id
//del medico para no arrastrarlo y limpia el valor del label que lo muestra
function mostrarCrearConsultaEnPacienteMarcarConsulta() {
    var mensajeAgregarConsulta = "";
    if (crearConsultaEnPacienteMarcarConsulta(idMedicoCrearConsulta)) {
        mensajeAgregarConsulta = "<BR>Se marco la consulta con exito.";
    } else {
        mensajeAgregarConsulta = "<BR>No se marco la consulta.<BR>Seleccione un medico y vuelva a intentar.";
    }
    $("#divAvisarSiConfirmaCrearConsulta").html(mensajeAgregarConsulta);
    dejarVariablesGlobalesSinValor();
    $("#lblElegirMedicoParaCrearConsulta").val("");
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//valida que el id del medico sea numerico
//llama a funcion para generar clave de consulta segun el id del medico
//llama a funcion que devuelve un asociativo con los datos del paciente
//crea un asociativo con los datos de la consulta
//llama a funcion para validar los datos antes de crear la consulta
//si esta todo ok, hace el push en el array de consultas, devuelve true o false
function crearConsultaEnPacienteMarcarConsulta(pIdMedico) {
    var seMarco = false;
    pIdMedico = parseInt(pIdMedico);
    if (!isNaN(pIdMedico)) {
        var nuevaClave = generarClaveConIdMedicoParaAgregarNuevaConsulta(pIdMedico);
        var pacienteActual = mostrarDatosPaciente(ciLogueada);
        var nuevaConsulta = {"Codigo": nuevaClave, "IdMedico": pIdMedico, "IdPaciente": pacienteActual.Identificador, "Finalizada": false, "Paga": false, "Descripcion": "", "PesoPaciente": "", "AlturaPaciente": ""};

        if (validarAgregarConsulta(nuevaClave, pIdMedico, pacienteActual.Identificador, false, false)) {
            consultas.push(nuevaConsulta);
            seMarco = true;
        }

    }
    return seMarco;
}

//recorre array pacientes hasta encontrar el paciente
//segun la cedula que recibe,si paciente esta deshabilitado
//oculta todas las opciones menos modificar datos y listado de medicos
//si esta habilitado, muestra todo
function pacienteDeshabilitadoSoloModificaDatos(pCedula) {
    var encontrePaciente = false;
    for (var i = 0; i < pacientes.length && !encontrePaciente; i++) {
        var unPaciente = pacientes[i];
        if (pCedula === unPaciente.Cedula) {
            encontrePaciente = true;
            if (!unPaciente.Estado) {
                $("#liContieneMarcarConsulta").hide();
                $("#liContieneConsultasFinalizadas").hide();
                $("#liContieneConsultasNoFinalizadas").hide();
            } else {
                $("#liContieneMarcarConsulta").show();
                $("#liContieneConsultasFinalizadas").show();
                $("#liContieneConsultasNoFinalizadas").show();
            }
        }
    }
}

/* ------- Region Consultas No finalizadas Paciente  ------- */

//oculta y muestra divs en Consultas No finalizadas del paciente
function ocultarYMostrarEnConsultasNoFinalizadasPaciente() {
    $("#divPacienteConsultasPendientes").show();
    $("#divModificarDatos").hide();
    $("#divMarcarConsultaPaciente").hide();
    $("#divPacienteHistorialDeConsultas").hide();
}

//llama a funcion para ocultar y mostrar
//ordena las consultas segun el codigo ascendentemente
//muestra tabla de consultas no finalizadas
function mostrarConsultasNoFinalizadas() {
    ocultarYMostrarEnConsultasNoFinalizadasPaciente();
    consultas.sort(criterioOrdenConsultasPorCodigoAsc);
    $("#divTablaPacienteConsultasPendientes").html(tablaPacienteConsultasNoFinalizadas());
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//llama a funcion para traer datos del paciente, recorre array de consultas
//filtra consultas no finalizadas y que sean del paciente actual
//recorre array de medicos y guarda nombre y especialidad
//arma la tabla mostrando esos datos, y si es consulta paga o no
function tablaPacienteConsultasNoFinalizadas() {
    var unPaciente = mostrarDatosPaciente(ciLogueada);
    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H1>Consultas Pendientes</H1></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>ID Consulta</div><div class='Cell'>Nombre del Medico</div><div class='Cell'>Especialidad</div><div class='Cell'>Paga o No</div> ";
    tabla += "</div>";
    for (var i = 0; i < consultas.length; i++) {
        if (!consultas[i].Finalizada && unPaciente.Identificador === consultas[i].IdPaciente) {
            var encontreMedico = false;
            for (var ite = 0; ite < medicos.length && !encontreMedico; ite++) {
                var unMedico = medicos[ite];
                if (consultas[i].IdMedico === unMedico.Identificador) {
                    var apellidoMedico = unMedico.Apellido;
                    var especialidadMedico = unMedico.Especialidad;
                    encontreMedico = true;
                }
            }
            tabla += "<div class='Row'>";
            tabla += "<div class='Cell'><b>" + consultas[i].Codigo + "</b></div>";
            tabla += "<div class='Cell'>" + apellidoMedico + "</div>";
            tabla += "<div class='Cell'>" + especialidadMedico + "</div>";
            if (!consultas[i].Paga) {
                tabla += "<div class='Cell'>" + "Pendiente de pagar" + "</div>";
            }
            if (consultas[i].Paga) {
                tabla += "<div class='Cell'>" + "Consulta Paga" + "</div>";
            }
            tabla += "</div>";
        }
    }
    return tabla;
}

/* ------- Region Consultas Finalizadas Paciente y Descripcion ------- */

//oculta y muestra divs en Consultas finalizadas del paciente
function ocultarYMostrarEnConsultasFinalizadasPacienteYDescripcion() {
    $("#divPacienteHistorialDeConsultas").show();
    $("#divPacienteConsultasPendientes").hide();
    $("#divModificarDatos").hide();
    $("#divMarcarConsultaPaciente").hide();
}

//llama a funcion para ocultar y mostrar
//ordena las consultas segun el codigo ascendentemente
//muestra tabla de consultas finalizadas y su descripcion
function mostrarTablaPacienteHistorialDeConsultas() {
    ocultarYMostrarEnConsultasFinalizadasPacienteYDescripcion();
    consultas.sort(criterioOrdenConsultasPorCodigoAsc);
    $("#divTablaPacienteHistorialDeConsultas").html(tablaPacienteHistorialDeConsultas());
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//llama a funcion para traer datos del paciente, recorre array de consultas
//filtra consultas finalizadas y que sean del paciente actual
//recorre array de medicos y guarda nombre y especialidad
//arma la tabla mostrando esos datos, y si es consulta paga o no y su descripcion
function tablaPacienteHistorialDeConsultas() {
    var unPaciente = mostrarDatosPaciente(ciLogueada);

    var tabla = "<div class='Table'>";
    tabla += "<div class='Title'><H1>Historial de Consultas</H1></div>";
    tabla += "<div class='Heading'>";
    tabla += "<div class='Cell'>ID Consulta</div><div class='Cell'>Nombre del Medico</div><div class='Cell'>Especialidad</div><div class='Cell'>Estado</div><div class='Cell'>Paga o No</div><div class='Cell'>Descripcion</div> ";
    tabla += "</div>";
    for (var i = 0; i < consultas.length; i++) {
        if (consultas[i].Finalizada && unPaciente.Identificador === consultas[i].IdPaciente) {
            var encontreMedico = false;
            for (var ite = 0; ite < medicos.length && !encontreMedico; ite++) {
                var unMedico = medicos[ite];
                if (consultas[i].IdMedico === unMedico.Identificador) {
                    var apellidoMedico = unMedico.Apellido;
                    var especialidadMedico = unMedico.Especialidad;
                    encontreMedico = true;
                }
            }
            tabla += "<div class='Row'>";
            tabla += "<div class='Cell'><b>" + consultas[i].Codigo + "</b></div>";
            tabla += "<div class='Cell'>" + apellidoMedico + "</div>";
            tabla += "<div class='Cell'>" + especialidadMedico + "</div>";
            if (consultas[i].Finalizada) {
                tabla += "<div class='Cell'>" + "Finalizada" + "</div>";
            }
            if (!consultas[i].Paga) {
                tabla += "<div class='Cell'>" + "Pendiente de pagar" + "</div>";
            }
            if (consultas[i].Paga) {
                tabla += "<div class='Cell'>" + "Consulta Paga" + "</div>";
            }
            tabla += "<div class='Cell'>" + consultas[i].Descripcion + "</div>";

            tabla += "</div>";
        }
    }
    return tabla;
}

/* ------- Region Modificar Datos Paciente  ------- */

//oculta y muestra divs en Modificar Datos Paciente
function ocultarYMostrarDatosPacientes() {
    $("#divModificarDatos").show();
    $("#divMarcarConsultaPaciente").hide();
    $("#divPacienteConsultasPendientes").hide();
    $("#divPacienteHistorialDeConsultas").hide();
}

//llama a funcion para ocultar y mostrar en Modificar datos de paciente
//llama a funcion para mostrar los datos del paciente
function mostrarModificarDatosPaciente() {
    ocultarYMostrarDatosPacientes();
    leerDatosPaciente();
    $("#divAvisarSiSeRealizoModificacion").empty();
    medicos.sort(criterioOrdenMedicosPorEspecialidadAscYConsultasDesc);
    $("#divMostrarTablaMedicosPaciente").html(tablaMedicoNombreEspecialidadConsultas());
}

//leerArchivoFoto es input de tipo file, en la precarga de datos se lo esconde
//para luego hacer click en la foto y ya se abre "examinar"
function leerFotoPaciente() {
    $("#leerArchivoFoto").click();
}

//toma una nueva imagen solucionando el problema de la ruta de archivo
//la asigna a imagenPaciente, con attr setea atributo src y la ruta de la foto
function tomarImagenNuevaPaciente() {
    var nuevaImagen = $("#leerArchivoFoto").val().split("\\").pop();
    $("#imagenPaciente").attr("src", "imgs/" + nuevaImagen);
}

//muestra los datos del paciente logueado, llama a funcion pasando la ci
//se trae todos los datos del paciente y los muestra en pantalla
//para la foto setea con attr el atributo src y le asigna la ruta de la foto
function leerDatosPaciente() {
    var usuario = mostrarDatosPaciente(ciLogueada);
    if (usuario !== "") {
        $("#imagenPaciente").attr("src", "imgs/" + usuario.Foto);
        $("#txtCiPaciente").val(usuario.Cedula);
        $("#txtNombrePaciente").val(usuario.Nombre);
        $("#txtApellidoPaciente").val(usuario.Apellido);
        $("#txtContraseñaPaciente").val(usuario.Contraseña);
        $("#txtCiPaciente").prop("disabled", true);
    }
}

//llama a funcion pasando ci y se trae todos los datos del paciente
//realiza la modificacion y actualiza los datos modificados
//valida que los datos no sean vacios y limpia espacios no significativos
//avisa al usuario si se realizo el cambio o no
function modificarDatosPaciente() {
    var mensaje = "No se realizo el cambio.<BR>Verifique los datos.";
    var usuario = mostrarDatosPaciente(ciLogueada);
    var nuevoNombre = limpiarEspaciosNoSignificativos($("#txtNombrePaciente").val().trim());
    var nuevoApellido = limpiarEspaciosNoSignificativos($("#txtApellidoPaciente").val().trim());
    var nuevaContraseña = $("#txtContraseñaPaciente").val().trim();
    if (usuario !== null) {
        if (nuevoNombre !== "" && nuevoApellido !== "" && nuevaContraseña !== "") {
            usuario.Foto = $("#imagenPaciente").attr("src").split("/").pop();
            usuario.Nombre = nuevoNombre;
            usuario.Apellido = nuevoApellido;
            usuario.Contraseña = nuevaContraseña;
            mensaje = "<BR>Se realizo el cambio.";
        }
    }
    $("#divAvisarSiSeRealizoModificacion").html(mensaje);
}

//recorre array de pacientes,busca y devuelve los datos
//del paciente logueado para luego poder modificarlos
function mostrarDatosPaciente(pCiPaciente) {
    var pacienteRetorno = "";
    var encontre = false;
    var ite = 0;
    while (ite < pacientes.length && !encontre) {
        var unPaciente = pacientes[ite];
        if (unPaciente.Cedula === pCiPaciente) {
            pacienteRetorno = pacientes[ite];
            encontre = true;
        }
        ite++;
    }
    return pacienteRetorno;
}

