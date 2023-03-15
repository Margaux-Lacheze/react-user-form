import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // le + permet de forcer la conversion du string en number
    if (+enteredAge < 1) {
      return;
    }
    // pointeur vers onAddUser d'App.js
    props.onAddUser(enteredUsername, enteredAge);
    // pour permettre de clear en changeant la value dans le form
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  // on peut dire className pour Card (alors que c'est notre propre composant) car on l'a passé comme prop dans Card
  // normalement className est utilisé pour les composants html build in de React (div, label etc)
  return (
    <div>
      <ErrorModal
        title="Il y a eu une erreur !"
        message="Houston, on a un problème !"
      ></ErrorModal>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Identifiant</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (en années)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Ajouter un utilisateur</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;