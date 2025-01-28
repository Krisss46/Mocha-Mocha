const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual OpenAI API key

async function sendMessage() {
  const userMessage = document.getElementById("userMessage").value;
  if (!userMessage.trim()) return;

  // Display the user message in the chat
  appendMessage(userMessage, 'user');
  document.getElementById("userMessage").value = ''; // Clear input field

  // Send the message to the OpenAI API
  const response = await getChatGPTResponse(userMessage);
  appendMessage(response, 'chatgpt');
}

// Append a message to the chat window
function appendMessage(message, sender) {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
}

// Fetch response from OpenAI API
async function getChatGPTResponse(userMessage) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };
  const requestBody = {
    model: "gpt-3.5-turbo", // Choose model, e.g., GPT-3.5 or GPT-4
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
  return data.choices[0].message.content; // Extract the response from GPT
}
