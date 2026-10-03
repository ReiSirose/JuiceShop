document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const alertBox = document.getElementById('alertBox');

  function showAlert(message, isError = true) {
    alertBox.textContent = message;
    alertBox.className = isError ? 'alert-error' : 'alert-success';
    alertBox.style.display = 'block';
  }

  // --- Client-Side Validations ---
  if (!email || !password) {
    showAlert('Client Validation Error: Both email and password fields are required.');
    return;
  }

  if (!email.includes('@')) {
    showAlert('Client Validation Error: Email address must contain an "@" symbol.');
    return;
  }

  if (password.length < 8) {
    showAlert('Client Validation Error: Password must be at least 8 characters long.');
    return;
  }

  // --- Send Payload to Express Backend ---
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!response.ok) {
      showAlert(data.message, true);
    } else {
      showAlert(data.message, false);
    }
  } catch (error) {
    showAlert('Network Error: Could not connect to the server.', true);
  }
});