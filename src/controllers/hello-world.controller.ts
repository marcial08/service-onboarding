import { Request, Response } from 'express'
import config from '../util/config'
import messageUtil from '../util/message.util'

// * Hello world!
export const hello = async (req: Request<unknown, unknown, unknown, unknown>, res: Response) => {
  try {
    process.env.TOKEN = 'token'
    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: {
        message: 'hello world',
        fecha: new Date().toLocaleString('en-US'),
        version: config.AUTH_VERSION
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
