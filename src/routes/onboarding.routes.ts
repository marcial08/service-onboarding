import { Router } from 'express'
import { schemaValition } from '../middlewares/schemaValidator.middleware'
import { inicioSesion } from '../controllers/inicio-sesion.controller'
import { taerVersion } from '../controllers/traer-version.controller'
import { consultarAgenda } from '../controllers/consulta-agenda.controller'
import { buscarCliente } from '../controllers/buscar-cliente.controller'
import { hello } from '../controllers/hello-world.controller'
import { PostInicioSesionSchema } from '../schemas/inicio-sesion.schema'
import { PostTraerVersionSchema } from '../schemas/traer-version.schema'
import { eliminarAgenda } from '../controllers/eliminar-agenda.controller'
import { PostEliminarAgendaSchema } from '../schemas/eliminar-agenda.schema'
import { PostRegistroAgendaSchema } from '../schemas/registro-agenda.schema'
import { registroAgendaCompleto } from '../controllers/registro-agenda.controller'
import { PostGuardarAgendaSchema } from '../schemas/guardar-agenda.schema'
import { guardarAgenda } from '../controllers/guardar-agenda.controller'
import { modificarAgenda } from '../controllers/modificar-agenda.controller'
import { PostModificarAgendaSchema } from '../schemas/modificar-agenda.schema'
import { PostConsultarAgendaSchema } from '../schemas/consultar-agenda.schema'
import { PostBuscarClienteSchema } from '../schemas/buscar-cliente.schema'
import { PostTraerVersionCajaSchema } from '../schemas/traer-maestro-caja.schema'
import { taerVersionCaja } from '../controllers/traer-version-caja.controller'

const router = Router()

router.post('/hello', hello)

router.post('/inicio_sesion', schemaValition(PostInicioSesionSchema), inicioSesion)
router.post('/traer_version', schemaValition(PostTraerVersionSchema), taerVersion)
router.post('/guardar_agenda', schemaValition(PostGuardarAgendaSchema), guardarAgenda)
router.post('/modificar_agenda', schemaValition(PostModificarAgendaSchema), modificarAgenda)
router.post('/eliminar_agenda', schemaValition(PostEliminarAgendaSchema), eliminarAgenda)
router.post('/consultar_agenda', schemaValition(PostConsultarAgendaSchema), consultarAgenda)
router.post('/registro_agenda_completo', schemaValition(PostRegistroAgendaSchema), registroAgendaCompleto)
router.post('/busqueda_cliente', schemaValition(PostBuscarClienteSchema), buscarCliente)
router.post('/traer_maestro_c_ahorro', schemaValition(PostTraerVersionCajaSchema), taerVersionCaja)
router.post('/consultar_maestro_cahorro')
router.post('/guardar_maestro_caja')
router.post('/imprimir_registro_ahorro')
router.post('/revertir_caja_ahorro')
router.post('/')
router.post('/')

export default router
