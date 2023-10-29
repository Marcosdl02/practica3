import { Request, Response } from "npm:express@4.18.2";
import DiscoModel from "../BasesDeDatos/disco.ts";

const eliminarDisco = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const disco = await DiscoModel.findOneAndDelete({ _id:id }).exec();
      if (!disco) {
        res.status(404).send("El disco no se ha encontrado");
        return;
      }
      res.status(200).send("Disco eliminado");
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };

  export default eliminarDisco;