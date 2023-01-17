import { z } from 'zod'

export const PostGuardarMaestroCajaSchema = z.object({
  body: z
    .object({
      metodo: z.literal('guardarMaestroCajaAhorro'),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      codigoCliente: z.number(),
      tipoCuenta: z.number(),
      codigoMoneda: z.number(),
      codigoManejo: z.number(),
      codigoFirma_1: z.number(),
      claseFirma_1: z.string(),
      codigoFirma_2: z.number(),
      claseFirma_2: z.string(),
      codigoFirma_3: z.number(),
      claseFirma_3: z.string(),
      codigoFirma_4: z.number(),
      claseFirma_4: z.string(),
      codigoFirma_5: z.number(),
      claseFirma_5: z.string(),
      codigoFirma_6: z.number(),
      claseFirma_6: z.string(),
      codigoFirma_7: z.number(),
      claseFirma_7: z.string(),
      codigoFirma_8: z.number(),
      claseFirma_8: z.string(),
      codigoFirma_9: z.number(),
      claseFirma_9: z.string(),
      codigoFirma_10: z.number(),
      claseFirma_10: z.string(),
      marcaRetencionIVA: z.string(),
      instructivo: z.string(),
      codigoAgencia: z.string(),
      codigoUso: z.string(),
      codigoTitulares_1: z.string(),
      codigoTitulares_2: z.string(),
      codigoTitulares_3: z.string(),
      codigoTitulares_4: z.string(),
      codigoTitulares_5: z.string(),
      codigoTitulares_6: z.string(),
      codigoTitulares_7: z.string(),
      codigoTitulares_8: z.string(),
      codigoTitulares_9: z.string(),
      codigoTitulares_10: z.string(),
      codigoOficialCredito: z.number(),
      codigoMotivoApertura: z.number()
    })
    .strict()
})

export type GuardarMaestroCajaSchemaType = z.infer<typeof PostGuardarMaestroCajaSchema>['body']
