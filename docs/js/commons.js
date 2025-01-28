const chatBtn = document.getElementById("AI_chat_btn")
const chatArea = document.getElementById("chatArea")
const output = document.getElementById("outputField")
const input = document.getElementById("inputField")

var chatOpen = false

function toggleChat(){
 if (chatOpen) {
  chatBtn.setAttribute("class", "closedWin")
  chatOpen = false

 }else{
  chatBtn.setAttribute("class", "openWin")
  chatOpen = true
 }
}

function submitChat(){
 const newMsg = document.createElement("div")
 newMsg.innerHTML = input.value
 newMsg.setAttribute("class", "chat_bubble")
 newMsg.style.textAlign = "left"
 newMsg.style.color = "blue"
 output.appendChild(newMsg)

 input.value = ""
}