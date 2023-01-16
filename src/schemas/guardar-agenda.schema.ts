import { z } from 'zod'

export const PostInicioSesionSchema = z.object({
  body: z
    .object({
      metodo: z.literal('IniciarSession', { invalid_type_error: 'Error de dato' }),
      // token: z.string(),
      Usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      TipoCliente: z.number(),
      PrimerNombre: z.string(),
      SegundoNombre: z.string(),
      PrimerApe: z.string(),
      SegundoApe: z.string(),
      TercerApe: z.string(),
      Genero: z.number(),
      FechaNac: z.string().regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      }),
      Nacionalidad: z.string(),
      Profesion: z.number(),
      NivelEdu: z.number(),
      TipoDoc: z.number(),
      NroDoc: z.string(),
      Complemento: z.string().max(3, { message: 'Debe tener menos de 3 caracteres' }),
      NacOrigen: z.string(),
      NroRuc: z.string(),
      FechaVenc: z.string().regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      }),
      FechaVencRuc: z.string().regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      }),
      CodCiiu: z.number(),
      Categoria: z.string(),
      TelfDom: z.string(),
      TelfOfi: z.string(),
      TelfCasilla: z.string(),
      DirDomicilio: z.string(),
      Tipo: z.number(),
      Ciudad: z.number(),
      Correspondencia: z.string(),
      NroCasilla: z.number(),
      Email: z.string(),
      EstCivil: z.number(),
      NombreCompleto: z.string(),
      NroNit: z.string(),
      VencNit: z.string().regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      }),
      FechaConstitucion: z.string().regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      }),
      CodRubro: z.number(),
      CodSector: z.number(),
      Actividad: z.number(),
      AdicionalNac: z.number(),
      NacDesc: z.string(),
      FormaLlegada: z.string(),
      RepLegal: z.string(),
      RepLegalDesc: z.string(),
      NombreEmpresa: z.string(),
      CodPlaza: z.number(),
      CodAgencia: z.number(),
      CodPais: z.number(),
      CodProvincia: z.number(),
      CodZona: z.number(),
      CodDepartamento: z.number(),
      DireccionCalle: z.string(),
      NroDomicilio: z.string(),
      NroDepartamento: z.string(),
      DirReferencia: z.string(),
      CodMunicipio: z.number(),
      UnidadGps: z.number(),
      Longitud: z.number(),
      Latitud: z.number(),
      AmbitoGeografico: z.number(),
      Referencia: z.string(),
      CodCiudad: z.number(),
      Actividad1: z.string(),
      Actividad2: z.string(),
      FechaIng: z.string(),
      NroInt: z.string(),
      TipoComplement: z.string(),
      SectorEco: z.string(),
      TipoDir: z.number(),
      NroItem: z.string(),
      CodPost: z.string()
    })
    .strict()
})

export type InicioSesionSchemaType = z.infer<typeof PostInicioSesionSchema>['body']
