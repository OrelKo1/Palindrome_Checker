const input = document.getElementById("input");
const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modalMessage");
const closeButton = document.querySelector(".close");

function isPal() {
    if (input.value === "") {
        showModal("Nice try BOZO");
        return;
    }
    let string = input.value;
    let reversedString = string.split('').reverse().join('');
    if (string === reversedString) {
        showModal(`${string} is a Palindrome. You are so smart.`);
    } else {
        showModal("Nope, try again.");
    }
    input.value = "";
}

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "flex";
}

// Close the modal when the user clicks on the close button
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
