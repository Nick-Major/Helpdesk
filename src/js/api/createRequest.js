const createRequest = ({ url, method, data }) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Настройка запроса
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Обработка ответа
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Если статус 204 (No Content), возвращаем null
        if (xhr.status === 204) {
          resolve(null);
        } else {
          // Парсим JSON-ответ
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            reject(new Error('Ошибка при парсинге JSON'));
          }
        }
      } else {
        // Если статус ответа не успешен, выводим ошибку
        reject(new Error(`HTTP error! status: ${xhr.status}`));
      }
    };

    // Обработка ошибок сети
    xhr.onerror = function () {
      console.error(`Ошибка сети: ${xhr.statusText || 'Запрос не может быть выполнен'}`);
      reject(new Error(`Ошибка сети: ${xhr.statusText || 'Запрос не может быть выполнен'}`));
    };

    // Отправка данных (если они есть)
    if (data) {
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });

export default createRequest;
