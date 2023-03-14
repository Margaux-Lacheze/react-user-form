import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = props => {
    // on peut utiliser className pour Card car on a précédémment défini la propriété
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li>
              {user.name} ({user.age} ans)
            </li>
          ))}
        </ul>
      </Card>
    );
};

export default UsersList;