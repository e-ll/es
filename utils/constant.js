const CONSTANT = {
  REGISTER_USER: "Поздравляем, вы зарегистрировались в Festyline!",
  CONFIRM_EMAIL: "Подтверждение почты",
  FORGOT_PASSWORD: "Восстановление пароля",
  STATUS_REGISTER: "register",
  STATUS_LOGIN: "login",
  STATUS_FORGOT_PASSWORD: "forgot_password",
  CLIENT_ORIGIN:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_ORIGIN
      : "http://festyline.com",
    
};
console.log(process.env.CLIENT_ORIGIN);
const EMAIL_MSGS = 
    {
    confirm: 'Письмо отправлено, проверьте ваш почтовый ящик, иногда оно попадает в спам',
    confirmed: 'Ура! Ваша почта подтверждена!',
    resend: 'Мы переслали вам письмо еще раз, проверьте все папки, в том числе папку Спам',
    couldNotFind: 'Мы не смогли найти такого пользователя, попробуйте еще раз',
    alreadyConfirmed: 'Ваша почта уже подтверждена!'
  }

module.exports = { CONSTANT, EMAIL_MSGS };
