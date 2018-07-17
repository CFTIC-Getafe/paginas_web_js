# Prototipos en JS #

Los objetos en JavaScript poseen un enlace a un objeto prototipo.

- Siguiendo el estándar ECMAScript, la notación ob.[[Prototype]] se usa para designar el prototipo de ob. Esto es equivalente a la propiedad JavaScript __proto__ que no es estándar pero es el de-facto implementado por los navegadores.
- A partir de ES6, se accede al [[Prototype]] utilizando los accesores  Object.getPrototypeOf() y Object.setPrototypeOf().

No debe confundirse con la propiedad de las funciones func.prototype, que especifica el [[Prototype]] a asignar a todas las instancias de los objetos creados por la función dada cuando se utiliza como un constructor. La propiedad Object.prototype representa el prototipo del objeto Object.