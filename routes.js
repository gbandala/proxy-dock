import { Router } from "express";
import {
    healthcheck,
    token,
    consultarTarjeta,
    consultarMovimientosTarjeta,
    asignarNIP,
    reasignarTarjeta,
    activarTarjeta,
    actualizarDatosClienteOnb,
    desbloquearTarjeta,
    bloquearTarjeta,
    fondearTarjeta    
} from './controllers.js';
const router = Router();
router.get('/', healthcheck);
router.post('/ConsultarTarjeta', consultarTarjeta);
router.post('/ConsultarMovimientosTarjeta', consultarMovimientosTarjeta);
router.post('/AsignarNIP', asignarNIP);
router.post('/ReasignarTarjeta', reasignarTarjeta);
router.post('/ActivarTarjeta', activarTarjeta);
router.post('/ActualizarDatosClienteOnb', actualizarDatosClienteOnb);
router.post('/DesbloquearTarjeta', desbloquearTarjeta);
router.post('/BloquearTarjeta', bloquearTarjeta);
router.post('/FondearTarjeta', fondearTarjeta);
router.post('/Login', token);
export default router;