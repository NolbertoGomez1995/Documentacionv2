// Datos de las categorías y subcategorías
const categories = {
  "GENERAL": {
      "SUBCATEGORIA GENERAL": ["SOLMAN", "CASOS MAL MONTADOS", "MANTENIMIENTO PREVENTIVO A EQUIPOS"],
      "SUCCESFACTOR": ["CÓMO CREAR CASO DE CAMBIO DE CONTRASEÑA", "INGRESO DE FICHA EN SUCCESFACTORS"],
      "NUEVO EMPLEADO":["COMO CREAR CASO DE NUEVO EMPLEADO","CREACION DE USUARIO EN DIRECTORIO ACTIVO","CREACION CUENTA CORREO","CREACION USUARIO EN PORTAL DEL COLABORADOR","CREACION DE USUARIO EN SAP"],
      "TRANSPORTES":["TRANSPORTES ARANDA-SONDA","TRANSPORTES DOCUNET"],
      "EXCEL":["SEPARACION DE MILES Y DECIMALES","DECIMALES INVERTIDOS","REPARACION DE ARCHIVO LOCAL","ACTIVACION OFFICE 2016"],
  },
"COLABORACION": {
  "ARCHIVO": ["SOLICITUD DE ARCHIVO"],
  "CARPETAS COMPARTIDAS": ["SOLICITUD DE CARPETA COMPARTIDA","ASIGNAR APROBADOR","CONFIGURAR CARPETA EN EQUIPO","CARPETA CON COPIA SIN CONEXION"],
  "OUTLOOK": ["MODO SEGURO","VALIDAR LICENCIA","COMO SOLICITAR LICENCIA","COMPLEMENTOS DE TEAMS","INSTALAR ARCHIVOS PST","AGREGAR CUENTA DE CORREO","CORREOS EN LISTA BLANCA","CERRAR CASO CORREO LISTA BLANCA","CERRAR CASO LISTA BLANCA DOCUMENTACION","PERMISOS DE CORREO EN CELULAR"],
},
"INFRAESTRUCTURA": {
  "DIRECTORIO ACTIVO": ["CREACION DE USUARIO EN DA","DESBLOQUEO DE USUARIO","CAMBIO DE CONTRASEÑA PRIMER ACCESO","CAMBIO DE CONTRASEÑA REPISADA","CAMBIO DE CONTRASEÑA DA","HABILITAR CUENTA","HABILITAR CUENTA DE TERCERO","MODIFICACION DE USUARIO","CREAR CASO DE MODIFICACION DE USUARIO","ELIMINACION DE EQUIPO DE DOMINIO"],
  "ALISTAMIENTO DE PUESTO DE TRABAJO":["SOLICITAR EQUIPO NUEVO","CONFIGURACION DE EQUIPO DE COMPUTO","PRESTAMO DE EQUIPOS Y ACCESORIOS","SOLICITUD DE PERIFERICOS"],
},
"FALLAS DE INFRAESTRUCTURA":{
  "TIPOS DE FALLAS":["FALLAS DE IMPRESION","FALLAS DE RED","FALLAS CON EL PAQUETE OFFICE","FALLAS CON EL CORREO ELECTRONICO","FALLAS DE HARDWARE","FALLAS DE SOFTWARE","FALLAS DE SMARTACCESS","FALLAS DE SUCCESFACTOR","FALLAS DE SAP"],
},
"SOFTWARE":{
  "SOFTWARE":["CREACION DE SOLICITUD","ACTUALIZACION DE SOFTWARE","ACTUALIZACION DE WINDOWS","ACTUALIZACION DE APLICACION","INSTALACION DE APLICACION","EQUIPO LENTO","CONFIGURAR EQUIPO DE DOMINIO"],
  "IMPRESORAS":["CREACION DE CODIGO DE IMPRESION","CODIGO DE IMPRESION","SOLICITUD DE INSTALACION DE IMPRESORA","INSTALACION DE IMPRESORA","SOLICITUD DE TONER"]
},
"SEGURIDAD":{
  "PORTAL DEL COLABORADOR":["CREACION DEL CASO","CREACION DE USUARIO","CREACION DE USUARIO TERCERO O PRACTICANTE","USUARIO YA CREADO EN EL PORTAL","CAMBIO DE CONTRASEÑA PORTAL"],
  "PORTAL DE PROVEEDORES":["VERIFICACION DE PROVEEDOR","CAMBIO DE CONTRASEÑA PORTAL PROVEEDORES"],
  "SAP":["COMO CREAR SOLICITUD DE PERMISOS","CONFIGURAR SAP EN EQUIPO","CREACION DE USUARIO SAP","COMUNICAR CONTRASEÑA SAP","DESBLOQUEO","CAMBIO DE CONTRASEÑA SAP","MODIFICACION DE USUARIO","HABILITAR CUENTA","HABILITAR CUENTA A TERCERO AUTORIZADO","VALIDAR USUARIO CREADO EN SAP"],
  "PERMISOS ESPECIALES":["USB PERMITIDO","NAVEGACION WHATSAPP","ACCESO ESPECIAL A INTERNET"],
  "INTERNET-RED":["ACCESO DE INTERNET A TERCEROS -> COMO CREAR EL CASO","ACCESO ESPECIAL A INTERNET CERRAR CASO","CONEXION VPN-FORTITOKEN","CONEXION FALLIDA TOKEN(REPISAR CONTRASEÑA)","CONTROLADOR DE WIFI"],
  "COMUNICACIONES":["TELEFONIA FIJA","TELEFONIA CELULAR"],
},
"CONSULTAS GENERALES":{
  "CONSULTAS":["MONTAR CASO EN DULCE","ESTADO DE SOLICITUD","LLAMADAS ERRONEAS","CONSULTORIA"],
},
"PLANTILLAS DE TEAMS":{
  "SALUDOS":["SALUDO NOLBERTO","SALUDO KATHERINE","SALUDO CARLOS","DESPEDIDA","USUARIOS AFANADOS","NO APROBACION 5 DIAS"],
  "MENSAJES GENERALES":["BOT DULCE"],
},
"AVISO DE CIERRE DE SOLICITUD":{
  "AVISOS DE CIERRE CORREO":["CIERRE PRIMERA VEZ","CIERRE SEGUNDA VEZ","CIERRE TERCERA VEZ"],
}
};
// Información detallada de cada opción
const detailInfo = {
"SOLMAN": `<h3>SOLMAN</h3>
<h4>ASUNTO: Cierre del Caso en Solman</h4>
<p>Solución: Se realizó la escalada del caso número ## en Solman. Tras recibir la confirmación de resolución y validar con el usuario que todo funcionaba correctamente, se procedió al cierre del caso.</p>`,
  
"CASOS MAL MONTADOS": `<h3>CASOS MAL MONTADOS</h3>
<h4>ASUNTO: Solicitud Mal Creada</h4>
<p>Solución: Se identificó que la solicitud estaba mal creada y que existía una categoría específica para dicho requerimiento.
La ruta adecuada para generar la solicitud es: XXXXXXXXXXXXXXXXXXXXXXXXXX. Se recomienda utilizar la ruta indicada para futuras solicitudes.</p>
<p>Dado que la solicitud fue creada de forma incorrecta, el caso será cerrado. Para asistencia adicional, contactar al soporte.</p>`,
  
  "MANTENIMIENTO PREVENTIVO A EQUIPOS": `<h3>MANTENIMIENTO PREVENTIVO A EQUIPOS</h3>
<h4>ASUNTO: Revisión de Computador Lento</h4>
<p>Solución: Para generar un caso de revisión por bajo rendimiento del equipo, sigue estos pasos:</p>
<ul>
<li>Ingresa a la plataforma Dulce a través de la Intranet.</li>
<li>Navega a la categoría  <strong>SELFSERVICE.</strong>.</li>
<li>Selecciona <strong>MARKETPLACE</strong> o <strong>MERCADO</strong>.</li>
<li>Selecciona <strong>ESTACIÓN DE TRABAJO</strong> en CATEGORÍAS Y TEMAS VARIOS EN ESTACIÓN DE TRABAJO.</li>
<li>Completa el formulario con los detalles del problema y la ubicación del equipo.</li>
<li>Si es posible, adjunta el número de Anydesk para la conexión remota.</li>
</ul>`,

"CÓMO CREAR CASO DE CAMBIO DE CONTRASEÑA": `<h3>SUCCESFACTOR</h3>
<h4>CÓMO CREAR CASO DE CAMBIO DE CONTRASEÑA</h4>
<h4>ASUNTO: Solicitud de Cambio de Contraseña</h4>
<p>Solución: Para solicitar el cambio de contraseña en la plataforma SuccessFactors, sigue estos pasos:</p>
<ol>
<li>Ingresa a la plataforma de Dulce a través de la intranet.</li>
<li>Navega a la categoría <strong>SELFSERVICE</strong>.</li>
<li>Selecciona <strong>MARKETPLACE</strong> o <strong>MERCADO</strong>.</li>
<li>Accede a <strong>INFRAESTRUCTURA</strong> y selecciona la opción Fallas con sistema Succesfactors.</li>
<li>Llena la solicitud y en el campo necesidad selecciona <strong>"SSFF: No se tiene claridad de la contraseña o se olvidó para ingresar"</strong>.</li>
<li>Envía la solicitud.</li>
</ol>
<p>Una vez validada, el usuario recibirá una notificación por correo automático indicando las credenciales de acceso.</p>`,

"INGRESO DE FICHA EN SUCCESFACTORS": `<h3>INGRESO DE FICHA EN SUCCESSFACTORS</h3> <!-- Corrección en "Succesfactors" -->
<h4>ASUNTO: Verificación de Ficha</h4>
<p>Solución: Se accede a la plataforma de SuccessFactors y se verifica con el número de ficha del usuario. Se confirma que el usuario puede ingresar con la ficha y la contraseña XXXXXX.</p>`,

"COMO CREAR CASO DE NUEVO EMPLEADO": `
<h4>ASUNTO: Creación de Nuevo Empleado</h4>
<p>Solución: Para crear un nuevo empleado, sigue estos pasos:</p>
<ol>
    <li>Ingresa a la plataforma de Dulce a través de la intranet.</li>
    <li>Navega a la categoría <strong>SELFSERVICE</strong>.</li>
    <li>Selecciona <strong>MARKETPLACE</strong> o <strong>MERCADO</strong>.</li>
    <li>Accede a <strong>PERSONAL</strong> y selecciona la opción <strong>INGRESO DE PERSONAL NUEVO USUARIO</strong>.</li>
    <li>Completa los campos requeridos en la solicitud.</li> 
    <li>Envía la solicitud. Se generarán solicitudes adicionales tales como:</li>
    <ul>
        <li>Creación de usuario en el portal de colaboradores.</li>
        <li>Creación de cuenta de correo electrónico.</li>
        <li>Creación de usuario en el directorio activo.</li>
        <li>Configuración de equipo de cómputo.</li>
        <li>Creacion de codigo de impresion</li>
    </ul>
    <li>Si requieres usuario SAP debes de realizar la solicitud respectiva por la categoria <strong> Gestion de Accesos</strong>-<strong>Creación Usuario Sistema SAP</strong></li>
    <li>Todas estas solicitudes requerirán la aprobación del jefe del área, y la solicitud de SAP requerirá una aprobación adicional de la coordinadora de seguridad.</li>
    <li>Se podrá consultar el progreso mediante los correos enviados automáticamente, o en la seccion de <strong>Mis solicitudes en la plataforma Dulce.</strong></li> 
</ol>`,

    "CREACION DE USUARIO EN DIRECTORIO ACTIVO": `<h3>CREACIÓN DE USUARIO EN DIRECTORIO ACTIVO (DA)</h3>
<h4>ASUNTO: Creación de Usuario en Directorio Activo</h4>
<p>Solución: Se ha completado la creación del usuario en el directorio activo para <em>xxxxxxxxxxx</em> en el marco del caso REQxxxxxxx. La información de ingreso es la siguiente:</p>
<ul>
    <li>Usuario RED: <em>xxxxxx</em></li>
    <li>Contraseña: Se validará en el momento de la configuración del equipo.</li>
</ul>
<p>Recuerda que el uso del equipo es válido únicamente después de firmar la política de manejo de equipos del área de tecnología.</p>`,

"CREACION CUENTA CORREO": `<h4>ASUNTO: Creación de Cuenta de Correo Electrónico</h4>
<p>Solución: Se ha procedido con la creación de la cuenta solicitada en el caso REQxxxxxxx. Los detalles de ingreso son los siguientes:</p>
<ul>
    <li>Correo Electrónico: <em>XXXXXXXXXXXXXXXXXX</em></li>
    <li>Contraseña:La misma contraseña de ingreso al equipo de computo. </li>
</ul>`,

"CREACION USUARIO EN PORTAL DEL COLABORADOR": `<h4>ASUNTO: Creación de Cuenta en Portal del Colaborador</h4>
<p>Solución: Se ha completado la creación de la cuenta solicitada para el usuario <em>xxxxxxxxxx</em> en el marco del caso REQxxxxxxx. Los datos de ingreso proporcionados son los siguientes:</p>
<ul>
    <li>Portal del Colaborador: Ficha asignada.</li> <!-- Agregué punto final -->
    <li>Contraseña: 1234.</li> <!-- Agregué punto final -->
</ul>
<p>Recuerda que las contraseñas asignadas son temporales y deben ser modificadas en el primer inicio de sesión. La nueva contraseña debe contener al menos una letra mayúscula, números, caracteres especiales y una longitud mínima de 8 caracteres.</p>`,

"CREAR CASO PARA NUEVO USUARIO SAP": `<h4>ASUNTO: Creación de Usuario SAP</h4>
<p>Solución: Se creó un caso en la plataforma con el número <em>xxxxx</em> y está pendiente de la aprobación de la coordinadora de infraestructura y seguridad, Erika Jasmin Torres Criollo. El usuario <em>XXXX</em> ya tiene creada su cuenta de correo electrónico y su usuario de Windows. El caso está en revisión para la configuración del equipo, y el usuario SAP será creado una vez se reciba la aprobación de seguridad.</p>`,

"CREACION DE USUARIO EN SAP": `<h4>ASUNTO: CREACIÓN USUARIO SAP</h4>
<p>Solución: Por la presente, me complace informarle que se ha llevado a cabo la creación de la cuenta solicitada para el usuario xxxxxxxxxxxxx en el marco del caso xxxxxx. En este momento, su cuenta se encuentra en proceso de asignación de roles por parte del área de seguridad. Una vez se finalice el proceso, le llegará un correo anunciando que los permisos fueron asignados y podrá validar el acceso con las siguientes credenciales:</p>
<ul>
<li>Usuario: XXXXX</li>
<li>Contraseña SAP*: 1234</li>
</ul>
<p>Le recordamos que estas contraseñas son temporales y es imperativo cambiarlas en su primer inicio de sesión. Asegúrese de seguir los estándares indicados, lo que implica que contenga mínimo una letra en mayúscula, utilizar números y letras, caracteres especiales, y una longitud mínima de 8 dígitos.</p>`,

"TRANSPORTES ARANDA-SONDA": `<h3>TRANSPORTES ARANDA-SONDA</h3>
<h4>ASUNTO: Solicitud de Transporte Aranda-Sonda</h4>
<p>Solución: Se creó un caso relacionado con el transporte identificado como xxxxxx. Desde Sonda se confirmó la realización satisfactoria del transporte. Se procede al cierre del caso.</p>`,

"TRANSPORTES DOCUNET": `<h3>TRANSPORTES DOCUNET</h3>
<h4>ASUNTO: Solicitud de Transporte Docunet</h4>
<p>Solución: Se envió una solicitud a DOCUNET, registrada bajo el número de requerimiento xxxxxx. Se confirmará el cierre del caso una vez se complete el transporte.</p>`,

"SEPARACION DE MILES Y DECIMALES": `<h3>SEPARACIÓN DE MILES Y DECIMALES</h3>
<h4>ASUNTO: Separación de Miles y Decimales en Excel</h4>
<p>Solución: Se resolvió el problema de separación de miles y decimales ajustando la configuración en Excel. Se validó que el problema estaba solucionado y se cerró el caso.</p>`,

"DECIMALES INVERTIDOS": `<h3>DECIMALES INVERTIDOS</h3>
<h4>ASUNTO: Ajuste de Separadores en Excel</h4>
<p>Solución: Se identificó que los separadores en Excel estaban invertidos. Se ajustaron los separadores, configurando el separador de decimales como "." y el de miles como ",". Se realizaron pruebas y el usuario confirmó que Excel funciona correctamente. Se cerró el caso.</p>`,

"REPARACION DE ARCHIVO LOCAL": `<h3>REPARACIÓN DE ARCHIVO LOCAL</h3>
<h4>ASUNTO: Reparación de Archivo Local en Excel</h4>
<p>Solución: Se realizó un acceso remoto al equipo para intentar reparar el archivo local. Se cambió el nombre del documento y se intentó la reparación desde otra versión de Office. Se validó con el usuario que el archivo funcionaba correctamente y se cerró el caso.</p>`,

"ACTIVACION OFFICE 2016": `<h3>ACTIVACIÓN DE OFFICE 2016</h3>
<h4>ASUNTO: Activación de Office 2016</h4>
<p>Solución: Se ingresó remotamente al equipo y se introdujo la clave de activación de Office 2016. Se validó con el usuario que todo funcionaba con normalidad y se cerró el caso.</p>`,

"SOLICITUD DE ARCHIVO": `<h3>SOLICITUD ARCHIVO</h3>
<h4>ASUNTO: Solicitud para el área de archivos</h4>
<p>Solución: Se valida la solicitud y se determina que es para el área de archivos. Se escala al equipo responsable del área de archivos para su atención y gestión adecuada.</p>`,

"SOLICITUD DE CARPETA COMPARTIDA": `<h4>ASUNTO: Solicitar Acceso a Carpetas Compartidas</h4>
<p>Solución: Para solicitar la modificación de permisos en carpetas compartidas a través de la plataforma DULCE:</p>
<ol>
    <li>Accede a la plataforma ini a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona "CARPETAS COMPARTIDAS MOD, MIGRAR, CONFIG O TRAS".</li>
    <li>Completa los campos obligatorios en el formulario de solicitud.</li>
    <li>Adjunta capturas de pantalla y proporciona detalles como la carpeta a modificar y la ruta completa.</li>
    <li>Agrega la información del tipo de acceso requerido.</li>
    <li>Revisa y envía la solicitud.</li>
</ol>`,

"ASIGNAR APROBADOR": `<h3>ASIGNAR APROBADOR</h3>
<h4>ASUNTO: Asignar Aprobador</h4>
<p>Solución: Se asigna el aprobador correspondiente para la carpeta: XXXX del servidor XXXX. El caso se escala al área respectiva para su revisión y autorización.</p>`,

"CONFIGURAR CARPETA EN EQUIPO": `<h4>ASUNTO: Configurar Carpeta en Equipo</h4>
<p>Solución: Se accede remotamente al equipo y se establece la conexión y configuración de la ruta de la carpeta solicitada como unidad de red. Se valida con el usuario, quien confirma el acceso correcto. Se procede al cierre del caso.</p>`,

"CARPETA CON COPIA SIN CONEXION": `<h4>ASUNTO: Carpeta con Copia sin Conexión</h4>
<p>Solución: Se realiza acceso remoto al equipo, se deshabilita la opción de archivos sin conexión y se elimina la copia sin conexión de la carpeta creada por el usuario. Se valida con el usuario, quien confirma la visualización correcta de todos los archivos. Se procede al cierre del caso.</p>`,

"MODO SEGURO": `<h4>ASUNTO: Modo Seguro</h4>
<p>Solución: Se accede al equipo y se realiza una limpieza de archivos temporales y caché. Al persistir el error, se inicia el Outlook en modo seguro. Se valida con el usuario el acceso correcto y se cierra el caso.</p>`,

"VALIDAR LICENCIA": `<h4>ASUNTO: Sin Licencia (E1/E3)</h4>
<p>Solución: Se realiza acceso remoto al equipo para identificar el error relacionado con la falta de licencia. Se solicita la licencia al área de infraestructura y, una vez asignada, se verifica su funcionamiento correcto en el equipo del usuario.</p>`,

"COMO SOLICITAR LICENCIA": `<h4>ASUNTO: Solicitar Licencia</h4>
<p>Solución: Para solicitar una licencia de Office o cualquier software, debes crear una solicitud en Dulce:</p>
<ul>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona "PAQUETE OFFICE".</li>
    <li>Selecciona la solicitud “LICENCIA OFFICE”.</li>
    <li>Completa los campos obligatorios en el formulario de solicitud.</li>
</ul>
<p>El caso se escalará al área encargada y estará pendiente de la aprobación del director de área correspondiente.</p>`,

"COMPLEMENTOS DE TEAMS": `<h4>ASUNTO: Complemento de Teams</h4>
<p>Solución: Se ingresa remotamente al equipo y se actualiza Teams. Se activa el complemento para permitir la programación de reuniones mediante el calendario de Outlook. Se valida con el usuario y se cierra el caso.</p>`,

"INSTALAR ARCHIVOS PST": `<h4>ASUNTO: Archivo .PST</h4>
<p>Solución: Se accede al equipo, se verifica la existencia de respaldo en archivos .PST, y se reconfiguran en Outlook. Se valida con el usuario, quien confirma la visualización de sus carpetas de correos. Se procede al cierre del caso.</p>`,

"AGREGAR CUENTA DE CORREO": `<h3>AGREGAR CUENTA DE CORREO</h3>
<h4>ASUNTO: Agregar Cuenta de Correo</h4>
<p>Solución: Se ingresa remotamente al equipo, se accede a Outlook y se agrega la cuenta de correo solicitada. Se valida con el usuario, quien confirma su funcionalidad. Se procede al cierre del caso.</p>`,

"CORREOS EN LISTA BLANCA": `<h4>ASUNTO: Correo en Lista Blanca - Usuario</h4>
<p>Solución: En caso de problemas con la recepción de correos, se solicita enviar un correo a mesa_ayuda@riopaila-castilla.com describiendo el error. Se escalará el caso al proveedor y se esperará su respuesta para solucionar la situación.</p>`,

"CERRAR CASO CORREO LISTA BLANCA": `<h4>ASUNTO: Validar Correo Lista Blanca - Caso</h4>
<p>Solución: Se solicita la validación de si el dominio XXXXXXXXX está en la lista blanca o si hay algún bloqueo. Se queda a la espera de la respuesta.</p>`,

"CERRAR CASO LISTA BLANCA DOCUMENTACION": `<h4>ASUNTO: Correo en Lista Blanca - Respuesta</h4>
<p>Solución: Se validó con el proveedor y se proporcionó la respuesta sobre la solicitud.</p>`,

"PERMISOS DE CORREO EN CELULAR": `<h4>ASUNTO: Permisos Outlook Correo Electrónico</h4>
<p>Solución: Se debe solicitar la configuración a través de DULCE:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona "CORREO ELECTRONICO".</li>
    <li>Selecciona la solicitud “CONFIGURACION DE BUZON DE CORREO EN CELULARES”.</li>
    <li>Completa los campos obligatorios en el formulario de solicitud.</li>
</ol>
<p>Una vez creada, el administrador de Exchange asignará los permisos.</p>`,

"CREACION DE USUARIO EN DA": `<h4>ASUNTO: Creación Usuario en DA</h4>
<p>Solución: Se procede con la creación de la cuenta solicitada para el usuario xxxxxxxxxxxxx. La información de ingreso y las credenciales generadas se envían al usuario. Se recuerda que las contraseñas deben ser modificadas en el primer inicio de sesión.</p>`,

"DESBLOQUEO DE USUARIO": `<h4>ASUNTO: Desbloqueo</h4>
<p>Solución: Se accede al directorio activo, se desbloquea la cuenta del usuario y se valida con él que puede ingresar correctamente. Se procede al cierre del caso.</p>`,

"CAMBIO DE CONTRASEÑA PRIMER ACCESO": `<h4>ASUNTO:  Primer Acceso</h4>
<p>Solución: Se actualiza la contraseña de primer acceso en el directorio activo. Se valida con el usuario que puede cambiarla y que cumple con las políticas de seguridad. Se procede al cierre del caso.</p>`,

"CAMBIO DE CONTRASEÑA REPISADA": `<h4>ASUNTO: Cambio de Contraseña - Repisada</h4>
<p>Solución: Se revisa y se Repisa la contraseña en el directorio activo. Se valida con el usuario, quien confirma el acceso correcto. Se procede al cierre del caso.</p>`,

"CAMBIO DE CONTRASEÑA DA": `<h4>ASUNTO: Cambio de Contraseña por el Usuario</h4>
<p>Solución: Para realizar el cambio de contraseña debe de presionar las teclas control+alt+suprimir y elegir la opción de CAMBIO DE CONTRASEÑA, recuerde tener en cuenta las recomendaciones de seguridad de no usar contraseñas repetidas, el uso de mayúsculas, minúsculas, números y caracteres especiales.</p>`,

"HABILITAR CUENTA": `<h4>ASUNTO: Habilitar Cuenta</h4>
<p>Solución: Se desbloquea la cuenta del usuario en el Directorio Activo tras confirmarse el fin del periodo de ausencia autorizada. Se valida con el usuario que puede acceder correctamente.</p>`,

"HABILITAR CUENTA DE TERCERO": `<h4>ASUNTO: Habilitar Cuenta DA a Tercero Autorizado</h4>
<p>Solución: Se desbloquea la cuenta del usuario en el Directorio Activo con las autorizaciones correspondientes. Se confirma con el usuario que puede ingresar correctamente.</p>`,

"MODIFICACION DE USUARIO": `<h4>ASUNTO: Modificación de Usuario en la Documentación</h4>
<p>Solución: Se actualizan los datos del usuario en el directorio activo según la información proporcionada. Se valida que los datos se han actualizado correctamente. Se procede al cierre del caso.</p>`,

"CREAR CASO DE MODIFICACION DE USUARIO": `<h4>ASUNTO: Modificación de Usuario - Crear Caso</h4>
<p>Solución: Para modificar un usuario en el Directorio Activo:</p>
<ul>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la opción "DIRECTORIO ACTIVO".</li>
    <li>Selecciona la opción “SERVICIOS EN DIRECTORIO ACTIVO”.</li>
    <li>Rellena los datos de la solicitud.</li>
</ul>
<p>La solicitud requerirá la aprobación del jefe de área y, una vez aprobada, se procederá a modificar el usuario y se informará al usuario correspondiente.</p>`,

"ELIMINACION DE EQUIPO DE DOMINIO": `<h3>ELIMINACIÓN DE EQUIPO DEL DOMINIO</h3>
<h4>ASUNTO: Eliminación de Equipo del Dominio</h4>
<p>Solución: Se elimina el equipo XXXXXX de los controladores Castilla, Riopaila y Bogotá. Se valida que el equipo ya no esté en el directorio y se informa al usuario.</p>`,

"SOLICITAR EQUIPO NUEVO": `<h3>SOLICITAR EQUIPO NUEVO</h3>
<h4>ASUNTO: Solicitar Computador Mesa o Portátil</h4>
<p>Solución: Para solicitar un computador:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la opción “ESTACIÓN DE TRABAJO”.</li>
    <li>Selecciona la opción “ALISTAMIENTO Y RETIRO DE PUESTO DE TRABAJO”.</li>
    <li>Selecciona en la opción Necesidad “ADQUISICIÓN DE EQUIPO”.</li>
    <li>Llena la solicitud y procede a enviarla. El área encargada validará la disponibilidad del equipo y se pondrá en contacto contigo.</li>
</ol>`,

"CONFIGURACION DE EQUIPO DE COMPUTO": `<h4>ASUNTO: Configuración de Equipo de Cómputo</h4>
<p>Solución: Para solicitar la configuración de un equipo de cómputo:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la opción “ESTACIÓN DE TRABAJO”.</li>
    <li>Selecciona la opción “ALISTAMIENTO Y RETIRO DE PUESTO DE TRABAJO”.</li>
    <li>Selecciona en la opción Necesidad “CONFIGURACIÓN DE EQUIPO”.</li>
    <li>Llena la solicitud y procede a enviarla. El área encargada validará y configurará el equipo.</li>
</ol>`,

"PRESTAMO DE EQUIPOS Y ACCESORIOS": `<h4>ASUNTO: Préstamo de Equipos y Accesorios</h4>
<p>Solución: Para solicitar un préstamo de equipo o accesorio:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona "PRÉSTAMO DE EQUIPOS TECNOLÓGICOS".</li>
    <li>Selecciona la solicitud "PRÉSTAMO DE EQUIPOS TECNOLÓGICOS".</li>
    <li>Completa los datos de la solicitud. El área encargada validará la disponibilidad del accesorio y se contactará contigo para su debida gestión.</li>
</ol>`,

"SOLICITUD DE PERIFERICOS": `<h4>ASUNTO: Solicitud de Periféricos</h4>
<p>Solución: Para solicitar un periférico:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona "ADQUISICIÓN DE EQUIPOS TECNOLÓGICOS".</li>
    <li>Selecciona la solicitud “ADQUISICIÓN DE EQUIPOS TECNOLÓGICOS".</li>
    <li>Completa los datos de la solicitud. La plataforma solicitará la aprobación del director del área y el área encargada validará la disponibilidad del periférico.</li>
</ol>`,

"FALLAS DE IMPRESION": `<h4>ASUNTO: Reportar falla con impresoras o escáner</h4>
<p>Solución: Para reportar la falla se debe crear la solicitud en nuestra plataforma Dulce a través de la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS DE IMPRESIÓN” y haz clic en solicitar.</li>
    <li>Llena los datos de la solicitud y, en necesidad, selecciona la que más se adapte a tu falla. En el campo descripción breve, introduce toda la información de tu problema. Si no encuentras la falla en necesidad, selecciona la que más se asemeje y especifica en el campo Descripción.</li>
    <li>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda y posteriormente escalada al responsable de las impresoras.</li>
</ol>`,

"FALLAS DE RED": `<h4>ASUNTO: Reportar falla con la red</h4>
<p>Solución: Para reportar la falla se debe crear la solicitud en nuestra plataforma Dulce a través de la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS DE RED” y haz clic en solicitar.</li>
    <li>Llena los datos de la solicitud y, en necesidad, selecciona la que más se adapte a tu falla. En el campo descripción breve, introduce toda la información de tu problema. Si no encuentras la falla en necesidad, selecciona la que más se asemeje y especifica en el campo Descripción.</li>
    <li>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda y posteriormente escalada al responsable de ayudarte con el problema.</li>
</ol>`,

"FALLAS CON EL PAQUETE OFFICE": `<h4>ASUNTO: Reportar falla con aplicaciones Office</h4>
<p>Solución: Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS CON EL PAQUETE OFFICE” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad, selecciona la que más se asemeje y especifica en el campo Descripción.</li>
    <li>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</li>
</ol>`,

"FALLAS CON EL CORREO ELECTRONICO": `<h2>Fallas con el Correo Electrónico</h2>
<p><strong>Asunto:</strong> Reportar falla con el Outlook</p>
<p><strong>Solución:</strong> Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS CON EL CORREO ELECTRÓNICO” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad selecciona la que más se asemeje y especifica en el campo Descripción.</li>
</ol>
<p>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</p>`,

"FALLAS DE HARDWARE": `<h2>Fallas de Hardware</h2>
<p><strong>Asunto:</strong> Reportar falla con el Hardware del equipo</p>
<p><strong>Solución:</strong> Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS DE HARDWARE” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad selecciona la que más se asemeje y especifica en el campo Descripción.</li>
</ol>
<p>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</p>`,

"FALLAS DE SOFTWARE": `<h2>Fallas con el Software</h2>
<p><strong>Asunto:</strong> Reportar falla con el Software del equipo</p>
<p><strong>Solución:</strong> Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS DE SOFTWARE” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad selecciona la que más se asemeje y especifica en el campo Descripción.</li>
</ol>
<p>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</p>`,

"FALLAS DE SMARTACCESS": `<h2>Fallas de SmartAccess</h2>
<p><strong>Asunto:</strong> Reportar falla con el SmartAccess</p>
<p><strong>Solución:</strong> Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS CON SMARTACCESS” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad selecciona la que más se asemeje y especifica en el campo Descripción.</li>
</ol>
<p>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</p>`,

    "FALLAS DE SUCCESFACTOR": `<h2>Fallas con SuccessFactor</h2>
<p><strong>Asunto:</strong> Reportar falla con SuccessFactor</p>
<p><strong>Solución:</strong> Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
    <li>Selecciona la solicitud “FALLAS CON EL SISTEMA SUCCESSFACTOR” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad selecciona la que más se asemeje y especifica en el campo Descripción.</li>
</ol>
<p>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</p>`,

"FALLAS DE SAP": `<h2>Fallas de SAP</h2>
<p><strong>Asunto:</strong> Reportar falla con SAP</p>
<p><strong>Solución:</strong> Para reportar la falla se debe de crear la solicitud en nuestra plataforma Dulce por la siguiente ruta:</p>
<ol>
    <li>Accede a la plataforma Dulce a través de la intranet.</li>
    <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
    <li>Selecciona la categoría “SEGURIDAD”.</li>
    <li>Selecciona la solicitud “SISTEMAS SAP FALLAS DE APLICACIÓN (SEGURIDAD)” y clic en solicitar.</li>
    <li>Llena los datos de la solicitud y en necesidad selecciona la que más se adapte a tu falla, en el campo descripción breve introduce toda la información de tu problema. Si no encuentras la falla en necesidad selecciona la que más se asemeje y especifica en el campo Descripción.</li>
</ol>
<p>Una vez enviada la solicitud, será validada por nuestros agentes de mesa de ayuda, y posteriormente escalada al responsable de ayudarte con el problema.</p>`,

"CREACION DE SOLICITUD": `<h2>CREACIÓN DE SOLICITUD INSTALACIÓN-ACTUALIZACIÓN SOFTWARE</h2>
<h3>ASUNTO: Solicitar Instalación - Actualización</h3>
<p><strong>Solución:</strong> Para solicitar la instalación de un software:</p>
<ol>
<li>Accede a la plataforma Dulce a través de la intranet.</li>
<li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
<li>Selecciona "INSTALACIÓN DE SOFTWARE DE OFICINA".</li>
<li>Selecciona la solicitud “INSTALACION O ACTUALIZACION DE SOFTWARE DE OFFICINA”.</li>
<li>Completa los datos solicitados y crea la solicitud.</li>
</ol>
<p>Si la solicitud es para instalar software requerirá la aprobación del director del Área. Si es para actualización, informa a mesa de ayuda mediante Teams el número del caso para proceder con la aprobación, luego el área encargada validará y procederá con la instalación o actualización solicitada.</p>`,

"ACTUALIZACION DE SOFTWARE": `<h3>ASUNTO: ACTUALIZACIÓN DE SOFTWARE</h3>
<p><strong>Solución:</strong> La ruta adecuada para generar una solicitud en nuestra plataforma Dulce y solicitar la actualización de una aplicación o software es la siguiente:</p>
<ol>
    <li>Ingresar a la plataforma Dulce mediante la intranet.</li>
    <li>Acceder a la sección de "Self-service".</li>
    <li>Seleccionar "Marketplace o Mercado".</li>
    <li>Dentro de esa sección, elegir "Instalación de Software de Oficina".</li>
    <li>Llenar los datos de solicitud.</li>
</ol>
<p>Una vez realizada la solicitud, se realizarán validaciones internas y un colaborador se pondrá en contacto con usted para ingresar de forma remota al equipo y realizar la actualización.</p>`,

"ACTUALIZACION DE WINDOWS": `<h3>ASUNTO: ACTUALIZACIÓN DE WINDOWS</h3>
<p><strong>Solución:</strong> Se verificó la versión de Windows en la que se encuentra el equipo. Al constatar que está desactualizada, se indicó al usuario la ruta por la cual generar la solicitud para la actualización del sistema operativo. Quedamos atentos a cualquier consulta adicional o asistencia que pueda necesitar.</p>`,

"ACTUALIZACION DE APLICACION": `<h3>ASUNTO: ACTUALIZACIÓN APLICACIÓN-FIN TAREA</h3>
<p><strong>Solución:</strong> Se ingresó remotamente al equipo y se llevó a cabo la actualización y configuración de la aplicación solicitada por el usuario. Se validó con el usuario, quien confirmó que puede acceder correctamente y que todo está operativo. El caso se cerrará con esta confirmación.</p>`,

"INSTALACION DE APLICACION": `<h3>ASUNTO: INSTALACIÓN</h3>
<p><strong>Solución:</strong> Se ingresó remotamente al equipo y se procedió a realizar la instalación y configuración de la aplicación solicitada por el usuario. Se validó con el usuario, quien confirmó que puede acceder correctamente y que todo está operativo.</p>`,

"EQUIPO LENTO": `<h3>ASUNTO: EQUIPO LENTO</h3>
<p><strong>Solución:</strong> Se ingresó remotamente al equipo y se procedió a eliminar los archivos temporales en las rutas %TEMP% y TEMP. Posteriormente, se verificó la versión de Windows. Se sugiere al usuario crear un caso de mantenimiento preventivo para el equipo. En caso de que persistan las fallas, se proporciona la ruta correspondiente para reportarlas. Se cierra el caso tras estas acciones.</p>`,
  
"CONFIGURAR EQUIPO DE DOMINIO": `<h3>ASUNTO: CONFIGURAR EQUIPOS DEL DOMINIO</h3>
<p><strong>Solución:</strong> Se llevó a cabo el retiro del equipo del dominio, seguido de una actualización de Windows Update y de los controladores (drivers). Posteriormente, se procedió a ingresar nuevamente el equipo al dominio. El usuario realizó pruebas y confirmó que el equipo quedó operativo. En virtud de esta confirmación, se procede al cierre del caso.</p>`,
    
"CREACION DE CODIGO DE IMPRESION": `<h5>Asunto: Solicitud de código de impresión</h5>
<p><strong>Solución:</strong> Para generar la solicitud de código de impresión se debe de generar la solicitud en la plataforma Dulce:</p>
<ol>
    <li>Ingresa a la plataforma de Dulce a través de la intranet.</li>
    <li>Navega a la categoría SELFSERVICE y selecciona MARKETPLACE o MERCADO.</li>
    <li>Accede a INFRAESTRUCTURA y selecciona la opción SERVICIOS DE IMPRESION.</li>
    <li>Llena la solicitud y en el campo necesidad selecciona CREACION DE CODIGO DE IMPRESIÓN (PIN).</li>
    <li>Envía la solicitud.</li>
</ol>
<p>Una vez validada y lista, el encargado de la plataforma de impresiones le enviará el código de impresión nuevo.</p>`,

"CODIGO DE IMPRESION": `<strong>CÓDIGO DE IMPRESIÓN</strong>
<h5>Asunto: Cambio de Código de Impresión</h5>
<p><strong>Solución:</strong> Se ingresó al portal de PaperCut y se verificó la existencia del usuario. Se comunicó el código asignado y se realizó el cambio de código según la necesidad del usuario.</p>`,

"SOLICITUD DE INSTALACION DE IMPRESORA": `<h5>Asunto: Solicitud de instalación de impresora</h5>
<p><strong>Solución:</strong> Para llevar a cabo la instalación de una impresora, es necesario crear una solicitud en nuestra plataforma Dulce. La ruta adecuada para realizar esta solicitud es la siguiente:</p>
<ol>
  <li>Accede a la plataforma Dulce a través de la intranet.</li>
  <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
  <li>Selecciona la categoría “INFRAESTRUCTURA”.</li>
  <li>Selecciona “SERVICIOS DE IMPRESION” y llena la solicitud.</li>
</ol>
<p>Una vez realizada la solicitud, uno de nuestros colaboradores se pondrá en contacto con usted para programar la instalación de la impresora solicitada.</p>`,

"INSTALACION DE IMPRESORA": `<h5>Asunto: Instalación de impresora</h5>
<p><strong>Solución:</strong> Se accede al equipo del solicitante y se procede a instalar la impresora XXXX. Se valida que la impresora quede operativa y funcional. Una vez confirmada la correcta instalación y operatividad, se procede al cierre del caso.</p>`,

"SOLICITUD DE TONER": `<h5>Asunto: Solicitud de toner</h5>
<p><strong>Solución:</strong> Para realizar la solicitud de un tóner, sigue estos pasos en la plataforma Dulce:</p>
<ol>
  <li>Accede a la plataforma Dulce a través de la intranet.</li>
  <li>Navega a la sección de "SELFSERVICE" y selecciona "MARKETPLACE".</li>
  <li>Selecciona la categoría de "TONER" y en solicitud Elige la opción "TONER".</li>
  <li>Llena los campos solicitados en el formulario y en la sección "Indique su necesidad", selecciona la opción que más se adapte a tu solicitud y Haz clic en el botón "Solicitar".</li>
</ol>
<p>Una vez creada la solicitud, el caso se escalará automáticamente al área correspondiente para su atención y gestión adecuada.</p>`,
            
"CREACION DEL CASO": `<h5>Asunto: Solicitud de creación de usuario</h5>
<p><strong>Solución:</strong> Para generar la solicitud de creación de usuario del portal del colaborador debe seguir los siguientes pasos:</p>
<ol>
  <li>Ingresa a la plataforma de Dulce a través de la intranet.</li>
  <li>Navega a la categoría SELFSERVICE.</li>
  <li>Selecciona MARKETPLACE o MERCADO.</li>
  <li>Selecciona la categoría “GESTION DE ACCESOS”</li>
  <li>Selecciona la opción “PORTAL DEL COLABORADOR”</li>
  <li>Llena la solicitud con los datos de la persona a crear y solicita.</li>
</ol>
<p>Una vez enviada la solicitud, entrará a cola de creación. Una vez terminado el proceso, se enviará un correo automático de confirmación y podrá ingresar con la ficha y la contraseña 1234.</p>`,

"CREACION DE USUARIO": `<h5>Asunto: CREACIÓN DE USUARIO</h5>
<p><strong>Solución:</strong> Mediante la presente, le informamos que se ha completado la creación de la cuenta solicitada para el usuario: xxxxxxxxxx, en el marco del caso REQxxxxxxx. Los datos de ingreso proporcionados son los siguientes:</p>
<ul>
  <li>Portal del Colaborador: Ficha asignada</li>
  <li>Contraseña: 1234</li>
</ul>
<p>Le recordamos que las contraseñas asignadas son temporales y deben ser modificadas en el primer inicio de sesión, siguiendo los estándares indicados. Por favor, tenga en cuenta que la primera letra debe ser en mayúscula, y se deben utilizar números y letras, caracteres especiales, manteniendo una longitud mínima de 8 dígitos.</p>`,

"CREACION DE USUARIO TERCERO O PRACTICANTE": `<h5>Asunto: CREACIÓN USUARIO TERCERO O PRACTICANTE</h5>
<p><strong>Solución:</strong> Por políticas de seguridad y tratamiento interno, queremos informarle que los practicantes o el personal externo a nuestra compañía no podrá ser registrado como usuario en el Portal del Colaborador.</p>`,
            
"USUARIO YA CREADO EN EL PORTAL": `<h5>Asunto: USUARIO YA CREADO EN EL PORTAL</h5>
<p><strong>Solución:</strong> Se ingresa al Portal de Colaboradores y se ha verificado que el usuario XXXXX ya se encuentra previamente registrado. Dado que no es necesario crearlo de nuevo, se procederá al cierre del caso en base a esta confirmación.</p>`,

"CAMBIO DE CONTRASEÑA PORTAL": `<h5>Asunto: </h5>
<p><strong>Solución:</strong> Se ingresa al Portal de Colaboradores y se procede a actualizar la contraseña con la contraseña de primer acceso. Se valida directamente con el usuario, y se le indica que debe cambiar la contraseña por una nueva, siguiendo las políticas establecidas. Se verifica que el usuario pueda ingresar correctamente y se procede al cierre del caso.</p>`,

"VERIFICACION DE PROVEEDOR": `<h2>VERIFICACIÓN DEL PROVEEDOR</h2>
<p><strong>ASUNTO:</strong> VERIFICACIÓN DEL PROVEEDOR</p>
<p><strong>SOLUCIÓN:</strong> Se accede al Portal de Proveedores y se verifica que el usuario XXXXX ya está registrado previamente. Dado que no es necesario crearlo de nuevo, se procederá al cierre del caso en base a esta confirmación.</p>`,

"CAMBIO DE CONTRASEÑA PORTAL PROVEEDORES": `<h2>CAMBIO DE CONTRASEÑA</h2>
<p><strong>ASUNTO:</strong> CAMBIO DE CONTRASEÑA</p>
<p><strong>SOLUCIÓN:</strong> Se ha accedido al Portal de Proveedores y se ha llevado a cabo el cambio de contraseña según la preferencia del usuario. Confirmamos la actualización y nos ponemos a disposición para cualquier otra gestión o consulta que pueda necesitar.</p>`,

"COMO CREAR SOLICITUD DE PERMISOS": `<h2>CÓMO CREAR SOLICITUD DE PERMISOS</h2>
<p><strong>ASUNTO:</strong> CÓMO CREAR SOLICITUD DE PERMISOS</p>
<p><strong>SOLUCIÓN:</strong> Para crear la solicitud de crear, modificar o asignar roles o transacciones en SAP, debes hacer lo siguiente:</p>
<ol>
  <li>Ingresar a la plataforma Dulce, a través de la intranet por medio de "Soporte Informático Dulce".</li>
  <li>Ingresar a la categoría SelfService.</li>
  <li>Ingresar a Marketplace o Market Place.</li>
  <li>Ingresar a la opción Gestión de Accesos y modificación de usuario SAP.</li>
  <li>Llenar los campos solicitados. Recuerda ser muy claro y preciso en los campos, indicando el usuario de SAP al cual se le va a realizar el cambio y especificando el ambiente requerido.</li>
  <li>Enviar solicitud. Recuerda que esta solicitud requiere la aprobación del jefe de área. Por lo tanto, se debe esperar la aprobación necesaria. Una vez aprobada, se escalará al área de seguridad para la asignación correspondiente.</li>
</ol>
<p>La solicitud será atendida en orden de llegada y según disponibilidad, así que debes tener en cuenta el tiempo necesario. Una vez que tu requerimiento esté solucionado, la plataforma te enviará un mensaje al correo electrónico.</p>`,




"CONFIGURAR SAP EN EQUIPO": `<h2>CONFIGURAR SAP EQUIPO</h2>
<p><strong>ASUNTO:</strong> CONFIGURAR SAP EQUIPO</p>
<p><strong>SOLUCIÓN:</strong> Se efectúa un acceso remoto al equipo para llevar a cabo la configuración de los ambientes necesarios para que el usuario pueda acceder a sus tareas laborales. Una vez completada la configuración, se asegura que el entorno esté operativo y se procede a realizar una validación del ingreso con el usuario para garantizar el correcto funcionamiento de todos los componentes.</p>`,

"CREACION DE USUARIO SAP": `<h2>CREACIÓN USUARIO SAP</h2>
<p><strong>ASUNTO:</strong> CREACIÓN USUARIO SAP</p>
<p><strong>SOLUCIÓN:</strong> Por la presente, me complace informarle que se ha llevado a cabo la creación de la cuenta solicitada para el usuario xxxxxxxxxxxxx en el marco del caso xxxxxx.
  En este momento, su cuenta se encuentra en proceso de asignación de roles por parte del área de seguridad, una vez se finalice el proceso le llegará un correo anunciando que los permisos fueron asignados y podrá validar el acceso con las siguientes credenciales:
  <ul>
    <li>Usuario: XXXXX</li>
    <li>Contraseña SAP*1234</li>
  </ul>
  Le recordamos que estas contraseñas son temporales y es imperativo cambiarlas en su primer inicio de sesión. Asegúrese de seguir los estándares indicados, lo que implica que contenga mínimo una letra en mayúscula, utilizar números y letras, caracteres especiales, y una longitud mínima de 8 dígitos.</p>`,

"COMUNICAR CONTRASEÑA SAP": `<h2>COMUNICAR CONTRASEÑA</h2>
<p><strong>ASUNTO:</strong> COMUNICAR CONTRASEÑA</p>
<p><strong>SOLUCIÓN:</strong> Se establece comunicación con el usuario para informarle sobre el acceso a SAP, proporcionando las credenciales de primer acceso. Se valida el ingreso con el usuario, quien confirma haber cambiado la contraseña conforme a las políticas de seguridad vigentes. Se verifica que el usuario pueda ingresar correctamente a SAP y se procede al cierre del caso.</p>`,

"DESBLOQUEO": `<h2>DESBLOQUEO</h2>
<p><strong>ASUNTO:</strong> DESBLOQUEO</p>
<p><strong>SOLUCIÓN:</strong> Se accede al entorno SAP del ambiente XXX y se verifica que el usuario se encuentra bloqueado. Se procede a realizar el desbloqueo de la cuenta y se confirma la acción con el usuario, quien a su vez valida que puede ingresar correctamente. Con el usuario operativo y sin problemas de acceso, se procede al cierre del caso.</p>`,

"CAMBIO DE CONTRASEÑA SAP": `<h2>CAMBIO DE CONTRASEÑA</h2>
<p><strong>ASUNTO:</strong> CAMBIO DE CONTRASEÑA</p>
<p><strong>SOLUCIÓN:</strong> Se accede al entorno SAP XXX y se lleva a cabo la actualización de la contraseña de acuerdo con la contraseña de primer acceso SAP*1234. Se realiza la validación con el usuario, quien confirma la capacidad para modificar la contraseña según las políticas establecidas. Posteriormente, se verifica que el usuario pueda ingresar correctamente con la nueva contraseña. Finalmente, se procede al cierre del caso.</p>`,

"MODIFICACION DE USUARIO": `<h2>MODIFICACIÓN USUARIO</h2>
<p><strong>ASUNTO:</strong> MODIFICACIÓN USUARIO</p>
<p><strong>SOLUCIÓN:</strong> Para crear la solicitud de modificación de usuario SAP debes realizar lo siguiente:
  <ol>
    <li>Ingresar a la plataforma Dulce a través de la intranet, por medio de "Soporte Informático Dulce".</li>
    <li>Ingresar a la categoría SELFSERVICE.</li>
    <li>Ingresar a MERCADO o MARKETPLACE.</li>
    <li>Ingresar a la opción GESTIÓN DE ACCESOS y MODIFICACIÓN DE USUARIO SAP.</li>
    <li>Llenar los campos solicitados con precisión, indicando el usuario al cual se le va a realizar el cambio y especificando el ambiente requerido.</li>
  </ol>
</p>`,

"HABILITAR CUENTA": `<h2>HABILITAR CUENTA</h2>
<p><strong>ASUNTO:</strong> HABILITAR CUENTA</p>
<p><strong>SOLUCIÓN:</strong> Se realiza el acceso a SAP PRD y se observa que la cuenta del usuario se encuentra bloqueada por el responsable del sistema. Se verifica el correo enviado por el área de seguridad, el cual confirma que el bloqueo fue efectuado debido a un período de ausencia autorizada. Se valida que el usuario ha finalizado dicho período, procediendo así al desbloqueo de la cuenta. Posteriormente, se confirma con el usuario que puede ingresar correctamente. Con la cuenta desbloqueada y operativa, se procede al cierre del caso.</p>`,

"HABILITAR CUENTA A TERCERO AUTORIZADO": `<h2>HABILITAR CUENTA A TERCERO AUTORIZADO</h2>
<p><strong>ASUNTO:</strong> HABILITAR CUENTA A TERCERO AUTORIZADO</p>
<p><strong>SOLUCIÓN:</strong> Se procede a acceder al entorno SAP XXX, donde se verifica que la cuenta del usuario se encuentra bloqueada por decisión del responsable del sistema. Se revisa el correo enviado por el área de seguridad, el cual confirma que el bloqueo se llevó a cabo debido a un período de ausencia autorizada. Para desbloquear la cuenta, se obtiene la autorización del jefe directo y del jefe de personal de la planta a la que está asignado el usuario. Posteriormente, se procede a desbloquear la cuenta con las debidas autorizaciones. Se confirma con el usuario que puede ingresar correctamente.</p>`,

"VALIDAR USUARIO CREADO EN SAP": `<h2>VALIDAR USUARIO CREADO EN SAP</h2>
<p><strong>ASUNTO:</strong> VALIDAR USUARIO EN SAP</p>
<p><strong>SOLUCIÓN:</strong> Se accede al sistema SAP y se verifica la existencia del usuario xxxxxx, xxxxxxxxx, confirmando que ya se encuentra creado en el ambiente xxxxx. Se procede a escalar el caso al área de seguridad informática para que continúe el flujo de la solicitud y se realicen las acciones correspondientes en términos de seguridad y validación.</p>`,

"USB PERMITIDO": `<h3>USB PERMITIDO</h3>
<p><strong>ASUNTO:</strong> USB PERMITIDO</p>
<p><strong>SOLUCIÓN:</strong> Se ha ingresado al directorio activo y se ha agregado al usuario al grupo "Usuarios_USB_Permitido", considerando la aprobación de la coordinadora del área de seguridad TI. Se procede al cierre del caso.</p>`,

"NAVEGACION WHATSAPP": `<h3>NAVEGACIÓN WHATSAPP</h3>
<p><strong>ASUNTO:</strong> NAVEGACIÓN WHATSAPP</p>
<p><strong>SOLUCIÓN:</strong> Se accede al directorio activo y se realiza la adición del usuario al grupo "Usuarios_NavWhatsapp". Se valida con el usuario, quien confirma que ahora tiene acceso a la página. Se procede al cierre del caso.</p>`,

"ACCESO ESPECIAL A INTERNET": `<h3>ACCESO ESPECIAL A INTERNET</h3>
<p><strong>ASUNTO:</strong> ACCESO ESPECIAL A INTERNET</p>
<p><strong>SOLUCIÓN:</strong> Si deseas acceder a una página específica que se encuentre bloqueada para el acceso, debes seguir estos pasos:</p>
<ol>
  <li>Ingresar a la plataforma Dulce a través de la intranet.</li>
  <li>Navegar a la categoría SELFSERVICE.</li>
  <li>Seleccionar la categoría MARKETPLACE o MERCADO.</li>
  <li>Seleccionar "GESTIÓN DE ACCESOS".</li>
  <li>Seleccionar “Acceso especial a internet”.</li>
  <li>Rellenar los datos de la solicitud.</li>
  <li>Una vez creada, la solicitud se enviará al área encargada, quien validará la información y otorgará los permisos si así se decide.</li>
</ol>`,



"ACCESO DE INTERNET A TERCEROS -> COMO CREAR EL CASO": `<h3>ACCESO DE INTERNET A TERCEROS COMO CREAR CASO</h3>
<p><strong>ASUNTO:</strong> ACCESO DE INTERNET A TERCEROS COMO CREAR CASO</p>
<p><strong>SOLUCIÓN:</strong> El proceso para solicitar el acceso a nuestra red para una persona externa o invitada es el siguiente:</p>
<ol>
  <li>Ingresa a nuestra plataforma Dulce a través de la intranet.</li>
  <li>Accede a la categoría de SELFSERVICE.</li>
  <li>Navega a la subcategoría de MARKETPLACE o MERCADO.</li>
  <li>Selecciona la categoría "Internet" y presiona en NAVEGACIÓN CORPORATIVA.</li>
  <li>Completa los campos solicitados y selecciona la opción CONFIGURACIÓN DE RED A EXTERNOS, y envía la solicitud.</li>
  <li>Una vez generada la solicitud, esta será escalada a la persona encargada. Posteriormente, se proporcionarán al solicitante el usuario y la contraseña con los cuales tendrá acceso a nuestra red de invitados, denominada RIOCAS_I.</li>
</ol>`,

"ACCESO ESPECIAL A INTERNET CERRAR CASO": `<h3>ACCESO DE INTERNET A TERCEROS CERRAR</h3>
<p><strong>ASUNTO:</strong> ACCESO DE INTERNET A TERCEROS CERRAR</p>
<p><strong>SOLUCIÓN:</strong> Estimado usuario,</p>
<p>Se informa que el acceso para el usuario externo que solicitó ya ha sido creado. La red a la cual tendrá acceso es RIOCAS_I, y las credenciales son las siguientes:</p>
<ul>
  <li><strong>Usuario:</strong> InvitadosXX</li>
  <li><strong>Contraseña:</strong> Castilla1*</li>
</ul>
<p>Recuerde que este acceso es válido por el tiempo solicitado.</p>`,

"CONEXION VPN-FORTITOKEN": `<h3>CONEXIÓN VPN-FORTITOKEN</h3>
<p><strong>ASUNTO:</strong> CONEXIÓN VPN-FORTITOKEN</p>
<p><strong>SOLUCIÓN:</strong> El proceso que debes realizar para obtener acceso VPN y Fortitoken es el siguiente:</p>
<ol>
  <li>Ingresar a Dulce, mediante la intranet por el enlace Soporte Informático Dulce.</li>
  <li>Presionar en Microsoft y loguearse con el correo electrónico.</li>
  <li>Dentro de Dulce, entra a SelfService, luego a Marketplace o Mercado, y en la categoría Gestión de Accesos, ingresa a la opción Conexión VPN-Fortitoken y llena la solicitud.</li>
  <li>Una vez realizada la solicitud, esta se asigna a la persona encargada de la aplicación y se te envía un correo electrónico con el Código QR para sincronizar la aplicación en tu celular con tu cuenta.</li>
  <li>Vincula la cuenta y valida el ingreso. Al ingresar tus credenciales, la aplicación solicitará una segunda validación de seguridad. Puedes aprobar la notificación que se envía o ingresar manualmente el código proporcionado por la aplicación.</li>
</ol>
<p>Adicionalmente, te adjunto un video explicativo sobre cómo vincular la aplicación y utilizar el Código QR.</p>`,

"CONEXION FALLIDA TOKEN(REPISAR CONTRASEÑA)": `<h3>CONEXIÓN FALLIDA AL VPN (REPASAR CONTRASEÑA)</h3>
<p><strong>ASUNTO:</strong> CONEXIÓN FALLIDA AL VPN (REPASAR CONTRASEÑA)</p>
<p><strong>SOLUCIÓN:</strong> Se verifica el error que presenta el usuario para acceder a la VPN, realizando un repaso de la contraseña de su usuario en el Directorio Activo. Posteriormente, se valida con el usuario que puede ingresar nuevamente. Una vez logrado el ingreso, se procede al cierre del caso.</p>`,

"CONTROLADOR DE WIFI": `<h3>CONTROLADOR DE WIFI</h3>
<p><strong>ASUNTO:</strong> CONTROLADOR DE WIFI</p>
<p><strong>SOLUCIÓN:</strong> Se ingresa al equipo y se identifica que el control del wifi está presentando problemas. Como medida correctiva, se procede a deshabilitar y habilitar nuevamente el wifi. Se realiza una validación para asegurar que la red quede operativa y funcional. Una vez confirmado que la red está en buen estado, se procede al cierre del caso.</p>`,

"TELEFONIA FIJA": `<h2>TELEFONÍA FIJA</h2>
<h3>ASUNTO: TELEFONÍA FIJA</h3>
<p><strong>SOLUCIÓN:</strong> Para realizar una solicitud con respecto a la línea fija (extensión telefónica), debes seguir los siguientes pasos:</p>
<ol>
  <li>Ingresar a la plataforma Dulce, a través de la intranet por medio de "Soporte Informático Dulce".</li>
  <li>Ingresar a la categoría SELFSERVICE e Ingresar a Marketplace o MARKETPLACE.</li>
  <li>Selecciona la categoría “TELEFONIA”.</li>
  <li>Selecciona la solicitud “TELEFONIA IP”.</li>
  <li>Llena la solicitud según la necesidad de tu caso.</li>
  <li>Envía la solicitud.</li>
</ol>
<p>Una vez hecha la solicitud, debes esperar a que la persona encargada valide la información y, una vez hecho, te contactará y dará solución a tu solicitud.</p>`,

"TELEFONIA CELULAR": `<h2>TELEFONÍA CELULAR</h2>
<h3>ASUNTO: TELEFONÍA CELULAR</h3>
<p><strong>SOLUCIÓN:</strong> Para realizar una solicitud con respecto a la línea de celular, debes seguir los siguientes pasos:</p>
<ol>
  <li>Ingresar a la plataforma Dulce, a través de la intranet por medio de "Soporte Informático Dulce".</li>
  <li>Ingresar a la categoría SELFSERVICE.</li>
  <li>Ingresar a Marketplace o MARKETPLACE.</li>
  <li>Selecciona la categoría “TELEFONIA”.</li>
  <li>Selecciona la solicitud “TELEFONIA CELULAR”.</li>
  <li>Seleccionar la opción que necesites, las cuales son:</li>
  <ul>
    <li>ACTIVACIÓN DE LÍNEA CELULAR</li>
    <li>CAMBIO DE SIM CARD</li>
    <li>CESIÓN DE LÍNEAS Y EQUIPOS</li>
    <li>REPORTAR ROBO O PÉRDIDA</li>
    <li>REPOSICIÓN DE EQUIPO</li>
  </ul>
  <li>Una vez seleccionada la opción correspondiente, llenar el formulario con los detalles necesarios.</li>
  <li>Enviar la solicitud.</li>
</ol>
<p>Una vez hecha la solicitud, debes esperar a que la persona encargada valide la información y, una vez hecho, te contactará y dará solución a tu solicitud.</p>`,



"MONTAR CASO EN DULCE": `<h2>MONTAR CASO EN DULCE</h2>
<h3>ASUNTO: MONTAR CASO EN Dulce</h3>
<p><strong>SOLUCIÓN:</strong> El usuario se comunica con la mesa para obtener información sobre cómo montar un caso en la plataforma Dulce. Se solicitan detalles sobre el caso que desea registrar. Una vez comprendida la solicitud, se proporcionan instrucciones detalladas sobre cómo montar el caso en la plataforma. Después de asegurarse de que el usuario ha entendido la información proporcionada, se procede a cerrar el caso.</p>`,

"ESTADO DE SOLICITUDES": `<h2>ESTADO DE SOLICITUD</h2>
<h3>ASUNTO: ESTADO DE SOLICITUD</h3>
<p><strong>SOLUCIÓN:</strong> El usuario se comunica con el área de mesa de ayuda para solicitar información sobre el estado actual del caso XXXXXXX. Se le proporciona la información solicitada y se cierra la consulta.</p>`,

"LLAMADAS ERRONEAS": `<h2>LLAMADAS ERRONEAS</h2>
<h3>ASUNTO: LLAMADAS ERRONEAS</h3>
<p><strong>SOLUCIÓN:</strong> El usuario llama preguntando por una persona o por la extensión de un área. Se le informa que, como mesa de ayuda, no tenemos acceso a esa información específica y se le recomienda comunicarse con el departamento de Gestión Humana para obtener detalles sobre la ubicación de la persona o la extensión del área que busca.</p>`,

"CONSULTORIA": `<h2>CONSULTORIA GENERAL</h2>
<h3>ASUNTO: CONSULTORIA GENERAL</h3>
<p><strong>SOLUCIÓN:</strong> El usuario se contacta con el área de mesa de ayuda con una consulta en particular, después de validar con el usuario se le indica los pasos que debe de realizar, una vez comprendido se cierra la consulta.</p>`,

"SALUDO NOLBERTO": `
    <p>Hola, buenos días. Se comunicó con la Mesa de Ayuda. Mi nombre es Nolberto Gómez. Cuénteme en qué le puedo colaborar el día de hoy, y con gusto le ayudaremos en unos minutos según la cantidad de solicitudes que se encuentren en gestión.</p>`,

"SALUDO KATHERINE": `
    <p>Hola, buenos Tardes. Se comunicó con la Mesa de Ayuda. Mi nombre es Katherine Osorio. Cuénteme en qué le puedo colaborar el día de hoy, y con gusto le ayudaremos en unos minutos según la cantidad de solicitudes que se encuentren en gestión.</p>`,

"SALUDO CARLOS": `
    <p>Hola, buenos Tardes. Se comunicó con la Mesa de Ayuda. Mi nombre es Carlos Recalde. Cuénteme en qué le puedo colaborar el día de hoy, y con gusto le ayudaremos en unos minutos según la cantidad de solicitudes que se encuentren en gestión.</p>`,

"DESPEDIDA": `<h2>DESPEDIDA</h2>
<ul>
    <li>Para Servirte</li>
    <li>Recuerde nuestro canal de atención oficial telefónico (Ext 1918-2150) o por Teams y correo a mesa_ayuda@riopaila-castilla.com.</li>
</ul>`,

"USUARIOS AFANADOS": `<h2>USUARIOS AFANADOS</h2>
<p>En este momento, debido al alto volumen de solicitudes en nuestros canales de atención, las respuestas pueden presentar un pequeño retraso. Le solicitamos comprensión y paciencia; una vez estemos disponibles, procederemos a solucionar su inquietud. Recuerde que, para verificar el avance de una solicitud, puede hacerlo en la plataforma, en la zona izquierda, en el botón "Estado de mis requerimientos".</p>`,

"NO APROBACION 5 DIAS": `<h2>NO APROBACIÓN 5 DÍAS</h2>
<p>Se anula solicitud ya que no se obtuvo la aprobación dentro de los 5 días hábiles respectivos, por lo cual la solicitud debe generarse nuevamente y solicitar la aprobación respectiva.</p>`,

"BOT DULCE": `<h2>ASUNTO: BOT DULCE</h2>
<p><strong>SOLUCIÓN:</strong> Estimado usuario,</p>
<p>Nos complace informarle que en este momento estamos en proceso de implementación del Bot de nuestra plataforma Dulce. Le invitamos a resolver cualquier inquietud que pueda tener a través de este nuevo recurso. La siguiente imagen muestra cómo utilizar el Bot, y puede acceder a él mediante el siguiente enlace: <a href="https://teams.microsoft.com/l/app/f6405520-7907-4464-8f6e-9889e2fb7d8f?templateInstanceId=76a15be1-c824-4381-a9ed-caf9488545ef&environment=54e9ba2e-173c-e379-8cab-2e54353a0ce0" target="_blank">Bot Dulce</a></p>
<p>Agradecemos su comprensión y colaboración.</p>
<p>Saludos cordiales, <br>Equipo Mesa De Ayuda.</p>`,

"CIERRE PRIMERA VEZ": `<h2>PRIMER CORREO DE NOTIFICACIÓN:</h2>
<p>Estimado usuario,</p>
<p>Conforme su solicitud, Servicio No. XXXXXXXXXXX.</p>
<p>Le informamos que nuestro personal de soporte se ha intentado contactar con usted sin éxito para atender su servicio. Solicitamos por favor comunicarse con la mesa de ayuda, proporcionando sus datos actualizados e indicando qué día y a qué hora tiene disponibilidad para que nuestros Soportes puedan atender su solicitud de servicio.</p>
<p>Estamos a su disposición y ante cualquier duda comuníquese con nosotros.</p>`,

"CIERRE SEGUNDA VEZ": `<h2>SEGUNDO CORREO DE NOTIFICACIÓN:</h2>
<p>Estimado usuario,</p>
<p>Conforme su solicitud, Servicio No. XXXXXXXXXXX.</p>
<p>Le informamos que nuestro personal de soporte ha realizado varios intentos sin éxito para contactarse con usted para validar su solicitud de servicio. Solicitamos por favor comunicarse con la mesa de ayuda.</p>
<p>Quedamos a la espera de su contacto, de no tenerlo en 24 horas el sistema realizará el cierre de la solicitud de servicio.</p>
<p>Estamos a su disposición y ante cualquier duda comuníquese con nosotros.</p>`,

"CIERRE TERCERA VEZ": `<h2>TERCER CORREO DE NOTIFICACIÓN (CIERRE DE CASO):</h2>
<p>Estimado usuario,</p>
<p>Conforme su solicitud, Servicio No. XXXXXXXXXX.</p>
<p>Le informamos que este será cancelado, entendiendo que la solicitud de servicio reportada fue solucionada o no es necesaria su atención. Esta acción se realiza al no tener una respuesta o confirmación de su parte a los correos anteriores.</p>
<p>Si el incidente se presenta de nuevo o la solicitud del servicio no ha finalizado, por favor contactarse con la mesa de ayuda para crear una nueva solicitud.</p>
<p>Estamos a su disposición y ante cualquier duda comuníquese con nosotros.</p>`,
};

