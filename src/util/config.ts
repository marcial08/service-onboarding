import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || '3000',
  AUTH_VERSION: process.env.AUTH_VERSION || '1.0.0',
  URL_ONBOARDING: process.env.URL_ONBOARDING || 'https://svr-ws01.idepro.org/netbank_ws/',
  ENPOINT_CARTERA: process.env.ENPOINT_CARTERA || 'http://localhost:8080/',
  ENPOINT_SEGUROS: process.env.ENPOINT_SEGUROS || 'http://localhost:8080/'
}
