# practica3

Endpoints de la API

  .get("/todosDiscos", ObtenerListaDiscos) // Te muestra la lista de toodos los discos que están guardados en la base de datos
  
  .get("/discosID/:id", ObtenerDiscoID ) // Te encuentra el disco que tenga el mismo ID que has proporcionado
  
  .get("/discosNombre/:nombre", ObtenerDiscosNombre ) // Encuentra los discos (puede haber mas de uno) que tenga el mismo nombre que has proporcionado
  
  .get("/discosFormato/:formato", ObtenerDiscosFormato ) // Encuentra los discos (puede haber mas de uno) que tenga el mismo formato que has proporcionado (LP, CD, single, cassette, reel to reel, minidisc, videocd ...)
  
  .get("/discosPais/:pais", ObtenerDiscosPais ) // Encuentra los discos (puede haber mas de uno) que se hayan impreso en el mismo pais que has proporcionado
  
  .post("/crearDisco", crearDisco ) // Crea un disco para guardarlo en la base de datos
  
  .put("/actualizarDisco/:id", actualizarDisco ) // Actualiza los valores de un disco que previamente se encuentra en la base de datos. El programa lo encuentra a través del ID  proporcionado.
  
  .delete("/eliminarDisco/:id", eliminarDisco ); // Elimina un disco que esta en la base de datos. Elimina el disco que tenga el ID que le has proporcionado.

