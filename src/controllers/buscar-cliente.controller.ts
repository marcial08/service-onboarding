import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix, postOnboarding } from '../api/onboarding.api'
import { inicioSesion } from './inicio-sesion.controller'
import config from '../util/config'

// * Consultar Agenda
export const buscarCliente = async (req: Request, res: Response) => {
  try {
    const responseLogin = await inicioSesion(res);
    const { inicioCorrecto, token } = responseLogin;
    if (inicioCorrecto) {
    req.body.token = token
    req.body.Usuario = config.USER_ONBOARDING
    const response = await postOnboarding(req.body, 'ENDPOINT_BUSQUEDA_CLIENTE')
    await updateDatosAdicionales(req.body.CodCliente)
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

export const updateDatosAdicionales = async (codcliente: string) => {
  
  

  const codClienteRes = codcliente? codcliente: null
  
  if (codClienteRes) {
    let sql1 = {
      dataSql: [
        `update gbdac set gbdaccncn= 98, gbdacpaip=1 where gbdaccage = ${codClienteRes}`
      ]
    }
    await postInformix(sql1)
  }
}