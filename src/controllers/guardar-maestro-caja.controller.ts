import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix, postOnboarding, postServices } from '../api/onboarding.api'
import { varDefaulGuardarMaestroCaja } from '../util/variablesDefault'
import config from '../util/config'

// * Guardar version maestro caja ahorro
export const guardarMaestroCaja = async (req: Request, res: Response) => {
  try {
    req.body.token = process.env.TOKEN_ONBOARDING
    req.body.Usuario = process.env.USER_ONBOARDING

    
      let dataReq = constructorMaestro(req)

      const reqBodyFinal = await armadoReqQuery(dataReq)
      const response = await postOnboarding(reqBodyFinal.body, 'ENDPOINT_GUARDAR_MAESTRO_C')

      if (response.data.error !== 0) {
        return res.status(500).json({
          mensaje: messageUtil.MENSAJE_ERROR,
          estado: messageUtil.STATUS_NOK,
          data: {
            error: response.data.msj
          }
        })
      }

      await registraQuery(req, response)
      await setCodigoPlaza(req, response)
      let pData = {
        pCodigoCliente: req.body.codigoCliente,
        pNumeroCuenta: response.data.nroTransaccionGenerado,
        pImporte: config.VAR_IMPORTE_TITULAR,
        pGlosa: 'Recompensa por Apertura de Cuenta Titular'
      }

      // ? Referido
      let msjReferido = []
      const mjsOne = await consumeOpenAPI(pData)
      const mjsTwo = await recompensaReferido(req.body)
      msjReferido.push(mjsOne)
      if (mjsTwo) {
        msjReferido.push(mjsTwo)
      }

      // console.log(response.data)
      return res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        status: messageUtil.STATUS_OK,
        data: response.data.data ? response.data.data : response.data,
        msjReferido: msjReferido
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

const armadoReqQuery = async (req: any) => {
  const { idDepartamento } = req.body
  // let sql1 = {
  //   dataSql: [`select max(gbofinofi) oficina from gbofi where gbofidpto = ${idDepartamento}`]
  // }
  let sql2 = {
    dataSql: [
      // `select max(adusrcage) firma_atencion_cliente from adusr where adusrperf = 'AC1' and adusragen = (select max(gbofinofi) oficina from gbofi where gbofidpto = ${idDepartamento}) and adusrmrcb = 0`
      `select max(adusrcage) firma_atencion_cliente from adusr where adusrperf = 'AC1' and adusragen = 3 and adusrmrcb = 0`
    ]
  }
  // const resSQL1 = await postInformix(sql1)
  const resSQL2 = await postInformix(sql2)
  // const dataSQL1 = resSQL1.data[0].data.length > 0 ? resSQL1.data[0].data[0].oficina : ''
  const dataSQL2 = resSQL2.data[0].data.length > 0 ? resSQL2.data[0].data[0].firma_atencion_cliente : ''

  // req.body.codigoAgencia = dataSQL1
  req.body.codigoOficialCredito = dataSQL2
  return req
}

const registraQuery = async (req: any, res: any) => {
  const { codigoCliente, idDepartamento } = req.body

  let sqlQuery_1 = {
    dataSql: [`select obpincemp from obpin where obpincemp = ${codigoCliente}`]
  }
  let sqlInsert_1 = {
    dataSql: [
      `insert into obpin(obpincemp,obpincage,obpinnpin,obpinuser,obpinhora,obpinfpro,obpinngen) values (${codigoCliente},${codigoCliente},'70510022','API',current::datetime hour to SECOND,TODAY,(select max(gbofinofi) oficina from gbofi where gbofidpto = ${idDepartamento}))`
    ]
  }

  let sqlQuery_2 = {
    dataSql: [`select obprccage from obprc where obprccage = ${codigoCliente}`]
  }
  let sqlInsert_2 = {
    dataSql: [
      `insert into obprc(obprcnsol,obprccage,obprcapod,obprcperf,obprcmodn,obprcstat,obprcuser,obprchora,obprcfpro)values((select max(obprcnsol)+1 from obprc),${codigoCliente},${codigoCliente},'A',28,1,'API',current::datetime hour to SECOND,TODAY)`
    ]
  }

  let sqlQuery_3 = {
    dataSql: [`select obctocage from obcto where obctocage = ${codigoCliente}`]
  }
  let sqlInsert_3 = {
    dataSql: [
      `insert into obcto(obctocage,obctoapod,obctoncto,obctofcto,obctofvto,obctostat,obctomrcb,obctouser,obctohora,obctofpro) values (${codigoCliente},${codigoCliente},(SELECT max(SUBSTR(obctoncto, 1, 7) || (SELECT max(LPAD(CAST((SELECT max(SUBSTR(ob.obctoncto, LENGTH(ob.obctoncto)-7, 5)) FROM obcto as ob) AS INTEGER) + 1, LENGTH('0000'), '0')) AS nuevo_numero FROM obcto) || '-' || SUBSTR(obctoncto, 13, 3)) AS nuevo_campo FROM obcto),(select gbpmtfdia from gbpmt),'',0,0,'API',current::datetime hour to SECOND,TODAY)`
    ]
  }

  let sqlQuery_4 = {
    dataSql: [`select obmaxcage from obmax where obmaxcage = ${codigoCliente}`]
  }
  let sqlInsert_4 = {
    dataSql: [
      `insert into obmax(obmaxcage,obmaxapod,obmaxctrd,obmaxttrd,obmaxctrp,obmaxttrp,obmaxdesc,obmaxdctr,obmaxdttr,obmaxpctr,obmaxpttr,obmaxfipe,obmaxmrcb,obmaxuser,obmaxhora,obmaxfpro) values (${codigoCliente},${codigoCliente},${config.VAR_TRANSFER_DIA},${config.VAR_IMPORTE_DIA},${config.VAR_TRANSFER_PERIODO},${config.VAR_IMPORTE_PERIODO},'PARAMETRIZACION DE LIMITES DE TRANSFERENCIAS',0,0,0,0,(select gbpmtfdia from gbpmt),0,'API',current::datetime hour to SECOND,TODAY)`
    ]
  }

  // Consulta
  const resQuerySQL1 = await postInformix(sqlQuery_1)
  if (resQuerySQL1.data[0].data.length === 0) {
    const resSQL1 = await postInformix(sqlInsert_1)
  }

  const resQuerySQL2 = await postInformix(sqlQuery_2)
  if (resQuerySQL2.data[0].data.length === 0) {
    const resSQL2 = await postInformix(sqlInsert_2)
  }

  const resQuerySQL3 = await postInformix(sqlQuery_3)
  if (resQuerySQL3.data[0].data.length === 0) {
    const resSQL3 = await postInformix(sqlInsert_3)
  }

  const resQuerySQL4 = await postInformix(sqlQuery_4)
  if (resQuerySQL4.data[0].data.length === 0) {
    const resSQL4 = await postInformix(sqlInsert_4)
  }
}

const setCodigoPlaza = async (req: any, res: any) => {
  const { codigoCliente } = req.body
  let sql1 = {
    dataSql: [`select gbagecage||gbageplaz as codplaza from gbage where gbagecage = ${codigoCliente} and gbagemrcb = 0`]
  }
  const resSQL1 = await postInformix(sql1)
  const dataSQL1 = resSQL1.data[0].data.length > 0 ? resSQL1.data[0].data[0].codplaza : ''

  res.data.codClientePlaza = dataSQL1
}

// * Metodo para consumir el servicio openapi
const consumeOpenAPI = async (pData: any) => {
  const { pCodigoCliente, pNumeroCuenta, pGlosa, pImporte } = pData

  const dataReq = {
    codigo_servicio: '',
    codigo_cliente: pCodigoCliente,
    importe: pImporte,
    glosa: pGlosa,
    numero_cuenta: pNumeroCuenta,
    origen_fondo: '',
    destino_fondo: ''
  }
  const response = await postServices(dataReq, 'ENDPOINT_ABONO_CUENTA_VIA')
  const msjConsumo = `Transacción exitoso (${response.data.data.numero_transaccion}) con codCliente ${pCodigoCliente} y nro de cuenta ${pNumeroCuenta}.`
  return msjConsumo
}

const recompensaReferido = async (pData: any) => {
  const { codigoClienteReferido, cuentaReferido } = pData

  if (codigoClienteReferido !== '' && cuentaReferido !== '') {
    return await consumeOpenAPI({
      pCodigoCliente: codigoClienteReferido,
      pNumeroCuenta: cuentaReferido,
      pImporte: config.VAR_IMPORTE_REFERIDO,
      pGlosa: 'Recompensa por Apertura de Cuenta Referido'
    })
  }
  return null
}
