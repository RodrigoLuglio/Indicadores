import axios from "axios";
import { getSession } from "next-auth/react";

const API = 'https://api.rlabs.com.br/api/email/';

export default async function handler(req, res) {

    const { to, subject, html } = req.body;
    const session = await getSession({ req });

    // res.status(200).json({ 
    //     session: session,
    //     jwt: session.jwt,
    //     to,
    //     subject,
    //     html
    // });

    await axios
        .post(API, {
            to,
            subject,
            html,
        },{
            headers: {
                Authorization: `Bearer ${session.jwt}`,
            }
        },)
        .then(function (response) {
            console.log('response from notifyclient', response)
            res.status(200).json({ resposta: response });
            return response;
        })
        .catch(function (error) {
            // console.log('error from notifyclient', error)
            // console.log('## ERROR:', error.response.data.error)
            res.status(200).json({ erro: error });
        });

    
}