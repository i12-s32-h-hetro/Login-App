function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Dummy validation (for test purposes)
  if (username === 'admin' && password === 'password') {
    document.getElementById('loginResult').textContent = 'Login successful!';
  } else {
    document.getElementById('loginResult').textContent = 'Invalid credentials';
  }

  return false; // Prevent form submission
}
