import { z } from 'zod'

export const PostInicioSesionSchema = z.object({
  body: z
    .object({
      metodo: z.literal('IniciarSession', { invalid_type_error: 'Error de dato' }),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      Clave: z.string().min(5, { message: 'Debe tener 5 o más caracteres' }),
      IDispositivo: z.number()
    })
    .strict()
})

export type InicioSesionSchemaType = z.infer<typeof PostInicioSesionSchema>['body']
