import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix } from '../api/onboarding.api'

export const detalleTransacciones = async (req: Request, res: Response) => {
  try {
    const responseData = await armadoRespQuery(req)

    // console.log(response.data)
    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: responseData
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

const armadoRespQuery = async (req: any) => {
  const { codigoCliente, fechaInicio, fechaFinal } = req.body
  let resFinal = {}

  if (fechaInicio !== '' && fechaFinal !== '') {
    let sql1 = {
      dataSql: [
        `select 'Transferencias Entre Cuentas IDEPRO/TECHREO' as Operacion,catrnfpro fecha, 'Transferencia Movil de Tercero' as detalle, catrnimpo monto, (case when catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrnhora hora,catrnntra nro_transaccion, '' origen_destino,'' nro_cuenta_origen_destino,'' banco,'' nro_dpf,catrnglos glosa from catrn where catrnncta = (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente}) and catrnfpro between '${fechaInicio}' and '${fechaFinal}'`
      ]
    }
    const resSQL1 = await postInformix(sql1)
    resFinal = resSQL1.data[0].data.length > 0 ? resSQL1.data[0].data : []
  } else {
    let sql2 = {
      dataSql: [
        `select first 5 'Transferencias Entre Cuentas IDEPRO/TECHREO' as Operacion,catrnfpro fecha, 'Transferencia Movil de Tercero' as detalle, catrnimpo monto, (case when catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrnhora hora,catrnntra nro_transaccion, '' origen_destino,'' nro_cuenta_origen_destino,'' banco,'' nro_dpf,catrnglos glosa from catrn where catrnncta = (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})`
      ]
    }
    const resSQL2 = await postInformix(sql2)
    resFinal = resSQL2.data[0].data.length > 0 ? resSQL2.data[0].data : []
  }

  return resFinal
}
