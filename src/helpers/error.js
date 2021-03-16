const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Username or Password entered incorrectly!',
  INVALID_PASSWORD: 'Username or Password entered incorrectly!',
  auth: 'Please log in.'
}

export function error (code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}
