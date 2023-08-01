const emailField = document.getElementById('mailbox');
const sendButton = document.getElementById('sendButton');
const warningLabel = document.getElementById('warning');

['mousedown', 'touchstart'].forEach(evt => {
    sendButton.addEventListener(evt, () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value)) {
            let email = emailField.value;
            sessionStorage.setItem("email", email);
            window.location.href = "success.html";
        }
        else {
            warningLabel.innerText = "Valid email required";
            emailField.style.color = "hsl(4, 100%, 67%)";
            emailField.style.outline = "1px solid hsl(4, 100%, 67%)";
            emailField.style.background = "hsla(4, 100%, 67%, 0.25)";
        }
    });
});