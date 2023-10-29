import { Request, Response } from "npm:express@4.18.2";
import DiscoModel from "../BasesDeDatos/disco.ts";

const crearDisco = async (req: Request, res: Response) => {
    try {
      const { nombre,autor,formato,matriz,pais,artePortada } = req.body;
      if (!nombre || !autor || !formato || !pais || !artePortada) {
        res.status(400).send("Necesitas ingresar los campos nombre,autor,formato,pais y artePortada");
        return;
      }
      
      const nuevoDisco = new DiscoModel({ nombre,autor,formato,matriz,pais,artePortada});
      await nuevoDisco.save();
  
      res.status(200).send({
        id:nuevoDisco._id.toString(),
        nombre:nuevoDisco.nombre,
        autor:nuevoDisco.autor,
        formato:nuevoDisco.formato,
        matriz:nuevoDisco.matriz,
        pais:nuevoDisco.pais,
        artePortada:nuevoDisco.artePortada,
      });
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }
  };

  export default crearDisco;