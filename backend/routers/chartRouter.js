import expressAsyncHandler from "express-async-handler";
import Chart from "../models/chartModel.js";
import express from 'express';
import { isAuth } from "../misc.js";
import foodRouter from "./foodRouter.js";
import { createdPDF } from "../pdfMailer.js";


const chartRouter = express.Router()

chartRouter.post('/createChart', isAuth, expressAsyncHandler(async (req, res) => {

createdPDF(req.body)    


next()

}))

app.get('/createChart', (req, res) => {
    
    // Set up email data with unicode symbols
    const mailOptions = {
        from: 'mmislam272@gmail.com',
        to: req.body.emailTo,
        subject: 'Diet chart from Lose to Gain.',
        text: `Hello ${req.body.name},
        Thank you for choosing Loose to Gain. Here is the PDF generated from the diet chart yu created. 
        .`,
        attachments: [{
            filename: 'dynamic_pdf.pdf',
            content: buffer
        }]
    };

    // Send email

    const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.nodemailerEmail,
        pass: process.env.nodemailerPassword
    }
    });
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });

    
});


export default chartRouter