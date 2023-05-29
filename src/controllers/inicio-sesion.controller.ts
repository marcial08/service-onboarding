import { Response } from 'express'
import { postOnboarding } from '../api/onboarding.api'
import config from '../util/config'
import { varDefaultLogin } from '../util/variablesDefault'

// * Inicio de sesión
export const inicioSesion = async (res: Response) => {
  try {
    let dataReq = constructorLogin();
    const response = await postOnboarding(dataReq.body, 'ENDPOINT_INICIO_SESION')
    const token = response?.data?.token;
    
    const inicioCorrecto = !!token;
    return { inicioCorrecto, token };
  } catch (error) {
    // Manejar errores
    throw new Error('Unknown error occurred');
  }
}

const constructorLogin = () => {
  const req: any = {}; 
  req.body = {}; 
  req.body.metodo = varDefaultLogin.metodo,
  req.body.Usuario = config.USER_ONBOARDING,
  req.body.Clave = config.CLAVE_ONBOARDING,
  req.body.IDispositivo = varDefaultLogin.IDispositivo
  return req;
};
