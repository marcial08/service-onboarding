import { z } from 'zod'

export const PostRevertirCajaSchema = z.object({
  body: z
    .object({
      metodo: z.literal('revertirCajaAhorro'),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      nroCajaAhorro: z.string()
    })
    .strict()
})

export type RevertirCajaSchemaType = z.infer<typeof PostRevertirCajaSchema>['body']
