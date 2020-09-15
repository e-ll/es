const CONSTANT = {
  REGISTER_USER: "GREAT YOU REGISTERED",
  CONFIRM_EMAIL: "Confirm Email",
  FORGOT_PASSWORD: "Forgot Password",
  STATUS_REGISTER: "register",
  STATUS_LOGIN: "login",
  STATUS_FORGOT_PASSWORD: "forgot_password",
  CLIENT_ORIGIN:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_ORIGIN
      : "http://localhost:3000",
    
};

const EMAIL_MSGS = 
    {
    confirm: 'Email sent, please check your inbox to confirm',
    confirmed: 'Your email is confirmed!',
    resend: 'Confirmation email resent, maybe check your spam?',
    couldNotFind: 'Could not find you!',
    alreadyConfirmed: 'Your email was already confirmed'
  }

module.exports = { CONSTANT, EMAIL_MSGS };
