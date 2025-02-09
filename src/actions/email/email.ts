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


    try {

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        const mailData = {
            from: email,
            replyTo: email,
            to: "mi.salomon89@gmail.com",
            subject: subject,
            text: message,
            html: `<p>${message}<p>`,
        };

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        return true

    } catch (error) {
        return false
    }
}

