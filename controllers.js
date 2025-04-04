import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
// const SERVICE_URL = process.env.SERVICE_URL;
const SERVICE_URL = 'http://x.x.x.x/wsDockOne/api';
export const healthcheck = (req, res) => {
    try {
        res.status(200).json('Conectado....');
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const token = async (req, res) => {
    try {
        const cred = req.headers['credenciales'];
        let data = req.body;
        console.log(req.body);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/Login',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred
            },
            data: data
        };
        // const response = await axios.get('https://api.covidtracking.com/v1/us/current.json');
        // res.status(200).json(response.data);
        let response = await axios.request(config);
        res.status(200).json(response.data);
    } catch (error) {
       if (error.code === 'ECONNABORTED') {
            res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
        } else {
            res.status(422).json({ message: error.message });
            // res.status(500).json({ error: 'Error en la solicitud POST.' + error.message });
        }
    }
};
export const consultarTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/ConsultarTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth

            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const consultarMovimientosTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/ConsultarMovimientosTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const asignarNIP = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/AsignarNIP',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const reasignarTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/ReasignarTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const activarTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/ActivarTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const actualizarDatosClienteOnb = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/ActualizarDatosClienteOnb',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const desbloquearTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/DesbloquearTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const bloquearTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/BloquearTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
export const fondearTarjeta = async (req, res) => {
    try {
        console.log(req.rawHeaders);
        const cred = req.headers['credenciales'];
        const Auth = req.headers['authorization'];
        let data = req.body;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: SERVICE_URL + '/FondearTarjeta',
            headers: {
                'Content-Type': 'application/json',
                'Credenciales': cred,
                'Authorization': Auth
            },
            data: data
        };
        let response = await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED') {
                    // Manejar la excepción por timeout
                    res.status(408).json({ error: 'Tiempo de espera agotado en la solicitud POST.' });
                } else {
                    // Manejar otras excepciones
                    res.status(500).json({ error: 'Error en la solicitud POST.' });
                }
            });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
};
