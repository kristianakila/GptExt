chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Здесь будет код для вставки текста в чат
  console.log("Текст для вставки:", request.text);
});

