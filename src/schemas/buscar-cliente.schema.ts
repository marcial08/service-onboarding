import { z } from 'zod'

export const PostBuscarClienteSchema = z.object({
  body: z
    .object({
      metodo: z.literal('buscarCliente'),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      CodCliente: z.number()
    })
    .strict()
})

export type BuscarClienteSchemaType = z.infer<typeof PostBuscarClienteSchema>['body']
