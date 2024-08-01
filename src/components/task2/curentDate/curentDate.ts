/**
 * Функция для форматирования текущей даты, дня недели и времени на русском языке.
 *
 * @returns {string} Отформатированная строка с датой, днем недели и временем.
 */
 export default function currentDate(): string {
  // Получаем текущую дату и время.
  const date = new Date();

  // Опции для форматирования даты, дня недели и времени.
  const optionsDate: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  const optionsWeekday: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  // Создаем объекты форматирования для даты, дня недели и времени.
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', optionsDate);
  const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', optionsWeekday);
  const timeFormatter = new Intl.DateTimeFormat('ru-RU', optionsTime);

  // Форматируем дату, день недели и время отдельно.
  const formattedDate = dateFormatter.format(date);
  const formattedWeekday = weekdayFormatter.format(date);
  const formattedTime = timeFormatter.format(date);

  // Формируем итоговую отформатированную строку.
  const finalFormat = `${formattedDate}, ${formattedWeekday} ${formattedTime}`;

  // Возвращаем отформатированную строку.
  return finalFormat;
}
