import mongoose from "npm:mongoose@7.6.3";
import { Disco } from "../tipos.ts";

const Schema = mongoose.Schema;

const DiscoSchema = new Schema(
    {
        nombre:{ type: String, required: true},
        autor:{ type: String, required: true },
        formato:{ type: String, required: true },
        matriz:{ type: String},
        pais:{ type: String, required: true },
        artePortada:{ type: String, required: true },
    },
    { timestamps: true }
  );

export type DiscoModelType = mongoose.Document & Omit<Disco, "id">;

export default mongoose.model<DiscoModelType>("Disco", DiscoSchema);
