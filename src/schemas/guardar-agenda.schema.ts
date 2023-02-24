import { z } from 'zod'

export const PostGuardarAgendaSchema = z.object({
  body: z
    .object({
      metodo: z.literal('guardarAgenda', { invalid_type_error: 'Error de dato' }),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      TipoCliente: z.null(),
      PrimerNombre: z.string(),
      SegundoNombre: z.null(),
      PrimerApe: z.string(),
      SegundoApe: z.string(),
      TercerApe: z.string(),
      Genero: z.number(),
      FechaNac: z.string(),
      Nacionalidad: z.null(),
      Profesion: z.null(),
      NivelEdu: z.null(),
      TipoDoc: z.null(),
      NroDoc: z.string(),
      Complemento: z.string(),
      NacOrigen: z.string(),
      NroRuc: z.null(),
      FechaVenc: z.string(),
      FechaVencRuc: z.null(),
      CodCiiu: z.null(),
      Categoria: z.null(),
      TelfDom: z.string(),
      TelfOfi: z.null(),
      TelfCasilla: z.null(),
      DirDomicilio: z.string(),
      Tipo: z.null(),
      Ciudad: z.number(),
      Correspondencia: z.string(),
      NroCasilla: z.null(),
      Email: z.string(),
      EstCivil: z.number(),
      NombreCompleto: z.string(),
      NroNit: z.null(),
      VencNit: z.null(),
      FechaConstitucion: z.null(),
      CodRubro: z.null(),
      CodSector: z.null(),
      Actividad: z.null(),
      AdicionalNac: z.null(),
      NacDesc: z.null(),
      FormaLlegada: z.null(),
      RepLegal: z.null(),
      RepLegalDesc: z.null()
    })
    .strict()
})

export type GuardarAgendaSchemaType = z.infer<typeof PostGuardarAgendaSchema>['body']
