
import express from 'express';
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit'; 
import { createWriteStream } from 'fs';


export const createPDF = async (chartData,totalData) => {
   
const doc = new PDFDocument();

  // Pipe the PDF to a file
  doc.pipe(createWriteStream('table.pdf'));

  // Add some metadata
  doc.info.Title = 'PDF Table Example';

  // Add a title
  doc.fontSize(18).text('Table of chartData', { align: 'center' }).moveDown(1);


  // Table configuration
  const tableTop = 100; // Y-coordinate for the table's start
  const columnWidths = [150, 250, 100]; // Column widths for Name, Description, Price
  const rowHeight = 30; // Row height
  const tableLeft = 50; // X-coordinate for the table's left edge

  // Draw table header
  const drawTableRow = (y, row) => {
    doc
      .fontSize(12)
      .text(row[0], tableLeft, y, { width: columnWidths[0], align: 'left' })
      .text(row[1], tableLeft + columnWidths[0], y, { width: columnWidths[1], align: 'left' })
      .text(row[2], tableLeft + columnWidths[0] + columnWidths[1], y, { width: columnWidths[2], align: 'right' });
  };

  const drawTableBorders = (y, rowIndex) => {
    const isHeader = rowIndex === -1;
    const topLineY = isHeader ? y : y - rowHeight + 2;
    const bottomLineY = y + rowHeight - 2;

    // Draw top border
    doc.moveTo(tableLeft, topLineY).lineTo(tableLeft + columnWidths.reduce((a, b) => a + b, 0), topLineY).stroke();
    if (!isHeader) {
      // Draw bottom border for each row
      doc.moveTo(tableLeft, bottomLineY).lineTo(tableLeft + columnWidths.reduce((a, b) => a + b, 0), bottomLineY).stroke();
    }
  };

  // Draw header row
  drawTableRow(tableTop, ['Item', 'Amount', 'Calorie']);
  drawTableBorders(tableTop, -1);

  // Draw each item row
  chartData.forEach((item, i) => {
    const y = tableTop + rowHeight * (i + 1);
    drawTableRow(y, [item.item, item.amount, item.calorie]);
    drawTableBorders(y, i);
  });

  // Finalize the PDF and save it
  doc.end();
}


