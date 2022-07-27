import React from "react";
import classes from "./UserList.module.css";

import Card from "../UI/Card";

const UserList = (props) => {
  if (props.users.length > 0) {
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user._id}>
              {user.name} ({user.age} years old).{" "}
            </li>
          ))}
        </ul>
      </Card>
    );
  }
};

export default UserList;
