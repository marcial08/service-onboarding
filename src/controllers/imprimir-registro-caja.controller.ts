import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { InicioSesionSchemaType } from '../schemas/inicio-sesion.schema'
import { postOnboarding } from '../api/onboarding.api'
import config from '../util/config'

// * Imprimir registro caja ahorros
export const imprimirRegistroCaja = async (req: Request, res: Response) => {
  try {
    req.body.token = process.env.TOKEN
    const response = await postOnboarding(req.body, 'ENDPOINT_IMPRIMIR_REGISTRO_C')
    console.log(response.data)
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