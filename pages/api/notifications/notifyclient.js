import nodemailer from "nodemailer";
const hbs = require('nodemailer-handlebars')
import { hbsConfig, gmailTransporter } from "../../../services/utils";

export default async function handler(req, res) {
    let transporter = nodemailer.createTransport( gmailTransporter );
    transporter.use('compile', hbs (hbsConfig))

    const { to, subject, password, useremail, nome } = req.body;

    const mailOptions = {
        from: `Presence Indicadores<presenceindicadores@gmail.com>`,
        to: 'iurynadin@gmail.com',
        replyTo: `presenceindicadores@gmail.com`,
        subject,
        template: 'registerClient',
        context: {
            subject,
            password,
            useremail,
            nome
        },
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('error is ' + err)
            res.status(500).json({ err })
        }
        res.status(200).json({ data, success: true })
        return data;
    })
}