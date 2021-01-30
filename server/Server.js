const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cors = require('cors');

dotenv.config({ path: './.env' });

const transport = {
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/api/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const content = `name: ${name} \n email:${email} \n message: ${message} `;

  const mail = {
    from: email,
    replyTo: email,
    to: 'starasp1992@gmail.com',
    subject: subject,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({
        status: 'fail',
      });
    } else {
      res.status(200).json({
        status: 'success',
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use('/', router);
app.listen(process.env.PORT || 4000);
