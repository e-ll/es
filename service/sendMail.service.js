const mail = require("../utils/sendMail");
const { CONSTANT } = require("../utils/constant");

const sendRegisterMail = async (data) => {
  let recipients = [
    {
      Email: data.email,
      Name: `${data.name}`,
    },
  ];

  const html = `<h1>Welcome to website, ${data.name}  </h1>`;

  let messages = mail.buildMessage(recipients, html, CONSTANT.REGISTER_USER);

  try {
    const result = await mail.request(messages);
    return result;
  } catch (e) {
    console.log(e);
    throw Error("Error send register mail");
  }
};

const sendConfirmEmail = async (data) => {
  let recipients = [
    {
      Email: data.email,
      Name: `${data.name}`,
    },
  ];

  const html = ` <a href='${CONSTANT.CLIENT_ORIGIN}/confirm/${data._id}'>
    click to confirm email
  </a>`;

  let messages = mail.buildMessage(recipients, html, CONSTANT.CONFIRM_EMAIL);

  try {
    const result = await mail.request(messages);
    return result;
  } catch (e) {
    console.log(e);
    throw Error("Error send register mail");
  }
};


const sendForgotPasswordMail = async (data, token) => {
    let recipients = [
      {
        Email: data.email,
        Name: `${data.name}`,
      },
    ];
  
    const html = ` <a href='${CONSTANT.CLIENT_ORIGIN}/forgot/${token}'>
    
      click to change password
    </a>
    ${CONSTANT.CLIENT_ORIGIN}/change-password/${token}`;
  
    let messages = mail.buildMessage(recipients, html, CONSTANT.FORGOT_PASSWORD);
  
    try {
      const result = await mail.request(messages);
      return result;
    } catch (e) {
      console.log(e);
      throw Error("Error send register mail");
    }
  };

module.exports = { sendRegisterMail, sendConfirmEmail, sendForgotPasswordMail };
