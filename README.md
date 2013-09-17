DTV-Tuned
=========

Para cambiar el canal de tu DVR de Directv vía Ethernet / LAN / IP.

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
