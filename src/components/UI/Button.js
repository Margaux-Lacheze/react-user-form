import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  // utiliser type ainsi permet de changer le style du bouton selon l'endroit où il est utilisé
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;