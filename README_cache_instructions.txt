Actividad: Proyecto con Cache Storage (Service Worker)
--------------------------------------------------------

He agregado un Service Worker (archivo sw.js) que precarga los archivos del proyecto y proporciona una página offline (offline.html).

Archivos añadidos/modificados:
- /sw.js  -> Service Worker que gestiona la cache (nombre de cache: actividad-cache-vcd0fb121c10b)
- /offline.html -> página simple para mostrar cuando no hay conexión (creada si no existía)
- Registro automático del Service Worker inyectado en todos los archivos .html que no tenían registro.
- README (este archivo)

Cómo ejecutar y demostrar (pasos para tu tarea):
1) Servir el proyecto con un servidor local (no funcionará correctamente abriendo index.html con file://).
   Desde la carpeta del proyecto (donde estás index.html) ejecuta:
   - Python 3: `python -m http.server 8000`
   - Luego abre en el navegador: http://localhost:8000

2) En el navegador (recomendado Chrome/Edge):
   - Abre DevTools (F12) > Application (Aplicación) > Service Workers: verás 'sw.js' registrado.
   - En Application > Cache Storage verás la entrada con nombre `actividad-cache-vcd0fb121c10b` y los archivos cacheados.
   - Prueba modo "Offline" en DevTools (Network > Offline) o desconéctate de internet; carga la página: debería servir desde la cache.
   - Muestra la consola (Console) para ver mensajes de registro del Service Worker.

3) Para entregar:
   - Muestra en vivo: abre http://localhost:8000 en tu navegador, abre DevTools y demuestra:
     a) que sw.js está instalado (Application > Service Workers)
     b) que Cache Storage contiene los archivos
     c) activa "Offline" y recarga la página para que funcione sin conexión
   - Alternativamente genera un gif corto o video mostrando esos pasos.

Notas técnicas:
- El Service Worker precarga todos los archivos del zip con rutas relativas desde la raíz.
- Si tu proyecto espera rutas específicas o un scope distinto, házmelo saber y ajustaré el scope de registro.
- Si ya tenías un service worker personalizado, hice una inserción básica. Revisa sw.js para ajustar políticas de cacheo.

Archivos resultantes (ya listos en el zip generado):
- /mnt/data/actividad_with_cache.zip

