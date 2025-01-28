const apiKey = 'YOUR_OPENAI_API_KEY';

async function sendMessage() {
  const userMessage = document.getElementById("userMessage").value;
  if (!userMessage.trim()) return;

  appendMessage(userMessage, 'user');
  document.getElementById("userMessage").value = '';

  const response = await getChatGPTResponse(userMessage);
  appendMessage(response, 'chatgpt');
}

function appendMessage(message, sender) {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
}

async function getChatGPTResponse(userMessage) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };
  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: userMessage }],
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    console.error('Error:', response.statusText);
    return 'Sorry, there was an issue.';
  }

  const data = await response.json();
  return data.choices[0].message.content;
}