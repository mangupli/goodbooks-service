const registerForm = document.getElementById('form-register');
const loginForm = document.getElementById('form-login');

if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { login, password } = event.target;

    try {
      const response = await fetch('/api/auth/', {
        method: 'POST',
        body: JSON.stringify({
          login: login.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        window.location.href = '/';
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { login, password } = event.target;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          login: login.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        loginForm.reset();
        window.location.href = '/';
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
