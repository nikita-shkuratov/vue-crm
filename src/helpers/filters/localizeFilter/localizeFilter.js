/* import store from '../store' */
import ru from './ru.json'
import en from './en.json'

const locales = {
  'ru-RU': ru,
  'en-US': en
}

export default function localizeFilter (key) {
  const locale = 'en-US'
  return locales[locale][key] || `[Localize error]: key ${key} not found`
}

/* const locale = store.getters.info.locale || 'ru-RU' */
