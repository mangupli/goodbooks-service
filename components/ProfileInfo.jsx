const React = require('react');

function ProfileInfo({ user }) {
  const pictureAdress = user.profilePic
    ? user.profilePic
    : '/images/anonymous-user.png';

  return (
    <>
      <p className="card-text">
        <img
          src={pictureAdress}
          className="card-img-top"
          alt={`Аватарка пользователя ${user.login}`}
        />
      </p>
      <p className="card-text">
        <b>логин: </b>
        <a href={`/users/${user.id}`}>{user.login}</a>
      </p>
    </>
  );
}

module.exports = ProfileInfo;
