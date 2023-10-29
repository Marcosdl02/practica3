import { Request, Response } from "npm:express@4.18.2";
import DiscoModel from "../BasesDeDatos/disco.ts";

const actualizarDisco = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nombre,autor,formato,matriz,pais,artePortada } = req.body;
      if (!nombre || !autor || !formato || !pais || !artePortada) {
        res.status(400).send("Necesitas ingresar los campos nombre,autor,formato,pais y artePortada");
        return;
      }
  
      const discoActualizado = await DiscoModel.findOneAndUpdate(
        { _id:id },
        {nombre,autor,formato,matriz,pais,artePortada},
        { new: true }
      ).exec();
  
      if (!discoActualizado) {
        res.status(404).send("El disco no se ha encontrado");
        return;
      }
  
      res.status(200).send({
        id: discoActualizado._id.toString(),
        nombre:discoActualizado.nombre,
        autor:discoActualizado.autor,
        formato:discoActualizado.formato,
        matriz:discoActualizado.matriz,
        pais:discoActualizado.pais,
        artePortada:discoActualizado.artePortada,
        
      });
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }
  };

  export default actualizarDisco;