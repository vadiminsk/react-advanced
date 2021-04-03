import React from 'react';

const UserHoc = (WrappedComponent, arg1) => {
  return (props) => (
    <>
      <WrappedComponent />
    </>
  );
};

export default UserHoc;
