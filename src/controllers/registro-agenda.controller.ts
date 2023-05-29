import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postInformix, postOnboarding } from '../api/onboarding.api'
import config from '../util/config'
import { varDefaultRegistraAgenda } from '../util/variablesDefault'
import { inicioSesion } from './inicio-sesion.controller'

// * Registro agenda completo
export const registroAgendaCompleto = async (req: Request, res: Response) => {
  try {
    const responseLogin = await inicioSesion(res);
    const { inicioCorrecto, token } = responseLogin;
    if (inicioCorrecto) {
    req.body.token = token
    req.body.Usuario = process.env.USER_ONBOARDING
    let dataReq = constructorAgendaCompleto(req)
    let validaType = validarAgendaCompleto(dataReq)

    if (validaType.sw) {
      const response = await postOnboarding(req.body, 'ENDPOINT_REGISTRO_AGENDA_COMPLETO')

      await registerIdpscl(response)

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

const constructorAgendaCompleto = (req: any) => {
  req.body.token = process.env.TOKEN_ONBOARDING
  req.body.Usuario = process.env.USER_ONBOARDING
  req.body.TipoCliente = varDefaultRegistraAgenda.TipoCliente
  req.body.SegundoNombre = varDefaultRegistraAgenda.SegundoNombre
  req.body.Nacionalidad = varDefaultRegistraAgenda.Nacionalidad
  req.body.NivelEdu = varDefaultRegistraAgenda.NivelEdu
  req.body.TipoDoc = varDefaultRegistraAgenda.TipoDoc
  req.body.NroRuc = varDefaultRegistraAgenda.NroRuc
  req.body.FechaVencRuc = varDefaultRegistraAgenda.FechaVencRuc
  req.body.CodCiiu = varDefaultRegistraAgenda.CodCiiu
  req.body.Categoria = varDefaultRegistraAgenda.Categoria
  req.body.TelfOfi = varDefaultRegistraAgenda.TelfOfi
  req.body.TelfCasilla = varDefaultRegistraAgenda.TelfCasilla
  req.body.Tipo = varDefaultRegistraAgenda.Tipo
  req.body.Ciudad = varDefaultRegistraAgenda.Ciudad
  req.body.Correspondencia = varDefaultRegistraAgenda.Correspondencia
  req.body.NroCasilla = varDefaultRegistraAgenda.NroCasilla
  req.body.NroNit = varDefaultRegistraAgenda.NroNit
  req.body.VencNit = varDefaultRegistraAgenda.VencNit
  req.body.FechaConstitucion = varDefaultRegistraAgenda.FechaConstitucion
  req.body.CodRubro = varDefaultRegistraAgenda.CodRubro
  req.body.CodSector = varDefaultRegistraAgenda.CodSector
  req.body.Actividad = varDefaultRegistraAgenda.Actividad
  req.body.AdicionalNac = varDefaultRegistraAgenda.AdicionalNac
  req.body.NacDesc = varDefaultRegistraAgenda.NacDesc
  req.body.FormaLlegada = varDefaultRegistraAgenda.FormaLlegada
  req.body.RepLegal = varDefaultRegistraAgenda.RepLegal
  req.body.RepLegalDesc = varDefaultRegistraAgenda.RepLegalDesc

  req.body.NombreEmpresa = varDefaultRegistraAgenda.NombreEmpresa
  req.body.CodPlaza = varDefaultRegistraAgenda.CodPlaza
  req.body.CodAgencia = varDefaultRegistraAgenda.CodAgencia
  req.body.CodPais = varDefaultRegistraAgenda.CodPais
  req.body.CodProvincia = varDefaultRegistraAgenda.CodProvincia
  req.body.CodZona = varDefaultRegistraAgenda.CodZona
  req.body.CodDepartamento = varDefaultRegistraAgenda.CodDepartamento
  req.body.DireccionCalle = varDefaultRegistraAgenda.DireccionCalle
  req.body.NroDomicilio = varDefaultRegistraAgenda.NroDomicilio
  req.body.NroDepartamento = varDefaultRegistraAgenda.NroDepartamento
  req.body.DirReferencia = varDefaultRegistraAgenda.DirReferencia
  req.body.CodMunicipio = varDefaultRegistraAgenda.CodMunicipio
  req.body.UnidadGps = varDefaultRegistraAgenda.UnidadGps
  req.body.Longitud = varDefaultRegistraAgenda.Longitud
  req.body.Latitud = varDefaultRegistraAgenda.Latitud
  req.body.AmbitoGeografico = varDefaultRegistraAgenda.AmbitoGeografico
  req.body.Referencia = varDefaultRegistraAgenda.Referencia
  req.body.CodCiudad = varDefaultRegistraAgenda.CodCiudad
  req.body.Actividad1 = varDefaultRegistraAgenda.Actividad1
  req.body.Actividad2 = varDefaultRegistraAgenda.Actividad2
  req.body.FechaIng = varDefaultRegistraAgenda.FechaIng
  req.body.NroInt = varDefaultRegistraAgenda.NroInt
  req.body.TipoComplement = varDefaultRegistraAgenda.TipoComplement
  req.body.SectorEco = varDefaultRegistraAgenda.SectorEco
  req.body.TipoDir = varDefaultRegistraAgenda.TipoDir
  req.body.NroItem = varDefaultRegistraAgenda.NroItem
  req.body.CodPost = varDefaultRegistraAgenda.CodPost

  return req
}

const validarAgendaCompleto = (req: any) => {
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
    NombreCompleto
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
  message += ' son requerido(s).'
  return {
    sw,
    message
  }
}

export const registerIdpscl = async (response: any) => {
  const codClienteRes = response.data.codcliente ? response.data.codcliente : null

  if (codClienteRes) {
    let sql1 = {
      dataSql: [
        `insert into idpscl (codigo_agenda, sistema, fecha_registro) values (${codClienteRes}, 'B.MOVIL TECHREO', (select gbpmtfdia from gbpmt))`
      ]
    }
    await postInformix(sql1)
  }
}
