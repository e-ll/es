const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateChangePasswordInput(data){
    let errors = {};
    
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password2 = !isEmpty(data.password2) ? data.password2: '';
    
   
    
    if(Validator.isEmpty(data.password)){
        errors.password = "Заполните поле Пароль";
    }
    
    if(!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = 'Пароль должен быть от 2 до 30 символов';
    }
    
    if(Validator.isEmpty(data.password2)){
        errors.password = 'Введите повторно пароль';
    }
    
    if(!Validator.equals(data.password, data.password2)){
        errors.password = 'Пароли должны совпадать';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};