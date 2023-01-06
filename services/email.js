import axios from "axios";

const ENVIRONMENT = (process.env.NODE_ENV == 'development')
        ? process.env.NEXTAUTH_URL
        : process.env.STRAPI_URL;
const API = ENVIRONMENT + '/api';
const URI = 'notifications/';

export async function notifyClientRegister() {

    // await axios
    //     .post(API + URI + 'notifyclient', {
    //         to: "iurynadin@gmail.com",
    //         subject: "teste de subject",
    //         html: "<h1>Welcome!</h1><p>This is a test HTML email.</p>",
    //     })
    //     .then(function (response) {
    //         console.log('response from notifyClientRegister', response)
    //         return response
    //     })
    //     .catch(function (error) {
    //         console.log('error from notifyClientRegister', error)
    //         return error
    //     });

}