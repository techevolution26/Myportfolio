document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const chatContainer = document.getElementById("chat-container");
    const ChatToggleBtn = document.getElementById("chat-toggle");
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");


    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    ChatToggleBtn.addEventListener("click", () => {
        if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
            chatContainer.style.display = "block";
            setTimeout(() => chatContainer.style.opacity = "1", 10);
        } else {
            chatContainer.style.opacity = "0";
            setTimeout(() => chatContainer.style.display = "none", 300);
        }
    });

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });


    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === "") return;

        // Create message container
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");

        // Get current time
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0"); // Format to 2 digits
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const timeString = `${hours}:${minutes}`;

        // Create timestamp element
        const timeElement = document.createElement("span");
        timeElement.classList.add("chat-time");
        timeElement.innerText = ` ${timeString}`;

        // Add text and timestamp to message
        messageElement.innerText = message;
        messageElement.appendChild(timeElement);

        // Append message to chat box
        chatBox.appendChild(messageElement);

        // Clear input
        chatInput.value = "";

        // Auto-scroll latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
