const changeBtn = document.querySelector('.js-change-btn');
const changeForm = document.querySelector('.js-change-profile-form');
const profileCard = document.querySelector('.js-profile-card');

changeBtn.addEventListener('click', (event) => {
  changeForm.style.display = 'block';
  profileCard.style.display = 'none';
});

changeForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { profilePic, login } = event.target;

  const response = await fetch('/api/user', {
    method: 'PUT',
    body: JSON.stringify({ login: login.value, profilePic: profilePic.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const data = await response.json();

    profileCard.style.display = 'block';
    changeForm.style.display = 'none';

    document.querySelector('.js-profile-info').innerHTML = data.html;
  }
});
