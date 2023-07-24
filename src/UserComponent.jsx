import React from "react";

const UserComponent = (props) => {
  const { data } = props;
  return (
    <>
      <h1>User Component</h1>
      <h4>
        Props Example <br />
        {data.name} <br />
        {data.age}
      </h4>
    </>
  );
};

export default UserComponent;
