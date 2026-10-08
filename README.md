# taller6Objetos

💡 Preguntas y Respuestas
Taller/laboratorio práctico
Programación Orientada a Objetos en JavaScript

Ejercicio 1: Moldeado de Inventario - Tienda de Tecnología
💡 Pregunta Analítica:
¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?
R// Al utilizar una función constructora se puede "jugar" con las propiedades (añadiendo y/o quitando), ya que esto permite más libertad en el código cuando hay cientos de datos. Además, reduce el tiempo al añadir otro objeto (computador, en este caso), pues solo se añadirían los valores, sin volver a repetir o escribir las claves.

Ejercicio 2: Encapsulamiento de Comportamiento - Sistema de Veterinaria
💡 Pregunta Analítica:
¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?
R// Porque lo que hace «this» es conectar o identificar las propiedades específicas del objeto en el que se está ejecutando el método, evitando confundirlas con las propiedades de otros objetos. Además, permite trabajar con los datos propios de cada objeto de manera más organizada.

Ejercicio 3: Lógica de Negocio Automática - Plataforma de Cursos
💡 Pregunta Analítica:
¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?
R// Una de las ventajas es que no se tiene que escribir la lógica por separado, evitando así código innecesario. Otra ventaja es que el código queda más organizado y compacto, ya que el objeto tiene su propia lógica para determinar si aprobó o no, lo que facilita hacer cambios rápidos si la condición para aprobar llega a cambiar.

Ejercicio 4: Control de Estados Modificables - Biblioteca
💡 Pregunta Analítica:
¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?
R// Se generarían inconsistencias en el control, errores en los datos y confusión para la persona encargada. Tampoco habría un orden, lo cual afectaría al lector.

Ejercicio 5: Registro interactivo - Concesionario de Vehículos
💡 Pregunta Analítica:
¿Qué ventajas tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?
R// Permite que el programa sea más dinámico e interactivo, ya que los datos pueden cambiar dependiendo de lo que ingrese cada usuario. Además, evita tener que modificar directamente el código cada vez que se quiera registrar un nuevo vehículo, reduciendo así la posibilidad de algún error accidental de escritura o eliminación.