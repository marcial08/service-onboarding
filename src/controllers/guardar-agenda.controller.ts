import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postOnboarding } from '../api/onboarding.api'
import varDefault from '../util/variablesDefault'

// * Guardar Agenda
export const guardarAgenda = async (req: Request, res: Response) => {
  try {
    req.body.token = process.env.TOKEN_ONBOARDING
    req.body.Usuario = process.env.USER_ONBOARDING

    let dataReq = constructorAgenda(req)
    const response = await postOnboarding(dataReq.body, 'ENDPOINT_GUARDAR_AGENDA')
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

const constructorAgenda = (req: any) => {
  req.body.token = process.env.TOKEN_ONBOARDING
  req.body.Usuario = process.env.USER_ONBOARDING
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
