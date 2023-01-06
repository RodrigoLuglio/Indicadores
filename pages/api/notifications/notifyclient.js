import axios from "axios";

export default async function handler(req, res) {

    // const { to, subject, html } = req.body;

    const API = process.env.STRAPI_URL + '/api';
    const URI = '/email';

    await axios
        .post(API + URI, {
            to: "iurynadin@gmail.com",
            subject: "teste de subject",
            html: "<h1>Teste direto do handler da API!</h1><p>hfdsafg dsyaof</p>",
        })
        .then(function (response) {
            console.log('response from notifyclient', response)
            res.status(200).json({ resposta: response });
        })
        .catch(function (error) {
            // console.log('error from notifyclient', error)
            console.log('## ERROR:', error.response.data.error)
            res.status(200).json({ erro: error });
        });

    
}