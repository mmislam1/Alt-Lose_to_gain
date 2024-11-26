
import express from 'express';
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

<<<<<<< HEAD

=======
>>>>>>> c2956326da175d7fd50aa6035e0ae6842452e7ea


export const createdPDF = async (req, res, next) => {
    /* Create a new PDF document*/
    const doc = new PDFDocument();

    // Generate dynamic content
    const dynamicContent = "Hello, this is a dynamic PDF generated with PDFKit for lose to gain.";

    // Pipe PDF content to a buffer
    const buffer = await new Promise((resolve, reject) => {
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            resolve(Buffer.concat(buffers));
        });
        doc.fontSize(12).text(dynamicContent, 50, 50);
        doc.end();
    });
    next()
}

app.get('/pdf', (req, res) => {
    
    // Set up email data with unicode symbols
    const mailOptions = {
        from: 'mmislam272@gmail.com',
        to: req.emailTo,
        subject: 'Diet chart from Lose to Gain.',
        text: `Hello ${req.name},
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

