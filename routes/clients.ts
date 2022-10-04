import { Router } from "express";
import { getClientsFilter } from "../controllers/clients";

const router = Router();

router.post('/', getClientsFilter)

export default router;