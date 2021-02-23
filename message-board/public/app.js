const sendMsg = document.getElementById("sendMsg");



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

const postMessage = (evt) => {
  evt.preventDefault();
  const msg = document.getElementById("msgInput").value;
  console.log(msg);
  const data = {
    message: msg
  };
  fetch("/api/message", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).catch((err) => console.log(err));
};

document.getElementById("getMsg").addEventListener("click", getMessages);
document.getElementById("sendMsg").addEventListener("click", postMessage);