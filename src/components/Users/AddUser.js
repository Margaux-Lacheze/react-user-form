import React from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  // on peut dire className pour Card (alors que c'est notre propre composant) car on l'a passé comme prop dans Card
  // normalement className est utilisé pour les composants html build in de React (div, label etc)
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Identifiant</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (en années)</label>
        <input id="age" type="number"></input>
        <button type="submit">Ajouter un utilisateur</button>
      </form>
    </Card>
  );
};

export default AddUser;