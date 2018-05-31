var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ampsternetwork@gmail.com',
    pass: process.ENV.PASSWORD
  }
});

var mailOptions = {
  from: 'ampsternetwork@gmail.com',
  to: recipient,
  subject: 'Your order from Dachampster.com',
  text: 'Here is the details of your order.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});