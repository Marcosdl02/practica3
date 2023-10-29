import { Request, Response } from "npm:express@4.18.2";
import DiscoModel from "../BasesDeDatos/disco.ts";

const ObtenerDiscoID = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const disco = await DiscoModel.findOne({ _id:id });
      if (!disco) {
        res.status(404).send("Disco no encontrado");
        return;
      }
      res.status(200).send({
        id: disco._id.toString(),
        nombre:disco.nombre,
        autor:disco.autor,
        formato:disco.formato,
        matriz:disco.matriz,
        pais:disco.pais,
        artePortada:disco.artePortada,
      });
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };

  export default ObtenerDiscoID;

