const { CONSTANT } = require("./constant");
const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC || "35e76b23819a4b11112620ab48a9955b",
  process.env.MJ_APIKEY_PRIVATE || "d4f5bec7e8e71c8f90c3d319631c4c10",
  {
    url: "api.mailjet.com", // default is the API url
    version: "v3.1", // default is '/v3'
    perform_api_call: true, // used for tests. default is true
  }
);

const buildMessage = (recipients, html, subject) => {
  let res = [];

  recipients.forEach((recipient) => {
    const message = {
      From: {
        Email: "hello@festyline.info",
        Name: "Festyline",
      },
      To: [
        {
          Email: recipient.Email,
          Name: recipient.Name,
        },
      ],
      Subject: subject,
      HTMLPart: html,
    };

    res.push(message);
  });

  return res;
};

const request = (messages) =>
  mailjet
    .post("send", { version: "v3.1" })
    .request({ Messages: messages })
    .then((result) => {
      return result.body;
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

module.exports = {
  request,
  buildMessage,
};
