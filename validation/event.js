const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.partisipantName = !isEmpty(data.partisipantName)
    ? data.partisipantName
    : "";
  data.standType = !isEmpty(data.standType) ? data.standType : "";
  data.numberofplayer = !isEmpty(data.numberofplayer)
    ? data.numberofplayer
    : "";

  if (Validator.isEmpty(data.partisipantName)) {
    errors.partisipantName = "Name of event is required";
  }

  if (Validator.isEmpty(data.standType)) {
    errors.standType = "Type of sport field is required";
  }

  // if(!Validator.isNumeric(data.numberofplayer)){
  //     errors.numberofplayer = 'Must be a number';
  // }

  // if(Validator.isEmpty(data.numberofplayer)){
  //     errors.numberofplayer = 'Number of player field is required';
  // }
  // else if(data.numberofplayer <= 1){
  //     errors.numberofplayer = 'Must be at least 2 players';
  // }
  // else if(data.numberofplayer > 100){
  //     errors.numberofplayer = 'Must be less than 100 players';
  // }

  if (!isEmpty(data.imageURL)) {
    if (!Validator.isURL(data.imageURL)) {
      errors.imageURL = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
