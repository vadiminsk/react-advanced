import React from 'react';
import UserHoc from '../hoc/UserHoc';

const User = () => {
  return <div>User component</div>;
};

export default UserHoc(User, 'Hello I am');
