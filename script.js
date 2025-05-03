function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const resultElement = document.getElementById('loginResult');

  if (username === 'admin' && password === 'password') {
    resultElement.textContent = 'Login successful!';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'Login failed!';
    resultElement.style.color = 'red';
  }

  return false; // Prevent form submission
}
