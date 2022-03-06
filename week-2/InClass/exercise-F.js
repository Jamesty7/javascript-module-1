const VALID_MESSAGE = 'Username valid';
const INVALID_MESSAGE = 'Username invalid';

/**
 * @param {string} userName
 * @param {string} userType
 */
function validateUserName(userName, userType) {
  if (checkIfManagement(userType) || validateUsernameFormat(userName)) {
    return VALID_MESSAGE;
  }
  return INVALID_MESSAGE;
}

/**
 *
 * @param {string} userType
 */
function checkIfManagement(userType) {
  return userType === 'admin' || userType === 'manager';
}

/**
 *
 * @param {string} userName
 */
function validateUsernameFormat(userName) {
  return userName[0] === userName[0].toUpperCase() &&
    userName.length >= 5 &&
    userName.length <= 10
}

console.log(validateUserName('Bob', 'admin'), ' | Expected: Username valid');
console.log(validateUserName('Bob', 'manager'), ' | Expected: Username valid');
console.log(
  validateUserName('Bob', 'student'),
  ' | Expected: Username invalid'
);

console.log(
  validateUserName('Bobby', 'student'),
  ' | Expected: Username valid'
);
console.log(
  validateUserName('Bobby Bobby Bobby ', 'student'),
  ' | Expected: Username invalid'
);

console.log(
  validateUserName('bobby', 'student'),
  ' | Expected: Username invalid'
);