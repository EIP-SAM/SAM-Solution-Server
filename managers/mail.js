//
// Load librarie(s) used in this manager
//
const nodeMailer = require('nodemailer');

//
// Load config variable(s) from config file
//
const mailConfig = require('../config/mail.config.json');

//
// Create reusable transporter object using SMTP transport
//
// const transporter = nodeMailer.createTransport('smtps://sam-solution-dev@chauv.in:samEIP2017@smtp.mailgun.org');
const transporter = nodeMailer.createTransport(mailConfig);

//
// Setup email sender identifier
//
const mailSender = '"SAM-Solution [no-reply]" <' + mailConfig.auth.user + '>';

//
// Plain text mail sending
//
module.exports.send = function (to, subject, body) {
  return new Promise(function (fulfill, reject) {
    const mail = {
      from: mailSender,
      to: to,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mail, function (error, info) {
      if (error) {
        reject(error);
      } else {
        fulfill(info);
      }
    });
  });
};
