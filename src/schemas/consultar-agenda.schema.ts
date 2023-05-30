import { z } from 'zod'

export const PostConsultarAgendaSchema = z.object({
  body: z
    .object({
      metodo: z.string(),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      NroDocumento: z.string()
    })
    .strict()
})

export type ConsultarAgendaSchemaType = z.infer<typeof PostConsultarAgendaSchema>['body']
