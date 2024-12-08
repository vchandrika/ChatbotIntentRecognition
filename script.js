function sendQuery() {
    let userInput = document.getElementById("user-input").value;
    let chatBoxOutput = document.getElementById("chatbox-output");

    // Display the user's input in the chat
    chatBoxOutput.innerHTML += "<div><strong>You:</strong> " + userInput + "</div>";

    // Send input to backend (simulating backend response)
    fetch('/process_query', {  // Assumes backend route '/process_query' exists
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userInput })
    })
    .then(response => response.json())
    .then(data => {
        chatBoxOutput.innerHTML += "<div><strong>Bot:</strong> " + data.response + "</div>";
    });

    document.getElementById("user-input").value = '';  // Clear input field
}

