import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";
import multer from "multer";

import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

routes.get("/orphanages/:id", OrphanagesController.show);

routes.get("/orphanages", OrphanagesController.index);

export default routes;

// {
//     "id": 4,
//     "name": "Lar das crianças",
//     "latitude": -28.8561167,
//     "longitude": -51.283754,
//     "about": "Sobre o orfanato muito legal",
//     "instructions": "Venha visitar",
//     "opening_hours": "Das 8h até as 18h",
//     "open_on_weekends": true
// }
