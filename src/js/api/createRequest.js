// const createRequest = async ({ url, method, data }) => {
//   // опции запроса: метод, заголовки и тело (если есть)
//   const options = {
//     method,
//     headers: { "Content-Type": "application/json" },
//   };

//   if (data) options.body = JSON.stringify(data);

//   const response = await fetch(url, options);

//   // если ответ не успешен, выводит ошибку
//   if (!response.ok) console.error(`HTTP error! status: ${response.status}`);

//   // если ответом является пустое тело (например, при DELETE), возвращает null
//   if (response.status === 204) return null;

//   return await response.json();
// };

// export default createRequest;

const createRequest = ({ url, method, data }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Настройка запроса
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

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
            reject(new Error("Ошибка при парсинге JSON"));
          }
        }
      } else {
        // Если статус ответа не успешен, выводим ошибку
        reject(new Error(`HTTP error! status: ${xhr.status}`));
      }
    };

    // Обработка ошибок сети
    xhr.onerror = function () {
      console.error(`Ошибка сети: ${xhr.statusText || "Запрос не может быть выполнен"}`);
      reject(new Error(`Ошибка сети: ${xhr.statusText || "Запрос не может быть выполнен"}`));
    };

    // Отправка данных (если они есть)
    if (data) {
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });
};

export default createRequest;
