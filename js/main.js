"use strict";
const form = document.getElementById("message-form");
const chatField = document.getElementsByClassName("chat-field")[0];

form.onsubmit = function(e) {
  e.preventDefault();
  
  let nameInput = form.elements.name;
  let emailInput = form.elements.email;
  let messageTextarea = form.elements.message;
  
  let message = createMessage(nameInput.value, emailInput.value, messageTextarea.value);
  
  sendMessage(message);
  
  messageTextarea.value = "";
}

function createMessage(userName, userEmail, userMessage) {
  let message = document.createElement("div");
  message.className = "message";
  message.setAttribute("data-author", "true");
  
  let par = document.createElement("p");
  par.textContent = userMessage;
  message.appendChild(par);
  
  
  let firstEm = document.createElement("em");
  firstEm.textContent = userName || "Anonymous";
  message.appendChild(firstEm);
  
  let secondEm = document.createElement("em");
  secondEm.textContent = userEmail;
  message.appendChild(secondEm);
  
  return message;
}

function sendMessage(message) {
  chatField.appendChild(message);
  message.classList.add("hidden");
  setTimeout(() => message.classList.remove("hidden"), 5);
}
