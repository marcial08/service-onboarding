import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix, postOnboarding } from '../api/onboarding.api'
import { varDefaulGuardarMaestroCaja } from '../util/variablesDefault'

// * Guardar version maestro caja ahorro
export const guardarMaestroCaja = async (req: Request, res: Response) => {
  try {
    req.body.token = process.env.TOKEN_ONBOARDING
    req.body.Usuario = process.env.USER_ONBOARDING

    let pIdeDepartamento = Number(req.body.idDepartamento)
    if (pIdeDepartamento <= 9 && pIdeDepartamento >= 1) {
      let dataReq = constructorMaestro(req)

      const reqBodyFinal = await aramadoReqQuery(dataReq)
      const response = await postOnboarding(reqBodyFinal.body, 'ENDPOINT_GUARDAR_MAESTRO_C')

      // console.log(response.data)
      return res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        status: messageUtil.STATUS_OK,
        data: response.data.data ? response.data.data : response.data
      })
    } else {
      // console.log(response.data)
      return res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        status: messageUtil.STATUS_OK,
        data: { message: 'El campo idDepartamento debe ser entre 1 a 9' }
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

const constructorMaestro = (req: any) => {
  const { codigoCliente } = req.body
  req.body.token = process.env.TOKEN_ONBOARDING
  req.body.Usuario = process.env.USER_ONBOARDING

  req.body.metodo = varDefaulGuardarMaestroCaja.metodo
  req.body.tipoCuenta = varDefaulGuardarMaestroCaja.tipoCuenta
  req.body.codigoMoneda = varDefaulGuardarMaestroCaja.codigoMoneda
  req.body.codigoManejo = varDefaulGuardarMaestroCaja.codigoManejo
  req.body.codigoFirma_1 = codigoCliente
  req.body.claseFirma_1 = varDefaulGuardarMaestroCaja.claseFirma_1
  req.body.codigoFirma_2 = varDefaulGuardarMaestroCaja.codigoFirma_2
  req.body.claseFirma_2 = varDefaulGuardarMaestroCaja.claseFirma_2
  req.body.codigoFirma_3 = varDefaulGuardarMaestroCaja.codigoFirma_3
  req.body.claseFirma_3 = varDefaulGuardarMaestroCaja.claseFirma_3
  req.body.codigoFirma_4 = varDefaulGuardarMaestroCaja.codigoFirma_4
  req.body.claseFirma_4 = varDefaulGuardarMaestroCaja.claseFirma_4
  req.body.codigoFirma_5 = varDefaulGuardarMaestroCaja.codigoFirma_5
  req.body.claseFirma_5 = varDefaulGuardarMaestroCaja.claseFirma_5
  req.body.codigoFirma_6 = varDefaulGuardarMaestroCaja.codigoFirma_6
  req.body.claseFirma_6 = varDefaulGuardarMaestroCaja.claseFirma_6
  req.body.codigoFirma_7 = varDefaulGuardarMaestroCaja.codigoFirma_7
  req.body.claseFirma_7 = varDefaulGuardarMaestroCaja.claseFirma_7
  req.body.codigoFirma_8 = varDefaulGuardarMaestroCaja.codigoFirma_8
  req.body.claseFirma_8 = varDefaulGuardarMaestroCaja.claseFirma_8
  req.body.codigoFirma_9 = varDefaulGuardarMaestroCaja.codigoFirma_9
  req.body.claseFirma_9 = varDefaulGuardarMaestroCaja.claseFirma_9
  req.body.codigoFirma_10 = varDefaulGuardarMaestroCaja.codigoFirma_10
  req.body.claseFirma_10 = varDefaulGuardarMaestroCaja.claseFirma_10
  req.body.marcaRetencionIVA = varDefaulGuardarMaestroCaja.marcaRetencionIVA
  req.body.instructivo = varDefaulGuardarMaestroCaja.instructivo
  req.body.codigoAgencia = varDefaulGuardarMaestroCaja.codigoAgencia
  req.body.codigoUso = varDefaulGuardarMaestroCaja.codigoUso
  req.body.codigoTitulares_1 = varDefaulGuardarMaestroCaja.codigoTitulares_1
  req.body.codigoTitulares_2 = varDefaulGuardarMaestroCaja.codigoTitulares_2
  req.body.codigoTitulares_3 = varDefaulGuardarMaestroCaja.codigoTitulares_3
  req.body.codigoTitulares_4 = varDefaulGuardarMaestroCaja.codigoTitulares_4
  req.body.codigoTitulares_5 = varDefaulGuardarMaestroCaja.codigoTitulares_5
  req.body.codigoTitulares_6 = varDefaulGuardarMaestroCaja.codigoTitulares_6
  req.body.codigoTitulares_7 = varDefaulGuardarMaestroCaja.codigoTitulares_7
  req.body.codigoTitulares_8 = varDefaulGuardarMaestroCaja.codigoTitulares_8
  req.body.codigoTitulares_9 = varDefaulGuardarMaestroCaja.codigoTitulares_9
  req.body.codigoTitulares_10 = varDefaulGuardarMaestroCaja.codigoTitulares_10
  req.body.codigoOficialCredito = varDefaulGuardarMaestroCaja.codigoOficialCredito
  req.body.codigoMotivoApertura = varDefaulGuardarMaestroCaja.codigoMotivoApertura

  return req
}

const aramadoReqQuery = async (req: any) => {
  const { idDepartamento } = req.body
  let sql1 = {
    dataSql: [`select max(gbofinofi) oficina from gbofi where gbofidpto = ${idDepartamento}`]
  }
  let sql2 = {
    dataSql: [
      `select max(adusrcage) firma_atencion_cliente from adusr where adusrperf = 'AC1' and adusragen = (select max(gbofinofi) oficina from gbofi where gbofidpto = ${idDepartamento}) and adusrmrcb = 0`
    ]
  }
  // const resSQL1 = await postInformix(sql1)
  // const resSQL2 = await postInformix(sql2)
  // const dataSQL1 = resSQL1.data[0].data.length > 0 ? resSQL1.data[0].data[0].oficina : ''
  // const dataSQL2 = resSQL2.data[0].data.length > 0 ? resSQL2.data[0].data[0].firma_atencion_cliente : ''

  const dataSQL1 = '28'
  const dataSQL2 = '99639'

  req.body.codigoAgencia = dataSQL1
  req.body.codigoOficialCredito = dataSQL2
  return req
}
