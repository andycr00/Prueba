Cordial saludo

El presente programa esta escrito en TypeScript. Y desarrollado con Node JS.
Para correrlo se debe ejecutar:

```
npm install
npm start
```

Para ejecutar las pruebas se debe ejecutar:

````
npm test
```

El programa funciona haciendo el llamado a un API expuesto que retorna un valor por peticion
Con el programa debe ser enviado los parametros initialCode & finalCode
Que seran los rangos de resultados que el programa traerá
La ruta entera para hacer una peticion tener estos parametros
method: POST
initialCode: number
finalCode: number
URL=localhost:8000/entities/filter?initialCode&finalCode

El programa realiza una peticion para traer los resultados,
en caso exitoso guarda la informacion en un archivo.
Este archivo será retornado para eficiencia de la aplicacion
Dentro de un determinado tiempo. 
Al exceder el tiempo, la peticion se vuelve a realizar para 
refrescar la informacion que se tiene y se actualiza el archivo



