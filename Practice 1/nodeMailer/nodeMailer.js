const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashutoshtek527@gmail.com',
    pass: 'kcxo ohwm qevs uqlg'
  }
});

const mailOptions = {
  from: 'ashutoshtek527@gmail.com',
  to: 'ashutosh.garg527@gmail.com',
  subject: 'Subject',
  text: 'Email content',
  HTML:'<h1 style = "color: red;">Hello this is a header file</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
  }
});