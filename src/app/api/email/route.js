import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request) {
    const { email, name, phone, company, message } = await request.json()


    const transporter = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },

    });

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: `Message: ${message}, Company: ${company}, Phone: ${phone}`,
    };

    const sendMailPromise = () => new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err) => {
            if (!err) {
                resolve('Email Sent');
            } else {
                reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({message: 'Email sent'});
    } catch(err) {
        console.log(err)
        return NextResponse.json({ error: err }, { status: 500 });
    }

}