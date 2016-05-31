
# magic-form por Claudio Zurita
=======
# magic-form

Permite crear de manera fácil y rápida los formularios en tu web.

# ACLARACIÓN
Esto es simplemente una beta, le faltan muchas cosas de las cuales tengo conocimiento, pero por falta de tiempo no puedo hacerlas a todas. Así que en el transcurso del tiempo voy a ir mejorando el form.

# Getting Started


1) Crear formulario:
=======
```
<cz-form></cz-form>
```
2) Agregar inputs:
=======
```
<cz-form data-input='"Nombre", "Direccion", "Telefono"'></cz-form>
```
-- Si desea agregar un input file, simplemente debe colocar el atributo file.

3) Agregar textarea:
=======
```
<cz-form data-input='"Nombre", "Direccion", "Telefono"' data-textarea='"Mensaje"'></cz-form>
```
3) Agregar boton:
=======
El botón siempre debe ir al final , justo antes de cerrar ```</cz-form>```
```
btn="NombreBoton"
```
5) Si trabaja con Angularjs, no debe colocar el atributo ```action="procesador.php"```.
Para indicar el nombre de tu modulo y tu controlador que se va a encargar de hacer las llamadas HTTP puedes usar ```ang-app="tuApp" ang-ctrl="tuCtrl"``` Siempre debe ir primero ang-app y luego ang-ctrl
=======

NOTA: Los unicos atributos que van con la forma ```data-input=' "" '``` son los que empiezan con ```data-*```, después todos los otros atributos se definen normalmente: Ej: ```name="nombreForm"```


Para compartir tu conocimiento conmigo y ayudarme a mejorar visitame en https://github.com/clochi
