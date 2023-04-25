import Router from "express";
import PostController from "./PostController.js";

const router = new Router()

router.post('/contacts', PostController.create)
router.get('/contacts', PostController.getAll)
router.get('/contacts/:id', PostController.getOne)
router.put('/contacts', PostController.update)
router.delete('/contacts/:id', PostController.delete)

export default router;