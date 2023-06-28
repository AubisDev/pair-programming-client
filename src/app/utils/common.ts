export function moveToLastMessage() {
  let messagesContainer = document.getElementById('chat-messages')
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }
}
