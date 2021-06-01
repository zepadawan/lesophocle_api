
import nodemailer from 'nodemailer';
import config from '../configs/config.js';

export async function sendmail(req, res, next) {

  console.log(req.body);
  let sender = req.body;
  const transporter = nodemailer.createTransport({
    host: "hb57249flex.ikexpress.com",
    port: 25,
    secure: false,
    auth: {
      user: 'zepadawan@gmail.com',
      pass: 'SSwo425j',
    },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: sender.email,
    to: 'zepadawan@gmail.com',
    subject: sender.subject,
    text: sender.message,
    html: "<p>" + sender.message + "</p>"
  }

  transporter.sendMail(mailOptions)
    .then(() => res.send({
      status: 200,
      message: 'send Mail OK !'
    }))
    .catch((err) => res.send({
      status: 400,
      message: 'error : send Mail KO !' + err.message,
    }));

}


export default (sendmail)