import { z } from 'zod'

export const PostTraerMaestroCajaSchema = z.object({
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

export type TraerMaestroCajaSchemaType = z.infer<typeof PostTraerMaestroCajaSchema>['body']
