import express from 'express'
import config from './util/config'
import morgan from 'morgan'
import cors from 'cors'
import onboardingRoutes from './routes/onboarding.routes'
// import authRoutes from './routes/auth.routes'

const app = express()

// * Config file for express server and client
app.set('port', config.PORT)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//* Router
app.use('/api', onboardingRoutes)
// app.use('/api/users', userRoutes)

export default app
