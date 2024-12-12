// Validate Login Credentials
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === '12345') {
        // Redirect to the Home Page
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
}

// Handle Logout
function logout() {
    // Redirect to the Login Page
    window.location.href = 'index.html';
}
