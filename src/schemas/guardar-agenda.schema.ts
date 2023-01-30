import { z } from 'zod'

export const PostGuardarAgendaSchema = z.object({
  body: z
    .object({
      metodo: z.literal('guardarAgenda', { invalid_type_error: 'Error de dato' }),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      TipoCliente: z.number(),
      PrimerNombre: z.string(),
      SegundoNombre: z.string(),
      PrimerApe: z.string(),
      SegundoApe: z.string(),
      TercerApe: z.string(),
      Genero: z.number(),
      FechaNac: z.string(),
      Nacionalidad: z.string(),
      Profesion: z.number(),
      NivelEdu: z.number(),
      TipoDoc: z.number(),
      NroDoc: z.string(),
      Complemento: z.string().max(2),
      NacOrigen: z.string().max(2),
      NroRuc: z.string(),
      FechaVenc: z.string(),
      FechaVencRuc: z.string(),
      CodCiiu: z.number(),
      Categoria: z.string(),
      TelfDom: z.string(),
      TelfOfi: z.string(),
      TelfCasilla: z.string(),
      DirDomicilio: z.string(),
      Tipo: z.number(),
      Ciudad: z.number(),
      Correspondencia: z.string(),
      NroCasilla: z.number(),
      Email: z.string(),
      EstCivil: z.number(),
      NombreCompleto: z.string(),
      NroNit: z.string(),
      VencNit: z.string(),
      FechaConstitucion: z.string(),
      CodRubro: z.number(),
      CodSector: z.number(),
      Actividad: z.number(),
      AdicionalNac: z.number(),
      NacDesc: z.string(),
      FormaLlegada: z.string(),
      RepLegal: z.number(),
      RepLegalDesc: z.string()
    })
    .strict()
})

export type GuardarAgendaSchemaType = z.infer<typeof PostGuardarAgendaSchema>['body']
