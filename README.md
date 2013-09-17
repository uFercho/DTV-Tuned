DTV-Tuned
=========

Cliente de Javascript usando jQuery para hacer consultas al DVR del Directv en LAN para informacion y/o cambio de canal.

Aplicacion Web multiplataforma que no requiere instalacion de un servidor o software dentro de una LAN para las consultas al DVR de Directv.

Primero certifica que tu Decodificador de Directv permite el contros de dispositivos externos.
   
    Menu ->
      Configuraciones ->
         Config. del sistema ->
            NEXUS ->
               Aparato externo ->
                  Acceso Externo  : Permitir 
                  Programa Actual : Permitir 
                  Grabaciones     : Permitir

Luego ve al archivo "js/directv-tuned.api.js" y en la variable "IP_Directv" defines la IP de tu Decodificador.

Abres el Archivo index.html y Listo!!!
