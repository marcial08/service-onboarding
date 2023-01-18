import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { InicioSesionSchemaType } from '../schemas/inicio-sesion.schema'
import { postOnboarding } from '../api/onboarding.api'

// * Inicio de sesión
export const inicioSesion = async (req: Request, res: Response) => {
  try {
    const response = await postOnboarding(req.body, 'ENDPOINT_INICIO_SESION')
    console.log(response.data)
    process.env.TOKEN = response.data.token
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
