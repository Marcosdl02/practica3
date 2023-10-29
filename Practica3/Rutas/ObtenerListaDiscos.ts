import { Request, Response } from "npm:express@4.18.2";
import DiscoModel from "../BasesDeDatos/disco.ts";

const ObtenerListaDiscos = async (_req: Request, res: Response) => {
    try {
      const discos = await DiscoModel.find().exec();
      if (discos.length==0) {
        res.status(404).send("No existen discos en la lista");
        return;
      }
      const discosExistentes = discos.map(disco => ({
        id: disco._id.toString(),
        nombre: disco.nombre,
        autor: disco.autor,
        formato: disco.formato,
        matriz: disco.matriz,
        pais: disco.pais,
        artePortada: disco.artePortada,
      }));
  
      res.status(200).json(discosExistentes);
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };

  export default ObtenerListaDiscos;