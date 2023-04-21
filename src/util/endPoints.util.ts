import config from './config'

export const onboardingEndPoint: any = {
  ENDPOINT_INICIO_SESION: config.URL_ONBOARDING + 'wnb_login.php',
  ENDPOINT_TRAER_VERSION: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_GUARDAR_AGENDA: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_MODIFICA_AGENDA: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_ELIMINAR: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_CONSULTA_AGENDA: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_REGISTRO_AGENDA_COMPLETO: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_BUSQUEDA_CLIENTE: config.URL_ONBOARDING + 'gbm001_mws.php',
  ENDPOINT_TRAER_MAESTRO_C: config.URL_ONBOARDING + 'cam305_mws.php',
  ENDPOINT_CONSULTAR_MAESTRO_C: config.URL_ONBOARDING + 'cam305_mws.php',
  ENDPOINT_GUARDAR_MAESTRO_C: config.URL_ONBOARDING + 'cam305_mws.php',
  ENDPOINT_IMPRIMIR_REGISTRO_C: config.URL_ONBOARDING + 'cam305_mws.php',
  ENDPOINT_REVERTIR_C: config.URL_ONBOARDING + 'cam305_mws.php',
  ENDPOINT_: config.URL_ONBOARDING + ''
}
export const openapiEndPoint: any = {
  ENDPOINT_ABONO_CUENTA_VIA: config.URL_SERVICE_OPENAPI + 'api/openapi/abono_cuenta_via'
}
