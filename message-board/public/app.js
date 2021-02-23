const sendMsg = document.getElementById("sendMsg");

document.getElementById("getMsg").addEventListener("click", getMessages);

function getMessages() {
  fetch("/api/message")
    .then((response) => response.json())
    .then((messages) => {
      const msgContainer = document.getElementById("msgContainer");

      msgContainer.innerHTML = "";

      messages.forEach((msg) => {
        const p = document.createElement("p");
        p.append(msg);
        msgContainer.append(p);
      });
    });
}
