import { z } from 'zod'

export const PostDetalleTranSchema = z.object({
  body: z
    .object({
      codigoCliente: z.string(),
      fechaInicio: z.string(),
      fechaFinal: z.string()
    })
    .strict()
})

export type DetalleTranSchemaType = z.infer<typeof PostDetalleTranSchema>['body']
