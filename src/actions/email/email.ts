'use server'

import nodemailer from 'nodemailer'

interface Props {
    email: string;
    message: string;
    subject: string;
}

export const SendEmail = async ({ email, message, subject }: Props) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 456,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
            user: 'n2107676@gmail.com',
            pass: 'zeig rfox debb bsvj'
        }
    });

    var mailOptions = {
        from: email,
        to: email,
        cc: email,
        subject: subject,
        html: `<h1>Hola</h1><h2>T${message}</h2>`
    };
    try {

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return true

    } catch (error) {
        return false
    }
}

