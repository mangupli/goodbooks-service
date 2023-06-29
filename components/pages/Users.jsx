const React = require('react');

const Layout = require('../Layout');
const ProfileCard = require('../ProfileCard');

function Users({ users, user }) {
  return (
    <Layout user={user} title="ГудБук">
      <div className="container users-container">
        {users.map((oneUser) => (
          <ProfileCard key={oneUser.id} oneUser={oneUser} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Users;
