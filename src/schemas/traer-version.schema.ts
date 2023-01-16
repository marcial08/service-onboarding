import { z } from 'zod'

export const PostTraerVersionSchema = z.object({
  body: z
    .object({
      metodo: z.literal('traerVersion'),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' })
    })
    .strict()
})

export type TraerVersionSchemaType = z.infer<typeof PostTraerVersionSchema>['body']
