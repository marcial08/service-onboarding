import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || '4000',
  AUTH_VERSION: process.env.AUTH_VERSION || '1.0.0',
  URL_ONBOARDING: process.env.URL_ONBOARDING || 'https://nbtest.idepro.org/netbank_ws/',
  TOKEN_ONBOARDING:
    process.env.TOKEN_ONBOARD ||
    'EYJ0EXAIOIJKV1QILCJHBGCIOIJIUZI1NIJ9.EYJPYXQIOJE2NZCWNZYYODYSIMV4CCI6MTY3NZA3OTG4NIWIZGF0YSI6EYJ1C3JUIJOITUFGIIWIAWRTBYI6IJAIFX0.PJWVX2KKXT96QCUEEPGPGE9ZBTQA6LD9QEFYUR0LWNQ'
}
