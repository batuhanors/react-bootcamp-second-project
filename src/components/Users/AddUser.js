import React, { useState } from "react";
import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.length === 0 || enteredAge.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      });
      return;
    }
    if (enteredAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter age between 1 - 99'
      });
      return;
    }

    props.onUserAdd(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const closeModal = () => {
    setError(null)
  }

  return (
    <div>
    { error && <ErrorModal title={error.title} message={error.message} close={closeModal}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          autoComplete="off"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>

        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
