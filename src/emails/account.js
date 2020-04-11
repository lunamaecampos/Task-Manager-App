const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'lunamaecampos@gmail.com',
    subject: 'hello subject',
    text: `Welcome to the app, ${name}. lmk how u like the app.`
  })
}
const secondCancellationEmail = (email, name) =>{
  sgMail.send({
    to: email,
    from: 'lunamaecampos@gmail.com',
    subject: 'sad 2 see u go :c ',
    text: `sowwieee u have to leave ${name}. please come back`
  })
}

module.exports = {
  sendWelcomeEmail,
  secondCancellationEmail
}
