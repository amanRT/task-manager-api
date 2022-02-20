const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRIND_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amanrt360@gmail.com",
    subject: "Thanks for joining in!",
    text: `Wlcome to the app, ${name}. Let me know how you get along with the app.`,
    // html: "",
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amanrt360@gmail.com",
    subject: "Goodbye!",
    text: `Goodbye, ${name}. Let me know if we can work together ahead also.`,
    // html: "",
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
