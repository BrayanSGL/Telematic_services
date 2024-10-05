var nodemailer = require("nodemailer");

var MTA = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "2226688f@umich.mx",
    pass: "ywtf rlnn wfgm rdnd",
  },
});

var Opciones = {
  from: "2226688f@umich.mx",
  to: "2226688f@umich.mx",
  subject: "Test de JS",
  text: "Su madre",
};

var message1 = {
  from: "2226688f@umich.mx",
  to: "2226688f@umich.mx",
  subject: "Message title",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>",
};

let message = {
  from: "Nodemailer <2226688f@umich.mx>",
  to: "Nodemailer <2226688f@umich.mx>",
  subject: "AMP4EMAIL message",
  text: "For clients with plaintext support only",
  html: "<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>",
  amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`,
};

MTA.sendMail(message, function (error, info) {
  if (error) {
    console.log("Errorrr");
  } else {
    console.log("respuesta del app: " + info.response);
  }
});
