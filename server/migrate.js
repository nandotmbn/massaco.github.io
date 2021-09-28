const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const http = require('http').createServer(app);
const WebSocket = require('./middlewares/web-socket');
const Startup = require('./middlewares/startup');
const fetch = require('node-fetch');
const { validateHospital, Hospital } = require('./models/hospital');
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});


Startup(app);
WebSocket(io);
app.set('socketIo', io);
app.disable('etag');

async function getData() {
    const isExist = await Hospital.find();
    if(!isExist) return res.status(400).send({error: "No hospital"})

    isExist.forEach(async data => {
        // const bodyRegister = {
        //     nama: data.nama,
        //     lokasi: data.lokasi,
        //     latitude: data.latitude,
        //     longitude: data.longitude,
        //     website: data.website,
        //     telp: data.telp,
        //     id: data.id,
        //     picture: data.picture
        // }
        // await fetch('https://mas-saco.herokuapp.com/api/auth/hospital/register', {
        //     method: 'post',
        //     body: JSON.stringify(bodyRegister),
        //     headers: {'Content-Type': 'application/json'}
        // });
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const random = getRandomInt(50, 100);

        const bodyUpdate = {
            keramaian: data.keramaian,
            pcr: data.pcr,
            antigen: data.antigen,
            kapasitas: random,
            tanggal: data.tanggal,
            waktu: data.waktu
        }
        await fetch(`https://mas-saco.herokuapp.com/api/update/hospital/${data.id}`, {
            method: 'put',
            body: JSON.stringify(bodyUpdate),
            headers: {'Content-Type': 'application/json'}
        });
    })
}

getData();


const PORT = process.env.PORT || 8888;
http.listen(PORT, () => console.log(`App now is listening on port ${PORT}`))