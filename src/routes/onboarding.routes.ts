import { Router } from 'express'
import { schemaValition } from '../middlewares/schemaValidator.middleware'
import { inicioSesion } from '../controllers/inicio-sesion.controller'
import { hello } from '../controllers/hello-world.controller'
import { PostInicioSesionSchema } from '../schemas/inicio-sesion.schema'

const router = Router()

router.post('/hello', hello)
// router.post('/signup', schemaValition(AuthSingUpSchema), signUp)

router.post('/inicio_sesion', schemaValition(PostInicioSesionSchema), inicioSesion)

export default router
