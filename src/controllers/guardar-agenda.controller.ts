import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix, postOnboarding } from '../api/onboarding.api'
import varDefault from '../util/variablesDefault'
import { registerIdpscl } from './registro-agenda.controller'
import { inicioSesion } from './inicio-sesion.controller'
import config from '../util/config'

// * Guardar Agenda
export const guardarAgenda = async (req: Request, res: Response) => {
  try {
    const responseLogin = await inicioSesion(res);
    const { inicioCorrecto, token } = responseLogin;
    if (inicioCorrecto) {
    req.body.token = token
    req.body.Usuario = config.USER_ONBOARDING
    let dataReq = constructorAgenda(req)
    let validaType = validarAgenda(dataReq)
    if (validaType.sw) {
      const response = await postOnboarding(dataReq.body, 'ENDPOINT_GUARDAR_AGENDA')
      await registerIdpscl(response)
      await updateDatosAdicionales(response.data.codcliente)
      return res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        status: messageUtil.STATUS_OK,
        data: response.data.data ? response.data.data : response.data
      })
    } else {
      return res.status(200).json({
        mensaje: validaType.message,
        status: messageUtil.STATUS_NOK,
        data: {}
      })
    }
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

const constructorAgenda = (req: any) => {
  req.body.TipoCliente = varDefault.TipoCliente
  req.body.SegundoNombre = varDefault.SegundoNombre
  req.body.Nacionalidad = varDefault.Nacionalidad
  req.body.NivelEdu = varDefault.NivelEdu
  req.body.TipoDoc = varDefault.TipoDoc
  req.body.NroRuc = varDefault.NroRuc
  req.body.FechaVencRuc = varDefault.FechaVencRuc
  req.body.CodCiiu = varDefault.CodCiiu
  req.body.Categoria = varDefault.Categoria
  req.body.TelfOfi = varDefault.TelfOfi
  req.body.TelfCasilla = varDefault.TelfCasilla
  req.body.Tipo = varDefault.Tipo
  req.body.Ciudad = varDefault.Ciudad
  req.body.Correspondencia = varDefault.Correspondencia
  req.body.NroCasilla = varDefault.NroCasilla
  req.body.NroNit = varDefault.NroNit
  req.body.VencNit = varDefault.VencNit
  req.body.FechaConstitucion = varDefault.FechaConstitucion
  req.body.CodRubro = varDefault.CodRubro
  req.body.CodSector = varDefault.CodSector
  req.body.Actividad = varDefault.Actividad
  req.body.AdicionalNac = varDefault.AdicionalNac
  req.body.NacDesc = varDefault.NacDesc
  req.body.FormaLlegada = varDefault.FormaLlegada
  req.body.RepLegal = varDefault.RepLegal
  req.body.RepLegalDesc = varDefault.RepLegalDesc
  return req
}

const validarAgenda = (req: any) => {
  const {
    PrimerNombre,
    PrimerApe,
    Genero,
    FechaNac,
    Profesion,
    NroDoc,
    FechaVenc,
    TelfDom,
    DirDomicilio,
    Email,
    EstCivil,
    NombreCompleto,
   // Referencia,  ContactoRefencia
  } = req.body

  let sw = true
  let message = 'El/los campo(s)'

  if (PrimerNombre === '') {
    message += ', PrimerNombre'
    sw = false
  }
  if (PrimerApe === '') {
    message += ', PrimerApe'
    sw = false
  }
  if (Genero === '') {
    message += ', Genero'
    sw = false
  }
  if (FechaNac === '') {
    message += ', FechaNac'
    sw = false
  }
  if (Profesion === '') {
    message += ', Profesion'
    sw = false
  }
  if (NroDoc === '') {
    message += ', NroDoc'
    sw = false
  }
  if (FechaVenc === '') {
    message += ', FechaVenc'
    sw = false
  }
  if (TelfDom === '') {
    message += ', TelfDom'
    sw = false
  }
  if (DirDomicilio === '') {
    message += ', DirDomicilio'
    sw = false
  }
  if (Email === '') {
    message += ', Email'
    sw = false
  }
  if (EstCivil === '') {
    message += ', EstCivil'
    sw = false
  }
  if (NombreCompleto === '') {
    message += ', NombreCompleto'
    sw = false
  }
  // if (Referencia === '') {
  //   message += ', Referencia'
  //   sw = false
  // }
  // if (ContactoRefencia === '') {
  //   message += ', ContactoRefencia'
  //   sw = false
  // }
  message += ' son requerido(s).'
  return {
    sw,
    message
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
    console.log('datos de token ', sql1);
    await postInformix(sql1)
  }
}
