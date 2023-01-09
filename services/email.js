import axios from "axios";

// const API = 'https://api.rlabs.com.br'
const API = 'http://localhost:3000/api';

const URI = '/notifications/';

export async function notifyClientRegister(values) {

    console.log('notifyClientRegister values:', values);

    await axios
        .post(API + URI + 'notifyclient', {
            // to: values.email,
            to: "iurynadin@gmail.com",
            subject: "Registro de Cliente",
            useremail: values.email,
            password: values.password,
            nome: values.nome,
        })
        .then(function (response) {
            console.log('response from notifyClientRegister', response)
            return response
        })
        .catch(function (error) {
            console.log('error from notifyClientRegister', error)
            return error
        });

}