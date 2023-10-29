import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import crearDisco from "./Rutas/crearDisco.ts";
import eliminarDisco from "./Rutas/eliminarDisco.ts";
import actualizarDisco from "./Rutas/actualizarDisco.ts";
import ObtenerDiscoID from "./Rutas/obtenerDiscoID.ts";
import ObtenerDiscosNombre from "./Rutas/obtenerDiscosNombre.ts";
import ObtenerDiscosFormato from "./Rutas/ObtenerDiscosFormato.ts";
import ObtenerDiscosPais from "./Rutas/ObtenerDiscosPais.ts";
import ObtenerListaDiscos from "./Rutas/ObtenerListaDiscos.ts";

try {

await mongoose.connect("mongodb+srv://Marcos:12345@nebrija-cluster.7yxmiyx.mongodb.net/DiscosDB?retryWrites=true&w=majority");
console.info("Conexion con Mongo realizada")
const app = express();
app.use(express.json());
app
  .get("/todosDiscos", ObtenerListaDiscos)
  .get("/discosID/:id", ObtenerDiscoID )
  .get("/discosNombre/:nombre", ObtenerDiscosNombre )
  .get("/discosFormato/:formato", ObtenerDiscosFormato )
  .get("/discosPais/:pais", ObtenerDiscosPais )
  .post("/crearDisco", crearDisco )
  .put("/actualizarDisco/:id", actualizarDisco )
  .delete("/eliminarDisco/:id", eliminarDisco );

app.listen(3000);

} catch (e) {
  console.error(e);
}



