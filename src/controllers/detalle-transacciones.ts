import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix } from '../api/onboarding.api'

export const detalleTransacciones = async (req: Request, res: Response) => {
  try {
    const responseData = await armadoRespQuery(req)
    /** 
    const responseData = [
      {
        operacion: 'Recompensa de Bienvenida',
        fecha: '22/3/2023',
        detalle: 'Recompensa por Apertura de Cuenta',
        monto: 'Bs5,00',
        tipo_operacion: 'Depósito',
        hora: '11:53',
        nro_transaccion: '54863547',
        origen_destino: 'IDEPRO IFD/TECHREO',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '',
        glosa: 'Recompensa por Apertura de Cuenta'
      },
      {
        operacion: 'Recompensa por Referido',
        fecha: '22/3/2023',
        detalle: 'Recompensa por Referido',
        monto: 'Bs10,00',
        tipo_operacion: 'Depósito',
        hora: '11:53',
        nro_transaccion: '548489',
        origen_destino: 'IDEPRO IFD/TECHREO',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '',
        glosa: 'Recompensa por Referido'
      },
      {
        operacion: 'Transferencias Entre Cuentas IDEPRO/TECHREO',
        fecha: '25/4/2023',
        detalle: 'Transferencia Móvil a Tercero',
        monto: '-Bs100,00',
        tipo_operacion: 'Retiro',
        hora: '12:55',
        nro_transaccion: '48523671',
        origen_destino: 'Pedro Pérez',
        nro_cuenta_origen_destino: 'A-10000253894',
        banco: '',
        nro_dpf: '',
        glosa: 'De acuerdo a lo registrado en Campo "Concepto"'
      },
      {
        operacion: 'Transferencias Entre Cuentas IDEPRO/TECHREO',
        fecha: '25/4/2023',
        detalle: 'Transferencia Móvil de Tercero',
        monto: 'Bs100,00',
        tipo_operacion: 'Depósito',
        hora: '14:45',
        nro_transaccion: '5238941',
        origen_destino: 'Andrés Ortega',
        nro_cuenta_origen_destino: 'A-10000358926',
        banco: '',
        nro_dpf: '',
        glosa: 'De acuerdo a lo registrado en Campo "Concepto"'
      },
      {
        operacion: 'Transferencias Interbancarias',
        fecha: '26/5/2023',
        detalle: 'Transferencia Interbancaria',
        monto: '-Bs100,00',
        tipo_operacion: 'Retiro',
        hora: '15:33',
        nro_transaccion: '41235689',
        origen_destino: 'Pedro Pérez',
        nro_cuenta_origen_destino: 'B-7000004268',
        banco: 'Banco Mercantil',
        nro_dpf: '',
        glosa: 'De acuerdo a lo registrado en Campo "Concepto"'
      },
      {
        operacion: 'Transferencias Interbancarias',
        fecha: '26/5/2023',
        detalle: 'Transferencia Interbancaria',
        monto: 'Bs100,00',
        tipo_operacion: 'Depósito',
        hora: '18:33',
        nro_transaccion: '258946231',
        origen_destino: 'Andrés Ortega',
        nro_cuenta_origen_destino: 'B-80000056874',
        banco: 'Banco Fassil',
        nro_dpf: '',
        glosa: 'De acuerdo a lo registrado en Campo "Concepto"'
      },

      {
        operacion: 'Inversión DPF',
        fecha: '27/5/2023',
        detalle: 'Creación de DPF',
        monto: '-Bs10.000,00',
        tipo_operacion: 'Retiro',
        hora: '15:00',
        nro_transaccion: '245318956',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Creación de DPF'
      },
      {
        operacion: 'Cuando el DPF vence y hay instrucción de liquidación',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Capital)',
        monto: 'Bs10.000,00',
        tipo_operacion: 'Depósito',
        hora: '14:00',
        nro_transaccion: '25368942',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Capital)'
      },
      {
        operacion: 'Cuando el DPF vence y hay instrucción de liquidación',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Interés)',
        monto: 'Bs200,00',
        tipo_operacion: 'Depósito',
        hora: '14:01',
        nro_transaccion: '25368943',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Interés)'
      },
      {
        operacion: 'Cuando el DPF vence y hay instrucción de liquidación',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Impuesto)',
        monto: '-Bs20,00',
        tipo_operacion: 'Retiro',
        hora: '14:02',
        nro_transaccion: '2536845',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Impuesto)'
      },
      {
        operacion: 'Cuando el DPF vence y existe instrucción de Renovación',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Capital)',
        monto: 'Bs10.000,00',
        tipo_operacion: 'Depósito',
        hora: '14:00',
        nro_transaccion: '25368942',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Capital)'
      },
      {
        operacion: 'Cuando el DPF vence y existe instrucción de Renovación',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Interés)',
        monto: 'Bs200,00',
        tipo_operacion: 'Depósito',
        hora: '14:01',
        nro_transaccion: '25368943',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Interés)'
      },
      {
        operacion: 'Cuando el DPF vence y existe instrucción de Renovación',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Impuesto)',
        monto: '-Bs20,00',
        tipo_operacion: 'Retiro',
        hora: '14:02',
        nro_transaccion: '2536845',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Impuesto)'
      },
      {
        operacion: 'Cuando el DPF vence y existe instrucción de Renovación',
        fecha: '30/6/2023',
        detalle: 'Creación de DPF o DPF VIP',
        monto: '-Bs15.000,00',
        tipo_operacion: 'Retiro',
        hora: '14:03',
        nro_transaccion: '245318956',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Creación de DPF o DPF VIP'
      },
      {
        operacion: 'Cuando el DPF vence y no existe instrucción',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Capital)',
        monto: 'Bs10.000,00',
        tipo_operacion: 'Depósito',
        hora: '14:00',
        nro_transaccion: '25368942',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Capital)'
      },
      {
        operacion: 'Cuando el DPF vence y no existe instrucción',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Interés)',
        monto: 'Bs200,00',
        tipo_operacion: 'Depósito',
        hora: '14:01',
        nro_transaccion: '25368943',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Interés)'
      },
      {
        operacion: 'Cuando el DPF vence y no existe instrucción',
        fecha: '30/6/2023',
        detalle: 'Liquidación de DPF (Impuesto)',
        monto: '-Bs20,00',
        tipo_operacion: 'Retiro',
        hora: '14:02',
        nro_transaccion: '2536845',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Impuesto)'
      },
      {
        operacion: 'Cuando el DPF vence y no existe instrucción',
        fecha: '30/6/2023',
        detalle: 'Creación de DPF',
        monto: 'Bs10.180,00',
        tipo_operacion: 'Retiro',
        hora: '14:03',
        nro_transaccion: '245318956',
        origen_destino: '',
        nro_cuenta_origen_destino: '',
        banco: '',
        nro_dpf: '4823659',
        glosa: 'Liquidación de DPF (Impuesto)'
      },
      {
        operacion: 'Cobro Simple QR',
        fecha: '25/4/2023',
        detalle: 'Cobro QR',
        monto: 'Bs100,00',
        tipo_operacion: 'Depósito',
        hora: '14:45',
        nro_transaccion: '5238941',
        origen_destino: 'Andrés Ortega',
        nro_cuenta_origen_destino: 'A-10000358926',
        banco: 'Idepro/Otro Banco',
        nro_dpf: '',
        glosa: 'De acuerdo a lo registrado en Campo "Referencia"'
      },
      {
        operacion: 'Pago Simple QR',
        fecha: '26/5/2023',
        detalle: 'Pago QR',
        monto: '-Bs100,00',
        tipo_operacion: 'Retiro',
        hora: '15:33',
        nro_transaccion: '41235689',
        origen_destino: 'Pedro Pérez',
        nro_cuenta_origen_destino: 'B-7000004268',
        banco: 'Idepro/Otro Banco',
        nro_dpf: '',
        glosa: 'De acuerdo a lo registrado en Campo "Referencia"'
      }
    ]
    */

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
        `select first 15 * from (
          select 'Recompensa de Bienvenida' as Operacion,catrnfpro fecha, 'Recompensa por Apertura de Cuenta' as detalle, catrnimpo*-1 monto, (case when catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrnhora hora,catrnntra nro_transaccion, 'IDEPRO IFD/TECHREO' origen_destino,'' nro_cuenta_origen_destino,'' banco, '' nro_dpf,'Recompensa por Apertura de Cuenta' glosa from catrn where catrnglos = 'Recompensa por Apertura de Cuenta Titular' and   catrnpref = 52 and catrncorr = 22 and catrnncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select 'Recompensa por Referido' as Operacion,catrnfpro fecha, 'Recompensa por Referido' as detalle, catrnimpo*-1 monto, (case when catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrnhora hora,catrnntra nro_transaccion, 'IDEPRO IFD/TECHREO' origen_destino,'' nro_cuenta_origen_destino,'' banco,'' nro_dpf,'Recompensa por Referido' glosa from catrn where catrnglos = 'Recompensa por Apertura de Cuenta Referido' and   catrnpref = 52 and catrncorr = 22 and catrnncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select 'Transferencias Entre Cuentas IDEPRO/TECHREO' as Operacion,catrn.catrnfpro fecha, 'Transferencia Movil de Tercero' as detalle, catrn.catrnimpo*-1 monto, (case when catrn.catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrn.catrnhora hora,catrn.catrnntra nro_transaccion, (case when(select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg) is null then '' else (select gbagenomb from catrn catrn_, camca, gbage where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg)end)  origen_destino,(case when (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) is null then '' else (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) end) nro_cuenta_origen_destino,'' banco,'' nro_dpf,catrn.catrnglos glosa from catrn where SUBSTR(catrn.catrnglos, 1, 3) != 'QR.' and catrn.catrnpref = 3 and (catrn.catrnimpo*-1) > 0 and catrn.catrncorr = 3 and catrn.catrnncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select 'Transferencias Entre Cuentas IDEPRO/TECHREO' as Operacion,catrn.catrnfpro fecha, 'Transferencia Movil a Tercero' as detalle, catrn.catrnimpo*-1 monto, (case when catrn.catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrn.catrnhora hora,catrn.catrnntra nro_transaccion, (case when(select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg)is null then '' else (select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg)end) origen_destino,(case when (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) is null then '' else (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) end) nro_cuenta_origen_destino,'' banco,'' nro_dpf,catrn.catrnglos glosa from catrn where  SUBSTR(catrn.catrnglos, 1, 3) != 'QR.' and catrn.catrnpref = 3 and (catrn.catrnimpo*-1) < 0 and catrn.catrncorr = 3 and catrn.catrnncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select 'Transferencias Interbancarias' as Operacion,tetrnfpro fecha, 'Transferencias Interbancarias' as detalle, tetrnimpo*-1 monto, (case when tetrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,tetrnhora hora,tetrnntra nro_transaccion,(case when tetrnnomx is null then '' else tetrnnomx end) origen_destino, (case when tetrnnctx is null then '' else tetrnnctx end) nro_cuenta_origen_destino,(case when (select tecondesc from tecon  where teconcomd = 1  and teconcorr = tetrncenx) is null then '' else (select tecondesc from tecon  where teconcomd = 1  and teconcorr = tetrncenx) end) banco,'' nro_dpf,tetrnglos glosa from tetrn where   tetrnidqr is null and  tetrnnvia in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select  'Inversion DPF' as Operacion,pfthdfpro fecha, 'Creacion de DPF' as detalle,pfthdimpt monto, (case when pfthdimpt > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,pfthdhora hora,pfthdntra nro_transaccion, '' origen_destino,'' nro_cuenta_origen_destino,'' banco,''||pfmdpndep nro_dpf,'Creacion de DPF' glosa from pfthd, pfmdp  where  pfmdpndep=pfthdndep and   pfthdncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select  'Cobro Simple QR' as Operacion,tetrnfpro fecha, 'Cobro QR' as detalle, tetrnimpo*-1 monto, (case when tetrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,tetrnhora hora,tetrnntra nro_transaccion, (case when tetrnnomx is null then '' else tetrnnomx end) origen_destino,(case when tetrnnctx is null then '' else tetrnnctx end) nro_cuenta_origen_destino,'Idepro/Otro Banco' banco,'' nro_dpf,tetrnglos glosa from tetrn where tetrnidqr is not null and (tetrnimpo*-1)>= 0 and tetrnnvia in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select  'Pago Simple QR' as Operacion,tetrnfpro fecha, 'Pago QR' as detalle, tetrnimpo*-1 monto, (case when tetrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,tetrnhora hora,tetrnntra nro_transaccion,(case when tetrnnomx is null then '' else tetrnnomx end) origen_destino,(case when tetrnnctx is null then '' else tetrnnctx end) nro_cuenta_origen_destino, 'Idepro/Otro Banco' banco,'' nro_dpf,tetrnglos glosa from tetrn where tetrnidqr is not null and (tetrnimpo*-1)<= 0 and tetrnnvia in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select 'Cobro Simple QR' as Operacion,catrn.catrnfpro fecha, 'Cobro QR' as detalle, catrn.catrnimpo*-1 monto, (case when catrn.catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrn.catrnhora hora,catrn.catrnntra nro_transaccion, (case when(select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg) is null then '' else (select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg) end) origen_destino,(case when (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg)is null then '' else (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) end) nro_cuenta_origen_destino,'' banco,'' nro_dpf,REPLACE(catrn.catrnglos,'QR.', '') glosa from catrn where SUBSTR(catrn.catrnglos, 1, 3) = 'QR.' and catrn.catrnpref = 3 and (catrn.catrnimpo*-1) > 0 and catrn.catrncorr = 3 and catrn.catrnncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select 'Pago Simple QR' as Operacion,catrn.catrnfpro fecha, 'Pago QR' as detalle, catrn.catrnimpo*-1 monto, (case when catrn.catrnimpo > 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,catrn.catrnhora hora,catrn.catrnntra nro_transaccion, (case when (select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg) is null then '' else (select gbagenomb from catrn catrn_, camca, gbage   where catrn_.catrnncta = camcancta and camcacage = gbagecage and catrn_.catrnntra = catrn.catrntorg) end) origen_destino,(case when(select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) is null then '' else (select  catrn_.catrnncta from catrn catrn_ where catrn_.catrnntra = catrn.catrntorg) end)nro_cuenta_origen_destino,'' banco,'' nro_dpf,REPLACE(catrn.catrnglos,'QR.', '') glosa  from catrn where SUBSTR(catrn.catrnglos, 1, 3) = 'QR.' and catrn.catrnpref = 3 and (catrn.catrnimpo*-1) < 0 and catrn.catrncorr = 3 and catrn.catrnncta in (select camcancta from camca where camcastat = 1 and camcacage = ${codigoCliente})
          union select  'Cuando el DPF vence y hay instruccion de liquidacion' as Operacion,pftcnftra fecha, 'Liquidacion de DPF (Capital)' as detalle, pftcnimpi monto, (case when pftcnimpi < 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,pftcnhora hora,pftcnntra nro_transaccion, '' origen_destino,'' nro_cuenta_origen_destino, '' banco,''||pfmdpndep nro_dpf,pftcndesc glosa from pftcn, pfmdp  where  pfmdpndep=pftcnndep and  pftcnttrn = 2 and pftcnitem = 1 and pftcnpref = 3 and  pftcnndep in ((select pfmdpndep  from pfmdp where pfmdpctaa in (select camcancta  from camca where  camcacage = ${codigoCliente})))
          union select  'Cuando el DPF vence y hay instruccion de liquidacion' as Operacion,pftcnftra fecha, 'Liquidacion de DPF (Interes)' as detalle, pftcnimpi monto, (case when pftcnimpi < 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,pftcnhora hora,pftcnntra nro_transaccion, '' origen_destino,'' nro_cuenta_origen_destino, '' banco,''||pfmdpndep nro_dpf,pftcndesc glosa from pftcn, pfmdp  where  pfmdpndep=pftcnndep  and  pftcnttrn = 2 and pftcnitem = 2 and pftcnpref = 3 and  pftcnndep in ((select pfmdpndep  from pfmdp where pfmdpctaa in (select camcancta  from camca where  camcacage = ${codigoCliente})))
          union select  'Cuando el DPF vence y hay instruccion de liquidacion' as Operacion,pftcnftra fecha, 'Liquidacion de DPF (Impuesto)' as detalle, pftcnimpi monto, (case when pftcnimpi < 0 then 'Retiro' else 'Deposito' end ) tipo_operacion,pftcnhora hora,pftcnntra nro_transaccion, '' origen_destino,'' nro_cuenta_origen_destino, '' banco,''||pfmdpndep nro_dpf,pftcndesc glosa from pftcn, pfmdp  where  pfmdpndep=pftcnndep and pftcnttrn = 2 and pftcnitem = 4 and pftcnpref = 26 and  pftcnndep in ((select pfmdpndep  from pfmdp where pfmdpctaa in (select camcancta  from camca where  camcacage = ${codigoCliente})))
          ) order by 2 desc, 6 desc`
      ]
    }
    const resSQL2 = await postInformix(sql2)
    resFinal = resSQL2.data[0].data.length > 0 ? resSQL2.data[0].data : []
  }

  return resFinal
}
