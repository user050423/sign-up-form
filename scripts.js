const password = document.getElementById('user-password');
const confirmPassword = document.getElementById('confirm-password');

const button = document.querySelector('#submitButton');

button.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value) {
        alert("Password don't match! Try again.")
    }
    e.preventDefault();
})