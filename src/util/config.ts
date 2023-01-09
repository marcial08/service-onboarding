import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || '3000',
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || 'projectsdb',
  POSTGRES_USER: process.env.POSTGRES_USER || 'root',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'root',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PORT: (process.env.POSTGRES_PORT as unknown as number) || 5434,
  INITIALIZATION_DATABASE: process.env.INITIALIZATION_DATABASE || 0,
  JWT_SECRET: process.env.JWT_SECRET || '1d3pr01fd',
  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  AUTH_USERNAME: process.env.AUTH_USERNAME || 'wsIdepro',
  AUTH_PASSWORD: process.env.AUTH_PASSWORD || 'ws1d3pr0',
  JWT_TIME_EXPIRY: process.env.JWT_TIME_EXPIRY || '365d',
  AUTH_VERSION: process.env.AUTH_VERSION || '2.0.0',
  ENPOINT_TRANSACCION: process.env.ENPOINT_TRANSACCION || 'http://localhost:8080/',
  ENPOINT_CARTERA: process.env.ENPOINT_CARTERA || 'http://localhost:8080/',
  ENPOINT_SEGUROS: process.env.ENPOINT_SEGUROS || 'http://localhost:8080/'
}
