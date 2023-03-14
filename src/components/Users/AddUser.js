import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };
  // on peut dire className pour Card (alors que c'est notre propre composant) car on l'a passé comme prop dans Card
  // normalement className est utilisé pour les composants html build in de React (div, label etc)
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Identifiant</label>
        <input id="username" type="text" onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (en années)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button type="submit">Ajouter un utilisateur</Button>
      </form>
    </Card>
  );
};

export default AddUser;