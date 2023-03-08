import { z } from 'zod'

export const PostGuardarMaestroCajaSchema = z.object({
  body: z
    .object({
      metodo: z.string(),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      codigoCliente: z.string(),
      idDepartamento: z.string(),
      tipoCuenta: z.string(),
      codigoMoneda: z.string(),
      codigoManejo: z.string(),
      codigoFirma_1: z.string(),
      claseFirma_1: z.string(),
      codigoFirma_2: z.string(),
      claseFirma_2: z.string(),
      codigoFirma_3: z.string(),
      claseFirma_3: z.string(),
      codigoFirma_4: z.string(),
      claseFirma_4: z.string(),
      codigoFirma_5: z.string(),
      claseFirma_5: z.string(),
      codigoFirma_6: z.string(),
      claseFirma_6: z.string(),
      codigoFirma_7: z.string(),
      claseFirma_7: z.string(),
      codigoFirma_8: z.string(),
      claseFirma_8: z.string(),
      codigoFirma_9: z.string(),
      claseFirma_9: z.string(),
      codigoFirma_10: z.string(),
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
      codigoOficialCredito: z.string(),
      codigoMotivoApertura: z.string()
    })
    .strict()
})

export type GuardarMaestroCajaSchemaType = z.infer<typeof PostGuardarMaestroCajaSchema>['body']