// Elementos del DOM
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const detailSelect = document.getElementById("detail");
const detailInfoContainer = document.getElementById("detailInfo");

// Poblar categorías
function populateCategories() {
  for (const category in categories) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
  }
}

function updateSubcategories() {
  subcategorySelect.innerHTML = "<option value='' disabled selected>Selecciona una subcategoría</option>";
  detailSelect.innerHTML = "<option value='' disabled selected>Selecciona un detalle</option>";
  detailInfoContainer.textContent = "";

  subcategorySelect.disabled = true;
  detailSelect.disabled = true;

  const selectedCategory = categorySelect.value;
  if (categories[selectedCategory]) {
      subcategorySelect.disabled = false;
      for (const subcategory in categories[selectedCategory]) {
          if (Array.isArray(categories[selectedCategory][subcategory]) || typeof categories[selectedCategory][subcategory] === 'object') {
              const option = document.createElement("option");
              option.value = subcategory;
              option.textContent = subcategory;
              subcategorySelect.appendChild(option);
          }
      }
  }
}

// Actualizar detalles al seleccionar una subcategoría
function updateDetails() {
  detailSelect.innerHTML = "<option value='' disabled selected>Selecciona un detalle</option>";
  detailInfoContainer.textContent = "";
  detailSelect.disabled = true;

  const selectedCategory = categorySelect.value;
  const selectedSubcategory = subcategorySelect.value;
  if (categories[selectedCategory] && Array.isArray(categories[selectedCategory][selectedSubcategory])) {
      detailSelect.disabled = false;
      categories[selectedCategory][selectedSubcategory].forEach(detail => {
          const option = document.createElement("option");
          option.value = detail;
          option.textContent = detail;
          detailSelect.appendChild(option);
      });
  }
}

