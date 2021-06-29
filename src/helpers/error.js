const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Username or Password entered incorrectly!',
  INVALID_PASSWORD: 'Username or Password entered incorrectly!',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'Too many attempts try again later!',
  auth: "You don't have access! Please log in."
}

export function error (code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}
