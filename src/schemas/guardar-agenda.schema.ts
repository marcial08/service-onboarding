import { z } from 'zod'

export const PostGuardarAgendaSchema = z.object({
  body: z
    .object({
      metodo: z.string(),
      Usuario: z.string(),
      TipoCliente: z.string(),
      PrimerNombre: z.string(),
      SegundoNombre: z.string(),
      PrimerApe: z.string(),
      SegundoApe: z.string(),
      TercerApe: z.string(),
      Genero: z.string(),
      FechaNac: z.string(),
      Nacionalidad: z.string(),
      Profesion: z.string(),
      NivelEdu: z.string(),
      TipoDoc: z.string(),
      NroDoc: z.string(),
      Complemento: z.string(),
      NacOrigen: z.string(),
      NroRuc: z.string(),
      FechaVenc: z.string(),
      FechaVencRuc: z.string(),
      CodCiiu: z.string(),
      Categoria: z.string(),
      TelfDom: z.string(),
      TelfOfi: z.string(),
      TelfCasilla: z.string(),
      DirDomicilio: z.string(),
      Tipo: z.string(),
      Ciudad: z.string(),
      Correspondencia: z.string(),
      NroCasilla: z.string(),
      Email: z.string(),
      EstCivil: z.string(),
      NombreCompleto: z.string(),
      NroNit: z.string(),
      VencNit: z.string(),
      FechaConstitucion: z.string(),
      CodRubro: z.string(),
      CodSector: z.string(),
      Actividad: z.string(),
      AdicionalNac: z.string(),
      NacDesc: z.string(),
      FormaLlegada: z.string(),
      RepLegal: z.string(),
      RepLegalDesc: z.string(),
      Referencia: z.string(),
      ContactoRefencia: z.string()
    })
    .strict()
})

export type GuardarAgendaSchemaType = z.infer<typeof PostGuardarAgendaSchema>['body']
