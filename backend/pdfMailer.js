
import express from 'express';
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';


export const createdPDF = async (chartData) => {
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
    
}


