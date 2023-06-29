const React = require('react');
const ProfileInfo = require('./ProfileInfo');

function ProfileCard({ oneUser }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <ProfileInfo user={oneUser} />
      </div>
    </div>
  );
}

module.exports = ProfileCard;
