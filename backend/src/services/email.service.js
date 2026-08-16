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
  try {
    const transporter = createTransporter()
    const toAddress =
      process.env.CONTACT_NOTIFICATION_TO || process.env.SMTP_USER

    if (!toAddress) {
      console.log('No email address configured for notifications')
      return { skipped: true }
    }

    console.log('Attempting to send email to:', toAddress)
    console.log('SMTP Host:', process.env.SMTP_HOST)
    console.log('SMTP Port:', process.env.SMTP_PORT)
    console.log('SMTP User:', process.env.SMTP_USER)

    const result = await transporter.sendMail({
      from: process.env.CONTACT_NOTIFICATION_FROM,
      to: toAddress,
      replyTo: submission.email,
      subject: `Makjuz contact enquiry: ${submission.service}`,
      text: `Name: ${submission.name}
Email: ${submission.email}
Company: ${submission.company}
Service: ${submission.service}

Project Details:
${submission.details}`,
    })

    console.log('Email sent successfully:', result)
    return result
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

module.exports = { sendContactNotification }