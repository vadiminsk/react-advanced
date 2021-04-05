import React from 'react';
import Auth from '../hoc/Auth';
import Card from '../hoc/Card';

const Profile = () => {
  return (
    <Auth>
      <Card>Profile</Card>
    </Auth>
  );
};

export default Profile;
