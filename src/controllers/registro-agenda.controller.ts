import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postOnboarding } from '../api/onboarding.api'
import config from '../util/config'

// * Registro agenda completo
export const registroAgendaCompleto = async (req: Request, res: Response) => {
  try {
    req.body.token = process.env.TOKEN_ONBOARDING
    req.body.Usuario = process.env.USER_ONBOARDING
    req.body.CodAgencia = 3;
    req.body.CodPlaza = 20;

    const response = await postOnboarding(req.body, 'ENDPOINT_REGISTRO_AGENDA_COMPLETO')
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
