import React, {useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrappers";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Identifiant invalide",
        message: "Veuillez entrer un identifiant valide."
      });
      return;
    }

    // le + permet de forcer la conversion du string en number
    if (+enteredUserAge < 1) {
      setError({
        title: "Age invalide",
        message: "Veuillez entrer un âge valide (>0)."
      });
      return;
    }
    // pointeur vers onAddUser d'App.js
    props.onAddUser(enteredName, enteredUserAge);
    // // pour permettre de clear en changeant la value dans le form
    // setEnteredUsername("");
    // setEnteredAge("");

    //NORMALEMENT PAS FAIRE CA MAIS LA JUSTE POUR REINITIALISER
    nameInputRef.current.value = '';
    nameInputRef.current.value = '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  }
  // on peut dire className pour Card (alors que c'est notre propre composant) car on l'a passé comme prop dans Card
  // normalement className est utilisé pour les composants html build in de React (div, label etc)
  // retourner conditionnellement erreur
  return (
    <Wrapper>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      ></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Identifiant</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (en années)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Ajouter un utilisateur</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;