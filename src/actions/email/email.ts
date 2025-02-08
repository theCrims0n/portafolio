'use server'
import { SMTPClient } from 'emailjs';

interface Props {
    email: string;
    message: string;
    subject: string;
}

export const SendEmail = async ({ email, message, subject }: Props) => {

    const client = new SMTPClient({
        user: 'n2107676@gmail.com',
        password: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    const mailOptions = {
        from: `<${email}>`,
        cc: `<${email}>`,
        to: 'mi.salomon89@gmail.com',
        subject: subject,
        text: message
    };

    try {
        client.send(
            mailOptions,
            (err, message) => {
                console.log(err || message);
            }
        );

    } catch (error) {
    }



}

