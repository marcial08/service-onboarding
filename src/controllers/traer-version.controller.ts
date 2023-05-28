import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postOnboarding } from '../api/onboarding.api'
import config from '../util/config'
import { inicioSesion } from './inicio-sesion.controller'
import { varDefaultLogin } from '../util/variablesDefault'

// * Traer version
export const taerVersion = async (req: Request, res: Response) => {
  try {
    
    let dataReq = constructorLogin();
    const responseLogin = await inicioSesion(dataReq, res);
    req.body.token = process.env.TOKEN_ONBOARDING
    req.body.Usuario = responseLogin.data.token
    console.log('RESPUESTAAAAAAAAAAAAAAAAAAAAAAAA', req.body);
    const response = await postOnboarding(req.body, 'ENDPOINT_TRAER_VERSION')
    // console.log(response.data)
    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: response.data.data ? response.data.data : response.data
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        mensaje: messageUtil.MENSAJE_ERROR,
        estado: messageUtil.STATUS_NOK,
        data: {
          error: error.message
        }
      })
    }
  }
}
const constructorLogin = () => {
  const req: any = {}; 
  req.body = {}; 
  
  req.body.metodo = varDefaultLogin.metodo;
  req.body.Usuario = process.env.USER_ONBOARDING;
  req.body.Clave = process.env.CLAVE_ONBOARDING;
  req.body.IDispositivo = varDefaultLogin.IDispositivo;

  return req;
};