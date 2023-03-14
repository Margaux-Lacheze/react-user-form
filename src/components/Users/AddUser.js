import React from "react";

const AddUser = props => {
    return (
<form>
    <label htmlFor="username">Identifiant</label>
    <input id= "username" type="text"></input>
    <label htmlFor="age">Age (en années)</label>
    <input id= "age" type="number"></input>
    <button type="submit">Ajouter un utilisateur</button>
</form>
    );
};

export default AddUser;