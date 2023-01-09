import { Request, Response } from 'express'
import config from '../util/config'
import messageUtil from '../util/message.util'
// import { UserModel } from '../model/User'
import { InicioSesionSchemaType } from '../schemas/inicio-sesion.schema'
import { postOnboarding } from '../api/onboarding.api'

// * Inicio de sesión
export const inicioSesion = async (req: Request, res: Response) => {
  try {
    const response = await postOnboarding(req.body, 'ENDPOINT_INICIO_SESION')
    console.log(response.data)
    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: {
        mensaje: messageUtil.MENSAJE_CORRECTO,
        estado: messageUtil.STATUS_OK,
        data: response.data.data ? response.data.data : response.data
      }
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
