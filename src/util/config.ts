import dotenv from 'dotenv'
dotenv.config()

export default {
  PORT: process.env.PORT || '4000',
  AUTH_VERSION: process.env.AUTH_VERSION || '1.0.0',
  URL_ONBOARDING: process.env.URL_ONBOARDING || 'https://nbtest.idepro.org/netbank_ws/',
  TOKEN_ONBOARDING:
    process.env.TOKEN_ONBOARD ||
    'EYJ0EXAIOIJKV1QILCJHBGCIOIJIUZI1NIJ9.EYJPYXQIOJE2NZCWNZYYODYSIMV4CCI6MTY3NZA3OTG4NIWIZGF0YSI6EYJ1C3JUIJOITUFGIIWIAWRTBYI6IJAIFX0.PJWVX2KKXT96QCUEEPGPGE9ZBTQA6LD9QEFYUR0LWNQ',
  USER_ONBOARDING: process.env.USER_ONBOARDING || 'API',
  URL_INFORMIX: process.env.URL_INFORMIX || 'http://10.0.1.155:3000/api/consulta',
  URL_SERVICE_OPENAPI: process.env.URL_SERVICE_OPENAPI || 'http://localhost:4004/',
  // Variables default Caja de ahorro
  VAR_TRANSFER_DIA: process.env.VAR_TRANSFER_DIA || '9999',
  VAR_IMPORTE_DIA: process.env.VAR_IMPORTE_DIA || '68000',
  VAR_TRANSFER_PERIODO: process.env.VAR_TRANSFER_PERIODO || '9999',
  VAR_IMPORTE_PERIODO: process.env.VAR_IMPORTE_PERIODO || '9999999999',
  VAR_IMPORTE_TITULAR: process.env.VAR_IMPORTE_TITULAR || '7',
  VAR_IMPORTE_REFERIDO: process.env.VAR_IMPORTE_REFERIDO || '15'
}
