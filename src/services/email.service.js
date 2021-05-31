
import nodemailer from 'nodemailer';
import config from '../configs/config.js';

export async function sendmail(req, res, next) {

  console.log(req.body);

  let sender = req.body.sender;

  const transporter = nodemailer.createTransport({
    host: "178.170.8.35",
    port: 25,
    // port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      // type: 'PLAIN',
      user: 'zepadawan@gmail.com', // generated ethereal user
      pass: 'SSwo425j', // generated ethereal password
    },
    // authMethod: 'NTLM',
    tls: { rejectUnauthorized: false },
    // debug: true
  });

  const mailOptions = {
    from: sender.email,
    to: 'zepadawan@gmail.com',
    subject: sender.subject,
    message: sender.message,
  }
  console.log(mailOptions);

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