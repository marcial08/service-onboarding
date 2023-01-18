import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || '4000',
  AUTH_VERSION: process.env.AUTH_VERSION || '1.0.0',
  URL_ONBOARDING: process.env.URL_ONBOARDING || 'https://nbtest.idepro.org/netbank_ws/'
}
