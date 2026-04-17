const nodemailer = require('nodemailer')

function createTransporter() {
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  return nodemailer.createTransport({ jsonTransport: true })
}

async function sendContactNotification(submission) {
  const transporter = createTransporter()
  const toAddress = process.env.CONTACT_NOTIFICATION_TO || process.env.SMTP_USER

  if (!toAddress) {
    return { skipped: true }
  }

  return transporter.sendMail({
    from: process.env.CONTACT_NOTIFICATION_FROM || 'makjuz@example.com',
    to: toAddress,
    subject: `Makjuz contact enquiry: ${submission.subject}`,
    text: `Name: ${submission.name}\nEmail: ${submission.email}\n\n${submission.message}`,
  })
}

module.exports = { sendContactNotification }
