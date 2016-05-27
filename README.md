# magic-form
Permite crear de manera fácil y rápida los formularios en tu web.

# ACLARACIÓN
Esto es simplemente una beta, le faltan muchas cosas de las cuales tengo conocimiento, pero por falta de tiempo no puedo hacerlas a todas. Así que en el transcurso del tiempo voy a ir mejorando el form.

# Getting Started

1) Crear formulario: <cz-form></cz-form>
2) Agregar inputs: <cz-form data-input='"Nombre", "Direccion", "Telefono"'></cz-form>
-- Si desea agregar un input file, simplemente debe colocar el atributo file.
3) Agregar textarea: <cz-form data-input='"Nombre", "Direccion", "Telefono"' data-textarea='"Mensaje"'></cz-form>

4) Si trabaja con Angularjs, no debe colocar el atributo action="procesador.php"

NOTA: Los unicos atributos que van con la forma data-input='""' son los que empiezan con data-*, después todos los otros atributos se definen normalmente: Ej: name="nombreForm"