// Mostrar información detallada al seleccionar un detalle
function showDetailInfo() {
  const selectedDetail = detailSelect.value;
  detailInfoContainer.textContent = detailInfo[selectedDetail] || "No hay información disponible para este detalle.";
}

// Event listeners
categorySelect.addEventListener("change", updateSubcategories);
subcategorySelect.addEventListener("change", updateDetails);
detailSelect.addEventListener("change", showDetailInfo);

// Inicialización
populateCategories();

// Función para actualizar la información detallada
function updateDetailInfo() {
  const detailSelect = document.getElementById("detail");
  const detailInfoContainer = document.getElementById("detailInfo"); // Contenedor donde se muestra la info

  const selectedDetail = detailSelect.value;
  if (selectedDetail && detailInfo[selectedDetail]) {
      detailInfoContainer.innerHTML = detailInfo[selectedDetail]; // Inserta el HTML con formato
  } else {
      detailInfoContainer.innerHTML = "<p>No hay información disponible para esta selección.</p>";
  }
}

// Función para copiar al portapapeles
function copyToClipboard() {
  const textToCopy = detailInfoContainer.textContent || detailInfoContainer.innerText; // Obtener el texto
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        Swal.fire({
          position: "center", // Muestra la alerta en el centro de la pantalla
          icon: "success", // Tipo de alerta (éxito)
          title: "¡Texto copiado!", // Título de la alerta
          showConfirmButton: false, // No muestra el botón de confirmación
          timer: 1500 // La alerta se cierra automáticamente después de 1.5 segundos
        });
      })
      .catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al copiar",
          text: "Hubo un problema al copiar el texto. Intenta de nuevo.",
          showConfirmButton: false,
          timer: 1500
        });
      });
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "No hay información para copiar",
      showConfirmButton: false,
      timer: 1500
    });
  }
}


// Agregar evento al botón de copiar
document.getElementById("copyButton").addEventListener("click", copyToClipboard);

// Evento para cuando se selecciona un detalle
document.getElementById("detail").addEventListener("change", updateDetailInfo);
