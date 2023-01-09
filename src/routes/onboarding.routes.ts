import { Router } from 'express'
// import { schemaValition } from '../middlewares/schemaValidator.middleware'
// import { signIn, signUp } from '../controllers/auth.controller'
import { hello } from '../controllers/hello-world.controller'
// import { AuthSingInSchema, AuthSingUpSchema } from '../schemas/auth.schema'

const router = Router()

router.post('/hello', hello)
// router.post('/signup', schemaValition(AuthSingUpSchema), signUp)

// router.post('/signin', schemaValition(AuthSingInSchema), signIn)

export default router
