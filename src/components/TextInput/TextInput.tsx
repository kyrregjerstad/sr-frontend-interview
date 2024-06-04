import React from "react";
import classes from "./TextInput.module.scss";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput(props: TextInputProps) {
  return (
    <div className={classes.container}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="text"
        id={props.label}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
