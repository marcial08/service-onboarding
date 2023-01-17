import { z } from 'zod'

export const PostConsultaMaestroCajaSchema = z.object({
  body: z
    .object({
      metodo: z.literal('consultarMaestroCajaAhorro'),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      nroCajaAhorro: z.string()
    })
    .strict()
})

export type ConsultaMaestroCajaSchemaType = z.infer<typeof PostConsultaMaestroCajaSchema>['body']
