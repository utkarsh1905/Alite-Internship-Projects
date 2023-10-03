let messages = JSON.parse(localStorage.getItem("messages")) || [];

function msgDataSubmit(event) {


  event.preventDefault();

  let msgDate = document.getElementById("inputDate").value;
  let msgData = document.getElementById("inputEmptyField").value;

  if (msgDate.length == 0) {
    alert("Enter Date");

  } else if (msgData.length == 0) {
    alert("Enter Message");

  } else {
    messages.push({
      date: msgDate,
      message: msgData
    });


    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message Sent");

    messages = JSON.parse(localStorage.getItem("messages"));

    messages.sort((a, b) => new Date(b.date) - new Date(a.date));



    dispInfo();

    document.getElementById("inputDate").value = "";
    document.getElementById("inputEmptyField").value = "";



  }
}

function countChars() {

  let messageArea = document.getElementById("inputEmptyField");
  let msgCount = document.getElementById("messageCount");
  let remainingChars = 100 - messageArea.value.length;

  msgCount.innerHTML = messageArea.value.length + "/100 characters Used";

  if (remainingChars < 0) {
    messageArea.value = messageArea.value.substring(0, 100);
    remainingChars = 0;
  }
  msgCount.innerHTML = `${remainingChars}/100 Characters Remain`;
  
}

let newMessages = [];

function dispInfo() {

  let newDiv = document.getElementById("displayMessages");

  newDiv.innerHTML = "";

  messages.forEach((message) => {

    let dateElement = document.createElement("p");
    dateElement.className = "message-date";
    dateElement.textContent = message.date;

    let messageElement = document.createElement("p");
    messageElement.className = "message-text";
    messageElement.textContent = message.message;

    newDiv.appendChild(dateElement);
    newDiv.appendChild(messageElement);

  });

  return;

}

function deleteMessages() {

  let newDiv = document.getElementById("displayMessages");

  if (confirm("Are You Sure You Want To Delete Messages")) {

    localStorage.clear();
    newDiv.innerText = "";
    window.location.reload();

  }

}
