import { z } from 'zod'

export const PostTraerVersionCajaSchema = z.object({
  body: z
    .object({
      metodo: z.literal('traerVersionMaestroCajaAhorro'),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' })
    })
    .strict()
})

export type TraerVersionCajaSchemaType = z.infer<typeof PostTraerVersionCajaSchema>['body']
