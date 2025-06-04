import { createI18n } from 'vue-i18n'
import { messages } from './lang'  // Импортируем переводы

// Получаем язык из localStorage или устанавливаем язык по умолчанию
const savedLanguage = localStorage.getItem('language') || 'en'

// Настроим i18n
const i18n = createI18n({
    locale: 'uk',         // всегда украинский или locale: savedLanguage,
    fallbackLocale: 'en', // если перевод не найден
    messages
})

export default i18n