import { Request, Response } from "npm:express@4.18.2";
import DiscoModel from "../BasesDeDatos/disco.ts";

const ObtenerDiscosNombre = async (req: Request, res: Response) => {
    try {
      const { nombre } = req.params;
      const discos = await DiscoModel.find({ nombre }).exec();
      if (discos.length==0) {
        res.status(404).send("No se han encontrado discos con ese nombre");
        return;
      }
      const discosEncontrados = discos.map(disco => ({
        id: disco._id.toString(),
        nombre: disco.nombre,
        autor: disco.autor,
        formato: disco.formato,
        matriz: disco.matriz,
        pais: disco.pais,
        artePortada: disco.artePortada,
      }));
  
      res.status(200).json(discosEncontrados);
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };

  export default ObtenerDiscosNombre;