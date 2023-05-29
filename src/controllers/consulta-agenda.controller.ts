import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { InicioSesionSchemaType } from '../schemas/inicio-sesion.schema'
import { postOnboarding } from '../api/onboarding.api'
import config from '../util/config'
import { inicioSesion } from './inicio-sesion.controller'

// * Consultar Agenda
export const consultarAgenda = async (req: Request, res: Response) => {
  try {
    const responseLogin = await inicioSesion(res);
    const { inicioCorrecto, token } = responseLogin;
    if (inicioCorrecto) {
    req.body.token = token
    req.body.Usuario = process.env.USER_ONBOARDING
    const response = await postOnboarding(req.body, 'ENDPOINT_CONSULTA_AGENDA')
    // console.log(response.data)
    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: response.data.data ? response.data.data : response.data
    })
  }else{
    return res.status(500).json({
      mensaje: messageUtil.MENSAJE_AUTENTIFICACION_FALLO,
      status: messageUtil.STATUS_NOK,
      data: {}
    })
    }
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
