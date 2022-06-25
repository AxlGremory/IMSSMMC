import { Router } from "express";
import Equipo from "../models/Equipo"
import path from 'path'
import fs from 'fs'

const router = Router();

router.get('/', async (req,res) => {
    const equipos = await Equipo.find();
    res.render('menu', {equipos});
});

router.get('/Informacion/:id', async (req, res) => {
    res.send("informacion del equipo")

});

router.get('/Reportes', async (req, res) => {
    res.send("despliega los reportes de equipos")

});

router.get('/Reparacion', async (req, res) => {
    res.send("despliega los equipos en reparacion")
});

router.get('/Baja', async (req, res) => {
    res.send("despliega los equipos que piensas dar de baja")
});


export default router;